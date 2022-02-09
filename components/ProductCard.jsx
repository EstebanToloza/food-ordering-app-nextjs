import Image from 'next/image';
import React from 'react';
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({product}) => {
  const { img, title, prices, desc } = product;
  return (
    <div className={styles.container}>
      <Image src={img} alt="pizza" width="500" height="500" />
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.price}>{prices[0]}</span>
      <p className={styles.desc}>
        {desc}
      </p>
    </div>
  );
};

export default ProductCard;
