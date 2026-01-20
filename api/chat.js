// api/chat.js
const fs = require("fs");
const path = require("path");
const { pipeline } = require("@xenova/transformers");

let embeddingsPipeline;
let generationPipeline;
let chunkVectors = [];

// Load model pipelines on server start
async function initModels() {
  console.log("Loading embeddings model...");
  embeddingsPipeline = await pipeline(
    "feature-extraction",
    "sentence-transformers/all-MiniLM-L6-v2"
  );

  console.log("Loading text generation model...");
  generationPipeline = await pipeline("text2text-generation", "google/flan-t5-small");

  console.log("Reading knowledge base...");
  const knowledgePath = path.join(process.cwd(), "data", "sam-engineering.md");
  const content = fs.readFileSync(knowledgePath, "utf8");

  // Split into chunks
  const chunks = content.split("\n\n").map((c) => c.trim()).filter(Boolean);

  // Precompute chunk embeddings
  chunkVectors = [];
  for (let chunk of chunks) {
    const vec = await embeddingsPipeline(chunk);
    // flatten the output array
    chunkVectors.push({ chunk, vector: vec.flat() });
  }
}

initModels(); // start loading models on server start

// Cosine similarity
function cosineSim(a, b) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const normB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dot / (normA * normB);
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { message } = req.body || {};
  if (!message || message.length > 300)
    return res.json({ reply: "Please ask a short, clear question." });

  if (!embeddingsPipeline || !generationPipeline) {
    return res.status(503).json({ reply: "Models are still loading. Please wait a few seconds." });
  }

  // Embed the question
  const questionVec = (await embeddingsPipeline(message)).flat();

  // Find top 3 relevant chunks
  const topChunks = chunkVectors
    .map((c) => ({ ...c, score: cosineSim(c.vector, questionVec) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((c) => c.chunk);

  // Generate answer using small LLM
  const context = topChunks.join("\n");
  const prompt = `Answer the question using ONLY the information below. If the answer is not in the info, say: "Please contact S.A.M Engineering directly.".\n\nContext:\n${context}\n\nQuestion: ${message}`;

  const output = await generationPipeline(prompt);

  res.status(200).json({
    reply: output[0].generated_text,
  });
};
