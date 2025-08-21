import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = React.useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Please enter valid details");
      return;
    }

    const loginApiUrl = "https://apis.ccbp.in/login";
    const userDetails = { username, password };
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(loginApiUrl, options);
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("jwt_token", data.jwt_token);
        login(username); 
        navigate("/welcome");
      } else {
        setError(data.error_msg || "Login failed. Try again.");
      }
    } catch  {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://media.licdn.com/dms/image/v2/D5610AQF5zi9H381FAQ/image-shrink_800/image-shrink_800/0/1721754093449?e=2147483647&v=beta&t=nVutgtaOJRkT4Q6aQIX9iAIzdJzF004LEeFP2cZYAD0')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80 backdrop-blur-sm"></div>
      <div className="relative z-10 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md bg-gray-600 bg-opacity-80 backdrop-blur-sm transform transition-all duration-500 ease-in-out hover:scale-105">
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://i.postimg.cc/5NJgcQ2k/Logo-2.png"
            alt="Logo"
            className="mx-auto mb-5"
          />
        </div>

        {error && (
          <div className="bg-red-600 text-white text-sm text-center py-2 px-4 rounded-lg mb-4 animate-pulse">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 border-2 border-transparent transition-all duration-300 text-sm sm:text-base"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 border-2 border-transparent transition-all duration-300 text-sm sm:text-base"
          />

          <label className="flex items-center space-x-2 text-gray-300 text-sm sm:text-base select-none">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span>Show Password</span>
          </label>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
