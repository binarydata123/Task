import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/1")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <h1>hello</h1>
    // <div className='container'>
    //   <div className='mt-3'>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Id</th>
    //           <th>name</th>
    //           <th>email</th>
    //           <th>address</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {
    //           data.map((user,index)=>{
    //             return <tr key={index}>
    //               <td>{user.id}</td>
    //               <td>{user.name}</td>
    //               <td>{user.email}</td>
    //               <td>{user.address}</td>
    //             </tr>
    //           })
    //         }

    //       </tbody>
    //     </table>
    //   </div>

    // </div>
  );
}

export default page;
