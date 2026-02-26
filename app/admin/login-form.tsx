"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react"; // Imported the icons

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // New state for the eye
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.refresh();
    } else {
      setError("Wrong password");
    }
  };

  return (
    // 1. HEIGHT: Fits perfectly (100vh - 64px header)
    // 2. BACKGROUND: Dark Gradient (No white background)
    // 3. POSITION: pb-40 pushes the form UP so mobile keyboard doesn't hide it
    <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-linear-to-br from-slate-900 to-slate-800 pb-40">
      {/* CONTAINER: No Background, No Border, Just Width */}
      <div className="w-full max-w-sm px-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-white tracking-tight">
          Admin Access
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* INPUT WRAPPER: Added relative positioning for the absolute icon */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggles based on state
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              // Added pr-12 so the text doesn't hide behind the icon
              className="w-full p-4 pr-12 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 shadow-lg placeholder:text-gray-400"
              autoFocus
            />

            {/* THE EYE BUTTON */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center font-medium bg-red-900/20 py-2 rounded-lg">
              {error}
            </div>
          )}

          {/* BUTTON: Blue for visibility, keeping brand consistency */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-500 transition-all shadow-lg active:scale-[0.98]"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}
