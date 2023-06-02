import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import Image from "next/image";

import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { useContext, useEffect, useState } from "react";
import { Store } from "@/utils/Store";

const Navbar = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setcartItemsCount] = useState(0);

  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

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
      name: "ALL",
      href: "/all",
      current: isCurrentPath("/all"),
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
    {
      name: "COMPONENTS",
      href: "/components",
      current: isCurrentPath("/components"),
    },
  ];

  return (
    <nav className="w-full flex flex-col items-center">
      <Sidebar items={navigation} />
      <Link href="/">
        <Image
          className="w-44 h-auto hover:drop-shadow-md"
          src="/logo.png"
          width={150}
          height={50}
          alt="Logo kids with colors"
          blurDataURL={"/logo.png"}
          priority
        />
      </Link>
      <div className="flex gap-12 items-center mt-4">
        <div className="hidden md:flex justify-center gap-10 py-1">
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
              <div className="flex flex-col items-center">
                <span>{item.name}</span>

                {item.current && (
                  <Image className="h-2 w-auto" src="/home-8.png" width={200} height={50} alt="Underline" />
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-4 relative bottom-1">
          <FiHeart className="h-5 w-5 stroke-gray-600" />
          <Link href="/cart">
            <div className="flex">
              <FiShoppingCart className="h-5 w-5 stroke-gray-600 -mr-1" />
              <span className="flex justify-center items-center text-xs bg-orange-kids px-1  rounded-full -translate-y-3">
                {cartItemsCount}
              </span>
            </div>
          </Link>
          <FiSearch className="h-5 w-5 stroke-gray-600" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
