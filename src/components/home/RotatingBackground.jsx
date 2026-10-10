import React, { useState, useEffect } from "react";

const IMAGES = [
  "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/2603200d-379a-4c59-a4d3-4f14f4a9ba33/ADP_6704.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/0ac14b51-3af5-45de-a5d7-74328d5f4074/ADP_6321.JPG?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/c7d95dcc-0b80-4a36-9822-caf52e54d98a/ADP_6860.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/af6c04ea-101b-486e-83c7-7c34d00d8ad5/ADP_5752.JPG?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/aee54b39-1ec9-4a9e-b4c3-5319b11acf7a/ADP_5423.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/a42ff8d8-de53-48d2-bf6a-cd37ad94cde1/ADP_6177.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/596f9562-703c-4e4a-8451-ac26fb5dfa16/ADP_6708.JPG?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/90a18ceb-ebb8-461c-9d05-d68e9fbf2267/ADP_6192.JPG?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/f7e6f31f-873b-4514-ad3b-92ae7e9f92e7/ADP_5165.jpg?format=2500w",
];

const FADE_DURATION = 800;
const SLIDE_INTERVAL = 6000;

export default function RotatingBackground() {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((prev) => {
          const next = (prev + 1) % IMAGES.length;
          setNextIndex((next + 1) % IMAGES.length);
          return next;
        });
        setFading(false);
      }, FADE_DURATION);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url("${src}")`,
            opacity: i === index ? 1 : i === nextIndex ? (fading ? 0.5 : 0) : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-background/80" />
    </div>
  );
}