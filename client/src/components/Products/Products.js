import React from "react";
import classes from "./Products.module.scss";

import { useState } from "react";

import ProductModal from "./ProductModal";
const Products = ({ products }) => {
  const [currenProduct, setCurrentProduct] = useState("");
  const openModal = (item) => {
    setCurrentProduct(item);
  };
  const closeModal = () => {
    setCurrentProduct(false);
  };
  return (
    <div className={classes.products_section}>
      {products.map((item, index) => {
        const { id, title, imgUrl, desc, price } = item;

        return (
          <div key={id} className={classes.cart}>
            <a href="#" onClick={() => openModal(item)}>
              <img src={imgUrl} alt={title} />
            </a>

            <div className={classes.product_info}>
              <h1>{title}</h1>
              <h1>${price}</h1>
            </div>
            <button className={classes.add_to_cart_button}>Add To Cart</button>
          </div>
        );
      })}
    <ProductModal  closeModal={closeModal} currenProduct={currenProduct}/>
    </div>
  );
};
export default Products;
