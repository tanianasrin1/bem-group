"use client";
import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function Carousel({data}) {
  const [slide, setSlide] = useState(0);

  const autoplayInterval = 3000; 

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  const handleAutoplay = () => {
    nextSlide();
  };

  useEffect(() => {
    const autoplayTimer = setInterval(handleAutoplay, autoplayInterval);
    return () => clearInterval(autoplayTimer);
  }, [slide]);
  
  return (
    <div className="container-sk lg:py-16 md:py-12 py-5">
      <h1 className="text-center font-semibold text-black mb-10 text-3xl">Carousel Slider</h1>
      <div className="carousel w-full">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {data.map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
}
