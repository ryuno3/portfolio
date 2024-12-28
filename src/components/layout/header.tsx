import Link from "next/link";
import React from "react";

const Header = () => {
  const menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-5 bg-transparent">
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
  );
};

export default Header;
