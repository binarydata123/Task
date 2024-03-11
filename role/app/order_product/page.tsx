"use client";
import React from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    // router.push("/product");
    // router.back();
    router.forward();
  };
  return (
    <div>
      <h1> Order Product</h1>
      <button onClick={handleClick} className="">
        Place Order
      </button>
    </div>
  );
}

export default page;
