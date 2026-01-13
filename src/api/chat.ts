//api/chat.ts
import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

interface ChatRequestBody {
    message: string;
}

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const body = req.body as ChatRequestBody;

    if (!body?.message || body.message.length > 300) {
        return res.json({
            reply: "Please ask a short, clear question.",
        });
    }

    const knowledgePath = path.join(
        process.cwd(),
        "data",
        "sam-engineering.md"
    );

    const knowledge = fs.readFileSync(knowledgePath, "utf8");

    const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: `You are a professional assistant for S.A.M /engineering. Only answer using information below. If the question is outside this information, direct the user to contact the company. ${knowledge}`,
            },
            { role: "user", content: body.message },
        ],
    });

    return res.status(200).json({
        reply: completion.choices[0].message.content,
    });
}