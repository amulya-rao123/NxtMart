import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/home", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <div className="flex justify-center items-center mb-4">
          <span className="text-green-600 text-6xl">✔</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment completed successfully
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for ordering. Your payment is successfully completed.
        </p>
        <button
          onClick={handleReturnHome}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
