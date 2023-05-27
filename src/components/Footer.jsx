import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const NavFooter = () => {
  const location = useRouter();

  const isCurrentPath = (path) => path === location?.pathname;

  const navigation = [
    {
      name: "HOME",
      href: "/",
      current: isCurrentPath("/"),
    },
    {
      name: "TERMS & CONDITIONS",
      href: "/terms&conditions",
      current: isCurrentPath("/terms&conditions"),
    },
    {
      name: "CAREERS",
      href: "/careers",
      current: isCurrentPath("/careers"),
    },
    {
      name: "CONTACT US",
      href: "/contact-us",
      current: isCurrentPath("/contact-us"),
    },
    {
      name: "FAQ",
      href: "/faq",
      current: isCurrentPath("/faq"),
    },
  ];

  return (
    <nav>
      <div className="flex gap-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              "transition-colors  duration-200",
              item.current ? "underline underline-offset-2" : " hover:text-orange-600 hover:drop-shadow-lg",
              "py-2 text-white text-sm font-semibold"
            )}
          >
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <div className="absolute bottom-0">
      <div
        className="flex flex-col justify-center items-center h-52 w-screen bg-ocre-kids "
        style={{
          "--mask":
            " radial-gradient(26.55px at 50% 37.40px,#000 99%,#0000 101%) calc(50% - 34px) 0/68px 100%, radial-gradient(26.55px at 50% -20.4px,#0000 99%,#000 101%) 50% 17px/68px 100% repeat-x",
          WebkitMask: "var(--mask)",
          mask: "var(--mask)",
        }}
      >
        <div className="flex justify-center items-center">
          <Image
            className="h-auto w-auto hover:drop-shadow-lg"
            src="/logo_retina.png"
            width={120}
            height={50}
            alt="Logo kids"
            placeholder="blur"
            blurDataURL={"/logo_retina.png"}
          />
        </div>
        <NavFooter />
        <div className="flex gap-4 mt-2">
          <FaFacebook className="fill-white w-6 h-6" />
          <FaInstagram className="fill-white w-6 h-6" />
          <FaTwitter className="fill-white w-6 h-6" />
        </div>
        <p className="absolute bottom-0 text-white font-light">
          <span className="font-semibold">Privacy Policy</span> / This is a sample website - Provided by Risbel in 2023
        </p>
      </div>
      <div className="text-center">
        This website uses cookies to improve your experience. We will assume you are ok with this, but you can opt-out
        if you wish.
      </div>
    </div>
  );
};

export default Footer;
