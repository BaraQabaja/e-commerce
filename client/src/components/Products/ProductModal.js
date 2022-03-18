import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import classes from "./ProductModal.module.scss";
const ProductModal = ({ currenProduct, openModal, closeModal }) => {
  const [dashSize, setDashSize] = useState([]);

  //this is to put dash beside the size notation like m- or s-

  return (
    <Modal isOpen={currenProduct} onRequestClose={closeModal}>
      <FaTimes className={classes.close} onClick={closeModal} />
      <section className={classes.product_desc}>
        <img src={currenProduct.imgUrl} alt={currenProduct.title} />
        <div className={classes.modal_info}>
          <p>{currenProduct.title}</p>
          <p>Description: {currenProduct.desc}</p>
          <p>
            Size available:{" "}
            {currenProduct.size != null
              ? currenProduct.size.map((item) => {
                  if (
                    currenProduct.size.indexOf(item) + 1 ===
                    currenProduct.size.length
                  ) {
                    return item;
                  } else {
                    return item.concat("-");
                  }
                })
              : ""}
          </p>
        </div>
      </section>
    </Modal>
  );
};

export default ProductModal;
