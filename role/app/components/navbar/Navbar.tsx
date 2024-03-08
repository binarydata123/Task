import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   
    <nav>
       
    
       <li><Link href="/userlogin"> Userlogin</Link></li>
       <li><Link href="/home"> home </Link></li>
       <li><Link href="/about"> about</Link></li>
       <li><Link href="/contact">contact</Link></li>
        
       
       
    </nav>
  )
}

export default Navbar