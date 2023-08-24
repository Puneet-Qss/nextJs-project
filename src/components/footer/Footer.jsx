"use client";

import React from 'react'
import style from './footer.module.css'
import Image from  "next/image";

function Footer() {
  return (
    <div className={style.container}>
      <div>@2023 Lamania. All rights reserved.</div>
      <div className={style.socials}>
        <Image src="/1.png" width={15}className={style.icon} height={15} alt="Lama Dev" />
        <Image src="/2.png" width={15}className={style.icon} height={15}  alt="Instagram" />
        <Image src="/3.png" width={15}className={style.icon} height={15}  alt="Facebook" />
        <Image src="/4.png" width={15} className={style.icon}height={15}  alt="Google" />
      </div>
    </div>
  )
}

export default Footer