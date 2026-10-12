import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
"https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/2603200d-379a-4c59-a4d3-4f14f4a9ba33/ADP_6704.jpg?format=1500w",
"https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/0ac14b51-3af5-45de-a5d7-74328d5f4074/ADP_6321.JPG?format=1500w",
"https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/c7d95dcc-0b80-4a36-9822-caf52e54d98a/ADP_6860.jpg?format=1500w",
"https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/af6c04ea-101b-486e-83c7-7c34d00d8ad5/ADP_5752.JPG?format=1500w",
"https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/aee54b39-1ec9-4a9e-b4c3-5319b11acf7a/ADP_5423.jpg?format=1500w",
"https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/a42ff8d8-de53-48d2-bf6a-cd37ad94cde1/ADP_6177.jpg?format=1500w",
"https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/596f9562-703c-4e4a-8451-ac26fb5dfa16/ADP_6708.JPG?format=1500w",
"https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/90a18ceb-ebb8-461c-9d05-d68e9fbf2267/ADP_6192.JPG?format=1500w",
"https://images.squarespace-cdn.com/content/v1/6182dd41e5fdbc615031592a/f7e6f31f-873b-4514-ad3b-92ae7e9f92e7/ADP_5165.jpg?format=1500w"];


const SLIDE_INTERVAL = 5000;

export default function ImageGallery() {
  const [index, setIndex] = useState(0);

  const go = useCallback((dir) => {
    setIndex((prev) => (prev + dir + IMAGES.length) % IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-primary py-10 md:py-14 pb-20 md:pb-28 flex items-center">
      <div className="mx-auto max-w-[900px] px-4 w-full">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-bold-foreground/70 text-center mb-2">
          Community Moments
        </p>
        

        

        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <div className="aspect-[16/10] relative">
            {IMAGES.map((src, i) =>
            <img
              key={src}
              src={src}
              alt={`SFVGA community moment ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: i === index ? 1 : 0 }}
              loading={i === 0 ? "eager" : "lazy"} />

            )}
          </div>

          <button
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 text-primary rounded-full p-2 transition-colors">
            
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 text-primary rounded-full p-2 transition-colors">
            
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
            {IMAGES.map((_, i) =>
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-primary-foreground" : "w-2 bg-primary-foreground/40"}`
              } />

            )}
          </div>
        </div>
      </div>
    </section>);

}