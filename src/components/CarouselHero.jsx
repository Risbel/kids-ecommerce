import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "classnames/bind";

const CarouselHero = ({ slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className={clsx("flex flex-col flex-shrink")}>
      <div className="flex overflow-hidden relative  max-w-[290px]">
        {slides.map((s) => (
          <Image
            style={{ transform: `translateX(-${curr * 100}%)` }}
            className="duration-700 ease-out transition-transform"
            priority
            src={s}
            width={500}
            height={700}
            key={s}
            alt={s}
          />
        ))}

        <div className="absolute inset-0 flex">
          <button onClick={prev} className="h-full w-1/2"></button>
          <button onClick={next} className="h-full w-1/2"></button>
        </div>

        <div className="absolute md:bottom-4 lg:bottom-8 right-0 left-0">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {slides.map((slide, i) => (
              <div
                key={slide}
                className={`
              transition-all duration-200 w-2 h-2 bg-cyan-800 rounded-full
              ${curr === i ? "bg-cyan-800" : "bg-opacity-30"}
            `}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="text-xl text-cyan-700 font-bold">GIRL POWER</h2>
        <p className="text-gray-500">For a colorful summer</p>
      </div>
    </div>
  );
};

export default CarouselHero;
