import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import sheepImage from "../../../../public/sheep-image.avif";

const BlogPost = async ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>TITLE</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            voluptas nam tenetur error fugit eveniet, magni suscipit expedita
            quasi repudiandae possimus autem. Eius aspernatur perspiciatis
            tempore praesentium possimus maiores accusantium?
          </p>
          <div className={styles.author}>
            <Image
              src={sheepImage}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>SPAN </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={sheepImage} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quidem
          atque architecto eligendi consectetur, iure inventore libero
          temporibus. Voluptas eaque in tenetur? Ex sed debitis qui accusantium.
          Deserunt, repellendus amet!Loremlo Lorem ipsum dolor sit amet
          <br />
          <br />
          consectetur adipisicing elit. Quas natus quo quidem excepturi
          repudiandae possimus magni eos eius, libero iusto cum nam minima.
          Suscipit nostrum inventore molestiae cum, neque dolores?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
