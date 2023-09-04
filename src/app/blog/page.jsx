import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import sheepImage from "../../../public/sheep-image.avif";

const Blog = async () => {
  // const data = await getData();

  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testID" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={sheepImage}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}></h1>
          <p className={styles.desc}></p>
        </div>
      </Link>
      <Link href="/blog/testID" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={sheepImage}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}></h1>
          <p className={styles.desc}></p>
        </div>
      </Link>
      <Link href="/blog/testID" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={sheepImage}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}></h1>
          <p className={styles.desc}></p>
        </div>
      </Link>
      <Link href="/blog/testID" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={sheepImage}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}></h1>
          <p className={styles.desc}></p>
        </div>
      </Link>
      <Link href="/blog/testID" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={sheepImage}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}></h1>
          <p className={styles.desc}></p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
