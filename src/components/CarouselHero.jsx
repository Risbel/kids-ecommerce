import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "classnames/bind";

const CarouselHero = ({ slides, size = "sm", autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className={clsx("relative overflow-hidden", `max-w-${size}`)}>
      <div
        className="flex transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s) => (
          <Image className="w-auto h-auto" priority src={s} width={500} height={500} key={s} alt={s} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={prev} className="h-full w-1/2"></button>
        <button onClick={next} className="h-full w-1/2"></button>
      </div>

      <div className="absolute bottom-8 right-0 left-0">
        <div className="flex items-center justify-center gap-4">
          {slides.map((slide, i) => (
            <div
              key={slide}
              className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${curr === i ? "p-1.5" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselHero;
