import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1>Conlfict Resolved</h1>
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
            marginTop: "2rem",
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

       <li><Link href="/userlogin"> Userlogin</Link></li>
       <li><Link href="/home"> home </Link></li>
       <li><Link href="/about"> about</Link></li>
       <li><Link href="/contact">contact</Link></li>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse cum a vero ex ea accusamus repudiandae, eaque, omnis possimus tempora porro.</h1>

    </nav>
  );
};

export default Navbar;
