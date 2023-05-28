import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarWithPictures = () => {
  const images = [
    {
      url: "/baby.png",
      name: "Baby & Toddler",
      urlPage: "/#",
    },
    {
      url: "/boy.png",
      name: "For Girls",
      urlPage: "/#",
    },
    {
      url: "/girl.png",
      name: "For Boys",
      urlPage: "/#",
    },
    {
      url: "/toys.png",
      name: "Home & Toys",
      urlPage: "/#",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-around gap-2 md:gap-8 p-4 md:p-8 mx-4 md:m-0 border border-gray-400 border-dashed">
      {images.map((image) => (
        <div className="flex justify-center" key={image.name}>
          <Link
            className="transition hover:drop-shadow-xl hover:-translate-y-0.5 duration-50 text-gray-600 hover:text-orange-600"
            href={image.urlPage}
          >
            <Image className="w-auto h-auto pb-2" src={image.url} width={500} height={500} alt={image.name} priority />
            <span className="font-semibold">{image.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavbarWithPictures;
