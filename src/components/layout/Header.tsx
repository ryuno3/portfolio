"use client";

import Link from "next/link";
import React from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  const menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300
      ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="flex justify-between items-center p-2 backdrop-blur-sm">
        <nav>
          <ul className="flex gap-4 lg:gap-8">
            {menu.map((item) => (
              <li key={item.name} className="font-bold lg:text-3xl">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
