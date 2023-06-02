import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import clsx from "classnames";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ items }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="md:hidden">
      {!isActive ? (
        <button
          onClick={() => setIsActive((prev) => !prev)}
          className="fixed z-40 right-3 top-3 bg-[#ffffff] active:bg-orange-500 hover:bg-orange-kids rounded-full p-2 shadow-xl"
        >
          <HiOutlineMenu className="w-5 h-5 stroke-[#5c5959]" />
        </button>
      ) : (
        <>
          <div className="fixed z-[100] flex justify-end right-3 top-3">
            <button
              onClick={() => setIsActive((prev) => !prev)}
              className="rounded-full hover:bg-orange-kids p-2 active:bg-orange-500"
            >
              <HiOutlineX className="w-5 h-5 stroke-[#5c5959]" />
            </button>
          </div>
          <div className="fixed z-[90] right-3 top-3 bg-[#ffffff] rounded-3xl h-3/5 w-2/3 shadow-2xl">
            <div className="grid grid-flow-row justify-around h-full py-10">
              {items.map((item) => (
                <Link
                  key={item.name}
                  className={clsx(
                    item.current ? "text-orange-500 font-bold" : "text-gray-500 font-semibold",
                    "flex items-center justify-center hover:text-orange-600 hover:drop-shadow-lg"
                  )}
                  href={item.href}
                >
                  <div className="flex flex-col items-center">
                    <span>{item.name}</span>

                    {item.current && (
                      <Image className="h-2 w-auto" src="/home-8.png" width={200} height={50} alt="Underline" />
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Sidebar;
