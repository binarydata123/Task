import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1>Conflict Resolved</h1>
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
    </nav>
  );
};

export default Navbar;
