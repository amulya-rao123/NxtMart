import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4 text-center">
      
      <img
        src="https://i.postimg.cc/5NJgcQ2k/Logo-2.png"
        alt="Welcome Logo"
        className="w-32 sm:w-48 md:w-56 mb-6"
      />

     
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-4">
        Welcome to NxtMart 🎉
      </h1>

    
      <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md mb-8">
        Start shopping your favorite groceries and essentials at the best prices.
      </p>

    
      <button
        onClick={() => navigate("/home")}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-md text-sm sm:text-base transition"
      >
        Explore Now
      </button>
    </div>
  );
};

export default WelcomeScreen;
