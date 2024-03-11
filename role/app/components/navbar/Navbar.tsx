"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "User Login", href: "/userlogin" },
  { name: "Home", href: "/home" },
  { name: "Product", href: "/product" },
  { name: "Contact", href: "/contact" },
  { name: "Ant Design", href: "/ant_design" },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive ? "font-bold m-4 text-red-600 " : " text-blue-500 m-4"
            }
          >
            {link.name}
          </Link>
        );
      })}
      {/* <nav>
        <div>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              listStyle: "none",
              marginTop: "2rem",
              color: "maroon",
            }}
          >
            <li>
              <Link href="/userlogin"> Userlogin </Link>
            </li>
            <li>
              <Link href="/home"> Home </Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>

            {/* <li>
            <Link href="/param">param</Link>
          </li>
          <li>
            <Link href="/demo">demo</Link>
          </li>
          <li>
            <Link href="/123">abc</Link>
          </li> */}
      {/* </ul>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
