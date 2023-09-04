"use client";

import React from 'react';
import Link from 'next/link';
import style from './navbar.module.css';
import DarkModeToggel from '../DarkMode/DarkModeToggel';

function Navbar() {
  console.log("Hey this is an SSR")
  const links = [
    {
      id:1,
      title: "Home",
      url : "/"
    },
    {
      id:2,
      title: "Portfolio",
      url : "/portfolio"
    },
    {
      id:3,
      title: "Blog",
      url :"/blog"
    },
    {
      id:4,
      title: "About",
      url : "/about"
    },
    {
      id:5,
      title: "Contact",
      url:  "/contact"
    },
    {
      id:6,
      title: "Dashboard",
      url:"/dashboard"
    },
  ]
  return (
    <div className={style.container}>
        <Link href="/" className={style.logo}>Lamania</Link>
         
          <div className={style.links}>
            <DarkModeToggel />
            {links.map(link =>(
              <Link className={style.link} key={link.id} href={link.url} >{link.title} </Link>
            ))
            }
            <button className={style.logout} onClick={()=>console.log("Logout succesfully")}>Logout</button>
          </div>
    </div>
  );
}

export default Navbar;
