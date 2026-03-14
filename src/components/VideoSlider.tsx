import { useState, useRef, useEffect } from "react";
import "./VideoSlider.css";

interface Slide {
  title: string;
  description: string;
  video: string;
  thumb: string;
}

const slides: Slide[] = [
  {
    title: "Industrial Plant Construction",
    description:
      "Integrated electromechanical engineering for large industrial facilities including processing plants and infrastructure systems.",
    video: process.env.PUBLIC_URL + "/assets/Videos/dwangwa plant.mp4",
    thumb: process.env.PUBLIC_URL + "/assets/Videos/dwangwa plant.png",
  },
  {
    title: "Thermal Imaging and Diagnostics",
    description:
      "Advanced thermal imaging solutions to detect equipment hotspots, monitor machinery health, and prevent downtime through accurate temperature diagnostics and predictive maintenance.",
    video: process.env.PUBLIC_URL + "/assets/Videos/thermo.mp4",
    thumb: process.env.PUBLIC_URL + "/assets/Videos/thermo.png",
  },
];

export default function VideoSlider() {
  const [index, setIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const goToSlide = (i: number) => {
    setIndex(i);
    setProgress(0);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const percentage = (video.currentTime / video.duration) * 100;
      setProgress(isNaN(percentage) ? 0 : percentage);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", nextSlide);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", nextSlide);
    };
  }, [index]);

  /* swipe support */
  let touchStartX = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const diff = touchStartX - e.changedTouches[0].screenX;

    if (diff > 50) nextSlide();
    if (diff < -50)
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[index];

  return (
    <section className="section video-slider-section">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="section-header">
          <h2>Our Expertise in Motion</h2>
          <p>
            Watch how we deliver industrial, mechanical, and thermal imaging
            solutions across Malawi.
          </p>
        </div>

        <div
          className="video-slider"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* VIDEO LEFT */}
          <div className="video-container">
            <video
              ref={videoRef}
              key={current.video}
              autoPlay
              muted
              playsInline
              preload="metadata"
            >
              <source src={current.video} type="video/mp4" />
            </video>
          </div>

          {/* TEXT RIGHT */}
          <div className="video-info">
            <h3>{current.title}</h3>
            <p>{current.description}</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="thumbnail-nav">
              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.thumb}
                  loading="lazy"
                  className={i === index ? "thumb active" : "thumb"}
                  onClick={() => goToSlide(i)}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}