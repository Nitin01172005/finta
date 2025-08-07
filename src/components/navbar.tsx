import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const links = [
    { href: "/founders", title: "Founders" },
    { href: "/guide", title: "Guide" },
    { href: "/prices", title: "Prices" },
    { href: "/login", title: "Login" },
  ];
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 ">
      <Link href="/">
        <Image
          src="/logo.svg"
          height={80}
          width={80}
          loading="lazy"
          draggable={false}
          alt="logo"
        />
      </Link>
      <div className="items-center flex gap-4">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="font-medium text-black hover:text-neutral-500 text-[15px] transition duration-200"
          >
            {link.title}
          </Link>
        ))}
        <button className="px-4 bg-[#2579f4] text-sm hover:bg-[#2578f4e9] text-white font-medium rounded-lg py-2 text-md text-shadow-md shadow-lg">
          Start free trial
        </button>
      </div>
    </div>
  );
};

export default Navbar;
