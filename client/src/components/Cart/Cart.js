import React from 'react'
import classes from './Cart.module.scss'

const Cart=({deleteCartHandler,...item})=> {

const {id,title,imgUrl,price,quantity}=item;

  return (
    <div  className={classes.cart}>
      <img src={imgUrl}  alt="product"/>
      <div className={classes.cart_content}>
        <h3>{title}</h3>
        <div className={classes.line}></div>
        <h3>{price}$</h3>
        <h3>{quantity}x</h3>
        <button className={classes.delete_cart} onClick={()=>{deleteCartHandler({...item})}}>Delete</button>
      </div>
    </div>
  )
}

export default Cart;