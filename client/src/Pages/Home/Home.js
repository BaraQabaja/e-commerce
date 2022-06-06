import classes from "./Home.module.css";
import { useState } from "react";
import Main from '../../components/Main/Main'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import data from "../../data.json";
const Home = () => {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [productNumber, setProductNumber] = useState(data.length);
  const sizeHandler = (e, normalSort) => {
    setSize(e.target.value);
    if (e.target.value == "All") {
      setProducts(data);
    } else {
      const gumData = [...data];
      const FilteredDataOnSize = gumData.filter((item) => {
        return item.size.includes(e.target.value);
      });

      setProducts(FilteredDataOnSize);
      setProductNumber(FilteredDataOnSize.length);
    }
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);

    setProducts(
      products.sort((a, b) => {
        if (e.target.value == "Highest") {
          return b.price - a.price;
        }
        if (e.target.value == "Lowest") {
          return a.price - b.price;
        }
        if (e.target.value == "Normal") {
          return a.id < b.id ? 1 : -1;
        }
      })
    );
  };
  return (
    <div className={classes.layout}>
     
      <Header />
      <Main
        sizeHandler={sizeHandler}
        size={size}
        price={price}
        priceHandler={priceHandler}
        productNumber={productNumber}
        products={products}
      />
      <Footer />
    </div>
  );
};

export default Home;
