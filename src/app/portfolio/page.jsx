import React from "react";
import style from "./page.module.css";
import Link from "next/link";

function Portfolio() {
  return (
    <div className={style.container}>
      <h1 className={style.selectTitle}>Choose a Gallery</h1>
      <div className={style.items}>
        <Link href="/portfolio/illustrations" className={style.item}>
          <span className={style.title}>illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={style.item}>
          <span className={style.title}>Websites</span>
        </Link>
        <Link href="/portfolio/apps" className={style.item}>
          <span className={style.title}>apps</span>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
