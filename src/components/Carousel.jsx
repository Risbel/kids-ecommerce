import Image from "next/image";
import React from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const Carousel = () => {
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 600;
  };

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 600;
  };

  return (
    <div className="relative">
      <div className="w-full absolute top-1/2 md:hidden">
        <div className="flex justify-between">
          <button className="hover:backdrop-blur-md rounded-full z-40" onClick={scrollLeft}>
            <HiOutlineChevronLeft className="h-8 w-8 stroke-slate-600" />
          </button>
          <button className="hover:backdrop-blur-sm  rounded-full z-40" onClick={scrollRight}>
            <HiOutlineChevronRight className="h-8 w-8 stroke-slate-600" />
          </button>
        </div>
      </div>
      <div
        id="content"
        className="z-10 px-4 md:px-0 flex gap-4 py-10 justify-start overflow-x-auto md:grid grid-cols-5 scrollbar-hide scroll-smooth"
      >
        <Image
          className="object-cover transition hover:drop-shadow-xl hover:brightness-110 hover:-translate-y-0.5 duration-50 rounded-md"
          width={500}
          height={500}
          src="/84981049_620107085435507_4260875787090681190_nlow.jpg"
          alt="First person"
          priority
        />
        <Image
          className="object-cover transition hover:drop-shadow-2xl hover:brightness-110 hover:-translate-y-0.5 duration-50  rounded-md"
          width={500}
          height={500}
          src="/85051426_2060664737412512_8458893884651247910_nlow.jpg"
          alt="Second person"
          priority
        />
        <Image
          className="object-cover transition hover:drop-shadow-2xl hover:brightness-110 hover:-translate-y-0.5 duration-50  rounded-md"
          width={500}
          height={500}
          src="/85069033_185901059177965_6767010623440980864_nlow.jpg"
          alt="Third person"
          priority
        />
        <Image
          className="object-cover transition hover:drop-shadow-2xl hover:brightness-110 hover:-translate-y-0.5 duration-50  rounded-md"
          width={500}
          height={500}
          src="/87339849_530805007551424_292323017375800029_nlow.jpg"
          alt="Third person"
          priority
        />
        <Image
          className="object-cover transition hover:drop-shadow-2xl hover:brightness-110 hover:-translate-y-0.5 duration-50  rounded-md"
          width={500}
          height={500}
          src="/87413583_2660130777540405_5722961474466513534_nlow.jpg"
          alt="Third person"
          priority
        />
      </div>
    </div>
  );
};

export default Carousel;
