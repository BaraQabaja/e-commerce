import { useState } from "react";
import "./App.css"
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import data from './data.json'
function App() {
  const [products,setProducts]=useState(data)
  return (
    <div className="layout">
      <Header/>
      <main>
        <section className="product_filter_section">
        <Products products={products}/>
        <div className="filter">Filter</div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
