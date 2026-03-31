import { Suspense } from "react";
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Products from "./components/Products";
import Stat from "./components/Stat"
import Steps from "./components/Steps";
import Simple from "./components/Simple";
import Footer from "./components/Footer";



const productsData = async () => {
  const res = await fetch('/productc.json');
  return res.json();
}



function App() {
  const promisProducts = productsData();
  return (
    <>
    <NavBar></NavBar>
    <Hero></Hero>
    <Stat></Stat>
    <Suspense fallback={<span className="loading loading-ring loading-xs"></span>
}>
      <Products promisProducts={promisProducts}></Products>
    </Suspense>
<Steps></Steps>
<Simple></Simple>
<Footer></Footer>

    </>
  )
}

export default App
