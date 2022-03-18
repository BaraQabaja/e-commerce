import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import data from "./data.json";
import Filter from "./components/Filter/Filter";
function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [productNumber,setProductNumber]=useState(data.length)
  const sizeHandler = (e,normalSort) => {
    setSize(e.target.value);
    if (e.target.value == "All") {
      setProducts(data);
      
    } 
 
    else {
      const gumData = [...data];
      const FilteredDataOnSize = gumData.filter((item) => {
        return item.size.includes(e.target.value);
      });

      setProducts(FilteredDataOnSize);
      setProductNumber(FilteredDataOnSize.length)
    }
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
    

    setProducts(products.sort((a,b)=>{
      if(e.target.value=='Highest')
      {
        return b.price-a.price;
      }
      if(e.target.value=='Lowest')
      {
        return a.price-b.price;
      }
      if(e.target.value=='Normal')
      {
        return a.id<b.id?1:-1;
      }
    }))
  };

  return (
    <div className="layout">
      <Header />
      <main>
        <section className="product_filter_section">
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
      <Footer />
    </div>
  );
}

export default App;
