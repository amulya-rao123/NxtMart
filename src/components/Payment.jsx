import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Payment = () => {
  const { total, clearCart } = React.useContext(CartContext);
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    if (cardNumber.length !== 16) {
      setError("Card number must be 16 digits");
      return;
    }
    if (!expiry.includes("/")) {
      setError("Expiry must be in MM/YY format");
      return;
    }
    if (cvc.length !== 3) {
      setError("CVC must be 3 digits");
      return;
    }
    if (!name) {
      setError("Cardholder name is required");
      return;
    }

    setError("");
    setLoading(true);

    
    setTimeout(() => {
      clearCart(); 
      setLoading(false);
      navigate("/success");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-700 font-semibold">
            Processing Payment...
          </p>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Complete Your Payment
          </h2>
          <p className="mb-6 text-gray-600 text-center">
            Total Amount:{" "}
            <span className="font-bold text-green-600">₹{total}</span>
          </p>

          {error && (
            <p className="text-red-600 text-center mb-4">{error}</p>
          )}

          <form onSubmit={handlePayment} className="space-y-4">
            <input
              type="text"
              placeholder="Cardholder Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="number"
              placeholder="Card Number (16 digits)"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Expiry (MM/YY)"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="number"
              placeholder="CVC (3 digits)"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Pay ₹{total}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Payment;
