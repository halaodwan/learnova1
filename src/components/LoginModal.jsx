import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LoginModal({ onClose, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // simulate login success
    console.log({ email, password });

    // إغلاق المودال
    if (onClose) onClose();

    // تحديث حالة تسجيل الدخول
    if (typeof onLoginSuccess === "function") {
      onLoginSuccess();
    }

    // التوجيه للصفحة الرئيسية
    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-slate-800 text-white p-4 rounded-2xl text-xl">
            🎓
          </div>
        </div>

        <h2 className="text-center text-2xl font-bold text-slate-800">
          Welcome to EduAI
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Sign in to continue learning
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-900 transition"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <span className="hover:underline cursor-pointer">
            Forgot Password?
          </span>
          <span className="hover:underline cursor-pointer">
            Create Account
          </span>
        </div>
      </motion.div>
    </div>
  );
}