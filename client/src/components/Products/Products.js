import React from "react";
import classes from "./Products.module.scss";
const Products = ({ products }) => {

  return (
    <div className={classes.products_section}>
      {products.map((item, index) => {
        const { id, title, imgUrl, desc, price } = item;
       
        return (
          <div key={id} className={classes.cart}>
            <img src={imgUrl} alt={title} />
            <div className={classes.product_info}>
              <h1>{title}</h1>
              <h1>${price}</h1>
              </div>
              <button className={classes.add_to_cart_button}>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
