import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import Image from "next/image";

import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const location = useRouter();

  const isCurrentPath = (path) => path === location?.pathname;

  const navigation = [
    {
      name: "HOME",
      href: "/",
      current: isCurrentPath("/"),
    },
    {
      name: "CLOTHES",
      href: "/clothes",
      current: isCurrentPath("/clothes"),
    },
    {
      name: "TOYS",
      href: "/toys",
      current: isCurrentPath("/toys"),
    },
    {
      name: "SALES",
      href: "/sales",
      current: isCurrentPath("/sales"),
    },
    {
      name: "ABOUT US",
      href: "/about-us",
      current: isCurrentPath("/about-us"),
    },
  ];

  return (
    <nav className="w-screen flex flex-col items-center">
      <Image
        className="w-44 h-auto"
        src="/logo.png"
        width={100}
        height={50}
        alt="Logo kids with colors"
        placeholder="blur"
        blurDataURL={"/logo.png"}
      />
      <div className="flex gap-12 items-center">
        <div className="flex justify-center gap-10 py-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                "transition-colors  duration-200",
                item.current ? " text-orange-500" : "text-gray-500 hover:text-orange-600 hover:drop-shadow-lg",
                "py-2 rounded-md text-md font-semibold"
              )}
            >
              <div>
                <span>{item.name}</span>
                {item.current && (
                  <Image className="h-auto w-auto" src="/home-8.png" width={40} height={10} alt="Underline" />
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-4 relative bottom-1">
          <FiHeart className="h-5 w-5" />
          <FiShoppingCart className="h-5 w-5" />
          <FiSearch className="h-5 w-5" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
