"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Home from "./home/page";


function page() {
  const router = useRouter();
  const handleClick1 = () => {
    alert("Goto UserLogin Page");
    router.push("/userlogin");
  };
  // const handleClick2 = () => {
  //   console.log("third page");
  //   router.push("/home");
  // };
  // const handleClick3 = () => {
  //   console.log("third page");
  //   router.push("/product");
  // };
  // const handleClick4 = () => {
  //   console.log("third page");
  //   router.push("/contact-us");
  // };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "8rem",
          fontFamily: "fantasy",
          color: "darkcyan",
          fontStyle: "oblique",
        }}
      >
        Welcome!
        <Home/>
      </h1>
      <button onClick={handleClick1}>1</button>
      {/* <br />
      <button onClick={handleClick2}>2</button>
      <br />
      <button onClick={handleClick3}>3</button>
      <br />
      <button onClick={handleClick4}>4</button> */}
    </div>
  );
}

export default page;
