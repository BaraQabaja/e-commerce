import React,{useState} from "react";
import classes from "./Products.module.scss";

import { useDispatch} from "react-redux";
import ProductModal from "./ProductModal";
import {  Link } from "react-router-dom";
import { increment } from "../../Redux/counterSlice";
import {addItem} from '../../Redux/addItemSlice'
import { increasePrice } from "../../Redux/priceTotalSlice";


const Products = ({products}) => {
  const [currenProduct, setCurrentProduct] = useState("");

  

  const dispatch = useDispatch();
  const openModal = (item) => {
    setCurrentProduct(item);
  };
  const closeModal = () => {
    setCurrentProduct(false);
  };

  const addCartHandler = (item) => {

    dispatch(increment());
    dispatch(addItem(item))
   dispatch(increasePrice(item))
 
 
  };





















  return (
    <div className={classes.products_section}>
      {products.map((item, index) => {
        const { id, title, imgUrl, desc, price } = item;

        return (
          <div key={id} className={classes.cart}>
            <Link to={"#"} onClick={() => openModal(item)}>
              <img src={imgUrl} alt={title} />
            </Link>

            <div className={classes.product_info}>
              <h1>{title}</h1>
              <h1>${price}</h1>
            </div>
            <div>
              <button className={classes.buy_now_button}>Buy Now</button>
              <button
                className={classes.add_to_cart_button}
                onClick={()=>addCartHandler(item)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
      <ProductModal closeModal={closeModal} currenProduct={currenProduct} />
    </div>
  );
};

export default Products

