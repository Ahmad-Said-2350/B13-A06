import { use } from "react";
import ProductCard from "./ProductCard";

const Products = ({ 
  promisProducts, onAddToCart, onRemoveFromCart, onCheckout, 
  activeSection, setActiveSection, cartItems 
}) => {
  const data = use(promisProducts);

  
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-16">


    <div className="con mt-30 space-y-8 mb-10">

<h2 className=" text-center text-[#001931] text-5xl font-extrabold">Premium Digital Tools</h2>
            <p className=" text-center text-[#627382] text-base leading-5">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            
           
    </div>


     
      <div className="flex justify-center gap-4 mb-16">
        <button
          onClick={() => setActiveSection("products")}
          className={`btn rounded-full px-10 font-bold border-none transition-all ${
            activeSection === "products" ? "bg-[#8B1FFF] text-white" : "bg-white text-gray-500 border border-gray-200"
          }`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveSection("cart")}
          className={`btn rounded-full px-10 font-bold border-none transition-all ${
            activeSection === "cart" ? "bg-[#8B1FFF] text-white" : "bg-white text-gray-500 border border-gray-200"
          }`}
        >
          Cart ({cartItems.length})
        </button>
      </div>

      {activeSection === "products" ? (
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      ) : (
        
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-blue-50">
          <div className="border-b border-dotted border-blue-200 pb-2 mb-6">
            <h3 className="text-xl font-bold text-gray-800">Your Cart</h3>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 italic">Cart is empty</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white rounded-xl border border-dotted border-blue-200 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                      <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500 font-medium">${item.price}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveFromCart(index)}
                    className="text-pink-500 hover:text-pink-700 font-bold text-xs"
                  >
                    Remove
                  </button>
                </div>
              ))}

              
              <div className="flex justify-between items-center border-t border-dotted border-blue-300 pt-5 mt-6">
                <span className="text-gray-400 text-sm italic">Total:</span>
                <span className="text-2xl font-black text-gray-900">${totalPrice.toFixed(0)}</span>
              </div>

             
              <button 
                onClick={onCheckout}
                className="w-full bg-[#8B1FFF] hover:bg-[#7A19E6] text-white py-4 rounded-full font-bold text-lg mt-5 shadow-lg shadow-purple-50 transition-all active:scale-95"
              >
                Proceed To Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;