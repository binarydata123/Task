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

    <nav>
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
            marginTop: "2rem",
            color:"white"
          }}
        >
        <li>
          <Link href="/home" style={{textDecoration:"none"}}> Home </Link>
        </li>
          <li>
            <Link href="/userlogin" style={{textDecoration:"none"}}> Userlogin </Link>
          </li>
          <li>
            <Link href="/product" style={{textDecoration:"none"}}>Product</Link>
          </li>
          <li>
            <Link href="/contact" style={{textDecoration:"none"}}>Contact</Link>
          </li>
          <li>
            <Link href="/ant_design" style={{textDecoration:"none",}}>Ant design</Link>
          </li>
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
        </ul>
      </div>

       {/* <li><Link href="/userlogin"> Userlogin</Link></li>
       <li><Link href="/home"> home </Link></li>
       <li><Link href="/about"> about</Link></li>
       <li><Link href="/contact"> contact</Link></li>
       
       <li><Link href="/contact">contact</Link></li>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse cum a vero ex ea accusamus repudiandae, eaque, omnis possimus tempora porro.</h1> */}
    </nav>
      {/* </ul>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
