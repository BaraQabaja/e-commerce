import classes from "./Filter.module.scss";
import { useState } from "react";
const Filter = ({ sizeHandler, size ,price,priceHandler,productNumber}) => {

  
  return (
    <section className={classes.FilterSection}>
      <h1 className={classes.title}>Filter</h1>
      <div className={classes.FilterBody}>
        <h1>Number of Products: {productNumber} Products</h1>
        <div className={classes["size-filter"]}>
          <label htmlFor="size">Size</label>
          <select id="size" value={size} onChange={sizeHandler}>
            <option>All</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
        </div>
        <div className={classes["price-filter"]}>
          <label htmlFor="price">Price-Order</label>
          <select id="price" value={price} onChange={priceHandler}>
            <option>Normal</option>
            <option>Lowest</option>
            <option>Highest</option>
           
          </select>
        </div>
      </div>
    </section>
  );
};

export default Filter;
