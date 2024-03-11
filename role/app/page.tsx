import React from "react";
import Home from "./home/page";


function page() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "8rem",
        }}
      >
        Welcome!
        <Home/>
      </h1>
    </div>
  );
}

export default page;
