"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    get_Data();
  }, []);
  async function get_Data() {
    const users = await axios.get("https://dummyjson.com/products/1");
    console.log(users);
    setData(users.data);
    console.log(data, "here data");
  }
  return (
    <>
      <div>
        <h1>fetch api</h1>
      </div>
      <div className="container">
        <div className="mt-3">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>name</th>
                <th>email</th>
                <th>address</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr> */}
              {/* <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{address}</td> */}
              {/* </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default page;
