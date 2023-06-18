import Link from "next/link";
import { useState, useEffect } from "react";
import { IconType } from "react-icons";
import { AiFillHome, AiFillCode } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";

function NavButton({ icon: Icon }: { icon: IconType }) {
  return (
    <Link
      href="/"
      className="grid place-items-center text-2xl hover:text-4xl aspect-square w-12 rounded-full hover:w-20 bg-gray-600 dark:bg-gray-100 color-white hover:bg-gray-700 transition-all duration-300"
    >
      <Icon className="text-white dark:text-black duration-100" />
    </Link>
  );
}

const NavItems = [
  {
    icon: AiFillHome,
    href: "/",
  },
  {
    icon: TbCertificate,
    label: "/experience",
  },
  {
    icon: AiFillCode,
    label: "/projects",
  },
  {
    icon: RiContactsFill,
    label: "Contact",
  },
];

function Dock() {
  return (
    <div className="flex w-full justify-center">
      <div className="fixed bottom-10">
        <div className="flex h-16 items-center gap-4 rounded-xl bg-gray-400 dark:bg-gray-700 p-4 shadow-lg">
          {NavItems.map((item, idx) => (
            <NavButton key={idx} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dock;
