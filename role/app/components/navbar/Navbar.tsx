import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   
    <nav>
       
    
       <li><Link href="/userlogin"> Userlogin</Link></li>
       <li><Link href="/home"> home </Link></li>
       <li><Link href="/about"> about</Link></li>
       <li><Link href="/contact">contact</Link></li>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse cum a vero ex ea accusamus repudiandae, eaque, omnis possimus tempora porro.</h1>
       
       
    </nav>
  )
}

export default Navbar