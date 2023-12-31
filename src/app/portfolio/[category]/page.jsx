import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import catImage from '../../../../public/cat-image.avif'
const Category = ({ params }) => {

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

     
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Description</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
          src={catImage}
        
              alt=""
            />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Description</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
          src={catImage}
        
              alt=""
            />
          </div>
        </div>

    </div>
  );
};

export default Category;