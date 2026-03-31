import { Suspense, useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Stat from "./components/Stat";


import Footer from "./components/Footer";
import Steps from "./components/Steps";
import Products from "./components/Products";
import Simple from "./components/Simple";


const fetchProducts = async () => {
  const res = await fetch('/productc.json'); 
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const productsPromise = fetchProducts();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeSection, setActiveSection] = useState("products");

  
  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  
  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
     
      <NavBar></NavBar>
      <Hero></Hero>
      <Stat></Stat>
     
      <Suspense fallback={
        <div className="flex justify-center items-center p-20">
          <span className="loading loading-ring loading-lg text-[#8B1FFF]"></span>
        </div>
      }>
        <Products promisProducts={productsPromise}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onCheckout={clearCart} 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          cartItems={cartItems}>
 

        </Products>
      </Suspense>
       <Steps></Steps>
      <Simple></Simple>
      <Footer></Footer>
      
    </div>
  );
}

export default App;