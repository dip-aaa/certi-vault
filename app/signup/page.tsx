"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    location: "",
    role: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy signup logic
    if (form.name && form.email && form.password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("profile", JSON.stringify(form));
      router.push("/");
    } else {
      setError("Please fill all required fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-white">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h2 className="text-2xl font-bb font-bold mb-6 text-center">Sign Up</h2>
        {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full mb-4 p-3 border rounded focus:outline-none"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded focus:outline-none"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded focus:outline-none"
          value={form.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="role"
          placeholder="Role (e.g. Student, Developer)"
          className="w-full mb-4 p-3 border rounded focus:outline-none"
          value={form.role}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full mb-4 p-3 border rounded focus:outline-none"
          value={form.location}
          onChange={handleChange}
        />
        <textarea
          name="about"
          placeholder="About you"
          className="w-full mb-6 p-3 border rounded focus:outline-none"
          value={form.about}
          onChange={handleChange}
        />
        <button type="submit" className="w-full bg-primary-400 text-white font-bb py-3 rounded hover:bg-primary-500 transition">Sign Up</button>
        <div className="mt-4 text-center text-sm">
          Already have an account? <a href="/login" className="text-primary-500 underline">Login</a>
        </div>
      </form>
    </div>
  );
}