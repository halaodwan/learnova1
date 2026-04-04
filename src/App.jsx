import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exams from "./pages/Exams";
import LoginModal from "./components/LoginModal";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <BrowserRouter>
      {!isLoggedIn && showLogin && (
        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setShowLogin(false);
          }}
        />
      )}

      {isLoggedIn && <Navbar />}

      {isLoggedIn && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      )}

      {!isLoggedIn && !showLogin && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowLogin(true)}
            className="bg-blue-600 text-white p-2 rounded"
          >
            Login
          </button>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;