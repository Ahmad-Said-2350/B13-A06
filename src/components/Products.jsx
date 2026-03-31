import { use } from "react";
import ProductCard from "./ProductCard";

const Products = ({promisProducts}) => {

   const data = use(promisProducts)
    return (
        <div className=" container mx-auto ">
            

    <div className="con mt-30 space-y-8 mb-10">

<h2 className=" text-center text-[#001931] text-5xl font-extrabold">Premium Digital Tools</h2>
            <p className=" text-center text-[#627382] text-base leading-5">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            
            <div className="flex justify-center items-center">
                <button className="btn btn-outline rounded-full" >Products</button>
            <button className="btn btn-outline rounded-full">Cart (2)</button>
    
            </div>

    </div>
   
<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {
            data.map(
                (product)=>{
            return  <ProductCard key={product.id} product={product}></ProductCard>      
                }
            )
         }
        </div>
</div>
         
    );
};

export default Products;