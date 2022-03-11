import React from "react";
import Modal from "react-modal";
import {FaTimes} from 'react-icons/fa'
import classes from './ProductModal.module.scss'
const ProductModal = ({currenProduct,openModal,closeModal}) => {
  return (
    <Modal isOpen={currenProduct} onRequestClose={closeModal} >
      <FaTimes className={classes.close} onClick={closeModal} />
      <section className={classes.product_desc}>
        <img src={currenProduct.imgUrl} alt={currenProduct.title} />
        <div className={classes.modal_info}>
          <p>{currenProduct.title}</p>
          <p>Description: {currenProduct.desc}</p>
          <p>Size available: {currenProduct.size}</p>
        </div>
      </section>
    </Modal>
  );
};

export default ProductModal;
