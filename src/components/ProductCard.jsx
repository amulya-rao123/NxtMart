import React from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, increaseQty, decreaseQty } = React.useContext(CartContext);

 
  const numericPrice = Number(product.price.replace(/[₹,]/g, ""));

 
  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-lg p-4 text-center flex flex-col justify-between">
     

      <img
        className="h-22 sm:h-20 md:h-30 mx-auto object-contain mb-3"
        src={product.image}
        alt={product.name}
      />

     
      <h3 className="font-bold text-sm sm:text-xs md:text-lg">{product.name}</h3>
      <p className="text-lg sm:text-sm text-gray-900">{product.weight}</p>
      <p className="text-base sm:text-lg font-bold text-gray-900 mt-2">₹{numericPrice}</p>


      {cartItem ? (
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 mt-3">
          <button
            onClick={() => decreaseQty(product.id)}
            className="px-2 sm:px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm sm:text-base"
          >
            -
          </button>
          <span className="text-sm sm:text-base md:text-lg">{cartItem.qty}</span>
          <button
            onClick={() => increaseQty(product.id)}
            className="px-2 sm:px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm sm:text-base"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              image: product.image,
              weight: product.weight,
              price: numericPrice,
            })
          }
          className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm sm:text-base"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
