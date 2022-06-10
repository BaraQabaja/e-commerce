import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import classes from "./Carts.module.scss";
import { decreasePrice } from "../../Redux/priceTotalSlice";
import { useDispatch } from "react-redux";
import { decrement } from "../../Redux/counterSlice";
import { removeItem } from "../../Redux/addItemSlice";
const Carts = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.addItem);
  const { count } = useSelector((state) => state.counter);
  const { totalPrice } = useSelector((state) => state.priceTotal);
  const deleteCartHandler = ({ ...item }) => {
    
    dispatch(decrement());
    dispatch(removeItem({ ...item }));
    dispatch(decreasePrice({ ...item }));
  };
  let state;
  if (count === 0) {
    state = <h1 className={classes.empty_cart}>Your Cart Is Empty😊.</h1>;
  } else if (count > 0) {
    state = (
      <h1 className={classes.welcom_cart}>
        <span className={classes.count_number}>{count}</span> Items
      </h1>
    );
  }

  return (
    <div>
      {state}
      <div className={classes.cart_container}>
        {data.map((item) => {
          
          return (
            <Cart {...item} deleteCartHandler={deleteCartHandler} />
          );
        })}
      </div>
      <div className={classes.shop_page_data}>
        {count > 0 ? (
          <>
            <div className={classes.line}></div>
            <h2>Total Price : {totalPrice}$</h2>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Carts;
