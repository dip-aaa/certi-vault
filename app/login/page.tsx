"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy login logic
    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      setError("Please enter email and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-white">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bb font-bold mb-6 text-center">Login</h2>
        {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded focus:outline-none"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded focus:outline-none"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-primary-400 text-white font-bb py-3 rounded hover:bg-primary-500 transition">Login</button>
        <div className="mt-4 text-center text-sm">
          Don't have an account? <a href="/signup" className="text-primary-500 underline">Sign up</a>
        </div>
      </form>
    </div>
  );
}