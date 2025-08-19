import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import WelcomeScreen from "./components/WelcomeScreen";
import MainHome from "./components/MainHome";
import Cart from "./components/Cart";
import SuccessPage from "./components/SuccessPage";
import Payment from "./components/Payment";  
import Navbar from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";
import CartProvider from "./context/CartContext";

const AppContent = () => {
  const { user, initializing } = React.useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [firstLogin, setFirstLogin] = useState(false);

  useEffect(() => {
    if (user) {
      const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
      if (!hasSeenWelcome) {
        localStorage.setItem("hasSeenWelcome", "true");
        setFirstLogin(true);
      } else {
        setFirstLogin(false);
      }
    }
  }, [user]);

  if (initializing) {
    return <div className="pt-16 text-center">Loading…</div>;
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  return (
    <>
      <Navbar searchTerm={searchQuery} setSearchTerm={setSearchQuery} />

      <Routes>
        {firstLogin && <Route path="/" element={<Navigate to="/welcome" replace />} />}
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route
          path="/home"
          element={
            <MainHome
              key={Date.now()}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
       <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
};

const App = () => (
  <CartProvider>
    <Router>
      <AppContent />
    </Router>
  </CartProvider>
);

export default App;
