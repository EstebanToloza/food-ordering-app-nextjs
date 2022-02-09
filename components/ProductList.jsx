import React from 'react';
import styles from "../styles/ProductList.module.css";
import ProductCard from './ProductCard';


const ProductList = ({allProducts}) => {
  return (
      <div className={styles.container}>
          <h1 className={styles.title}>La mejor Pizza de Rosario</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, deleniti suscipit sapiente ullam minus earum vitae delectus molestiae nobis et eum doloremque sed alias possimus assumenda iure? Aperiam, dicta nemo.
          </p>
          <div className={styles.wrapper}>
            {allProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
      </div>
  );
};

export default ProductList;
