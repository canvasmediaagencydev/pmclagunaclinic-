"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  { src: "/about/PMC-455.jpg", alt: "Phuket Medical Clinic" },
  { src: "/about/PMC-472.jpg", alt: "Medical Equipment" },
  { src: "/about/PMC-477.jpg", alt: "Medical Team" },
  { src: "/about/PMC-683.jpg", alt: "Clinic Interior" },
];

const SLIDE_COUNT = slides.length;

export default function AboutCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevIndex = (activeIndex - 1 + SLIDE_COUNT) % SLIDE_COUNT;
  const nextIndex = (activeIndex + 1) % SLIDE_COUNT;

  const goToSlide = (index: number) => setActiveIndex(index);

  return (
    <div className="relative">
      <div className="relative w-full aspect-[4/3]">
        {slides.map((slide, idx) => (
          <div
            key={slide.src}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              idx === activeIndex ? "opacity-100 z-20" : "opacity-0"
            }`}
          >
            <div className="relative w-4/5 h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority={idx === activeIndex}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
          </div>
        ))}

        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-3/4 opacity-60 transition-opacity duration-500 z-10">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <Image src={slides[prevIndex].src} alt="Previous" fill className="object-cover" sizes="20vw" quality={75} />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-3/4 opacity-60 transition-opacity duration-500 z-10">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <Image src={slides[nextIndex].src} alt="Next" fill className="object-cover" sizes="20vw" quality={75} />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl"
        onClick={() => goToSlide(prevIndex)}
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl"
        onClick={() => goToSlide(nextIndex)}
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goToSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === activeIndex ? "bg-blue-600 w-8" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>

      <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 z-50">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}
