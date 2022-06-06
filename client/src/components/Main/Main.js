import React from "react";
import Filter from "../Filter/Filter"
import Products from "../Products/Products"
import classes from './Main.module.scss'
const Main = ({ sizeHandler, size ,price,priceHandler,productNumber,products}) => {
  return (
    <main>
      <section className={classes.product_filter_section}>
        
        <Products products={products} />
        <Filter
          sizeHandler={sizeHandler}
          size={size}
          price={price}
          priceHandler={priceHandler}
          productNumber={productNumber}
        />
      </section>
    </main>
  );
};

export default Main;
