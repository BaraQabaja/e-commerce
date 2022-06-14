import classes from "./Home.module.css";
import { useState, useEffect } from "react";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
// import data from "../../data.json";
import { useDispatch, useSelector } from "react-redux";
import { filterSize, filterPrice,fetchProducts } from "../../Redux/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const { productData, statusOfFetching } = useSelector(
    (state) => state.products
  );
  // useEffect(async () => {
  //   setLoading(true);
  //   const res = await axios.get("/api/products");
  //   setOriginalData(res.data);
  //   setProducts(res.data);
  //   setProductNumber(res.data.length)
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const sizeHandler = (e) => {
    dispatch(filterSize({ e }));
    setSize(e.target.value);
  };

  const priceHandler = (e) => {
    dispatch(filterPrice({ e }));
    setPrice(e.target.value);
  };

  return (
    <>
      {statusOfFetching === "success" ? (
        <div className={classes.layout}>
          <Header />
          <Main
            sizeHandler={sizeHandler}
            size={size}
            price={price}
            priceHandler={priceHandler}
            productNumber={productData.length}
            products={productData}
          />
          <Footer />
        </div>
      ) : (
        <h1>Loading.....</h1>
      )}
    </>
  );
};

export default Home;
