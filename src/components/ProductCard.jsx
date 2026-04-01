














import  { useState } from 'react'; 

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleBuyNow = () => {
    onAddToCart(product);
    setIsAdded(true); 
  }; 



  return (
    <div className="card mt-10 bg-white border border-gray-100 shadow-sm rounded-3xl p-6 hover:shadow-md transition-all">
      
      <div className="flex justify-between items-start mb-4">
        <div className="bg-gray-50 p-3 rounded-2xl">
          <img src={product.icon} alt="" className="w-10 h-10" />
        </div>
        {product.tag && (
          <div className="badge border-none bg-orange-100 text-orange-600 font-semibold py-3 px-4">
            {product.tag}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#001931]">
          {product.name}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-[#001931]">${product.price}</span>
        <span className="text-gray-400 text-sm">/{product.period || 'Mo'}</span>
      </div>

      <ul className="mt-6 space-y-3 mb-8">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-green-500">✔ </span>{feature}
          </li>
        ))}
      </ul>

      <div className="card-actions">
        <button 
          onClick={handleBuyNow} 
          disabled={isAdded} 
          className={`btn border-none w-full rounded-full normal-case text-lg font-semibold transition-all duration-300
            ${isAdded 
              ? "bg-gray-500 text-gray-100 cursor-not-allowed" 
              : "bg-[#7C3AED] hover:bg-[#6D28D9] text-white" 
            }`}
        >
          {isAdded ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;