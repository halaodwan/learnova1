import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";

import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Dashboard from "./pages/Dashboard";
import Flashcards from "./pages/Flashcards/Flashcards";
import Explanations from "./pages/Explanations";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <BrowserRouter>

      {/* Login Modal */}
      {showLogin && (
        <LoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          onLoginSuccess={(token) => {
            localStorage.setItem("token", token);
            setShowLogin(false);
          }}
        />
      )}

      <Navbar />
      {isLoggedIn && <Navbar />}

      {isLoggedIn && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explanations" element={<Explanations />} />
          <Route path="/flashcards" element={<Flashcards />} />
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

      <Routes>

        {/* Public Route */}
        <Route path="/" element={<Home />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/exams"
          element={
            <PrivateRoute>
              <Exams />
            </PrivateRoute>
          }
        />

        <Route
          path="/flashcards"
          element={
            <PrivateRoute>
              <Flashcards />
            </PrivateRoute>
          }
        />

        <Route
          path="/explanations"
          element={
            <PrivateRoute>
              <Explanations />
            </PrivateRoute>
          }
        />

        
        <Route path="/explanations" element={<Explanations />} />
        <Route path="/flashcards" element={<Flashcards />} />
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;