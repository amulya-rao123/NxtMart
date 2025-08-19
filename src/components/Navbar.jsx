import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { cartItems } = React.useContext(CartContext);
  const { logout } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav className="bg-gray-300 text-black px-4 py-3 justify-between items-center fixed top-0 left-0 w-full z-50 hidden md:flex">
        
        <div className="flex items-center">
          <img
            src="https://i.postimg.cc/5NJgcQ2k/Logo-2.png"
            alt="Logo"
            className="h-14 w-auto"
          />
        </div>

        
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="🔎 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-lg text-black w-64 border-3 border-gray-800 focus:border-green-500 focus:ring-2 focus:ring-green-400 outline-none transition-all duration-200"
          />
        </div>

       
        <div className="flex items-center space-x-6">
          <Link to="/home" className="hover:underline text-lg  hover:text-green-500">
            Home
          </Link>
          <Link to="/cart" className="hover:underline text-lg hover:text-green-500">
            Cart ({cartItems.length})
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </nav>

    
      <nav className="bg-green-900 text-white flex justify-around items-center fixed bottom-0 left-0 w-full z-50 py-3 md:hidden">
        <Link to="/home" className="flex flex-col items-center text-sm">
          🏠 <span>Home</span>
        </Link>
        <Link to="/cart" className="flex flex-col items-center text-sm ">
          🛒 <span>Cart ({cartItems.length})</span>
        </Link>
        <button
          onClick={handleLogout}
          className="flex flex-col items-center text-sm"
        >
          🚪 <span>Logout</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
