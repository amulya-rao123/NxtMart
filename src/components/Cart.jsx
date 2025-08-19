import React from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, total, increaseQty, decreaseQty } =
    React.useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="p-6 pt-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-3xl text-gray-900">
          <img
            src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg"
            alt="Empty Cart"
            className="flex justify-center"
          />
          <button
            onClick={() => navigate("/home")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 text-lg md:mr-20"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
        
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="md:w-20 md:h-20 w-16 h-16 object-contain rounded"
                />
                <div className="flex-1 px-4">
                  <h3 className="font-semibold md:text-lg text-sm">
                    {item.name}
                  </h3>
                  <p className="text-gray-900 md:text-sm text-lg">
                    {item.weight}
                  </p>
                  <p className="text-green-600 font-bold md:text-base text-sm">
                    ₹{item.price}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="md:px-4 md:py-1 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 md:text-base text-xs"
                  >
                    -
                  </button>
                  <span className="md:text-2xl text-sm">{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="md:px-4 md:py-1 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 md:text-base text-xs"
                  >
                    +
                  </button>
                </div>
                <div className="font-semibold md:text-2xl text-sm md:m-4 ml-2">
                  ₹{item.price * item.qty}
                </div>
              </div>
            ))}
          </div>

        
          <div className="hidden md:flex justify-between items-center mt-6">
            <div className="text-xl font-bold">Grand Total: ₹{total}</div>
            <div className="space-x-3">
              <Link
                to="/home"
                className="bg-gray-200 text-gray-700 px-5 py-2 rounded hover:bg-gray-300"
              >
                Continue Shopping
              </Link>
              <button
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
                onClick={() => navigate("/payment")}
              >
                Checkout
              </button>
            </div>
          </div>

         
          <div className="md:hidden fixed bottom-16 left-0 right-0 bg-white shadow p-3 flex justify-between items-center z-40 text-sm">
            <span className="font-bold">Total: ₹{total}</span>
            <div className="flex space-x-2">
              <Link
                to="/home"
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 text-sm"
              >
                Continue
              </Link>
              <button
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
                onClick={() => navigate("/payment")}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
