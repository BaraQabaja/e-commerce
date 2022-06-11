import classes from "./Home.module.css";
import { useState, useEffect } from "react";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { fetchProducts } from "../../Redux/productSlice";
import data from "../../data.json";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const { productData,statusOfFetching } = useSelector((state) => state.products);
  console.log('statusOfFetching')
  console.log(statusOfFetching)
  console.log('productData')
  console.log(productData)
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [productNumber, setProductNumber] = useState(data.length);
  const [products, setProducts] = useState([]);
  
  // const [products, setProducts] = useState(data);

  //****************************************** */
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
  let display;
switch(statusOfFetching){
  case "success":
    display = (
      <div className={classes.layout}>
        <Header />
        <Main
          sizeHandler={sizeHandler}
          size={size}
          price={price}
          priceHandler={priceHandler}
          productNumber={productNumber}
          products={productData}
        />
        <Footer />
      </div>)
  break;
  case "pending":
    display = <h1>Loading....</h1>;
  break;
  case "rejected":
    display = <h1>ERROR</h1>;
  break;
}
 
  return (
    <>
     {display}
    </>
  );
};

export default Home;
