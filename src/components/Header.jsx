"use client";

import Link from "next/link";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logged out");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <header className="bg-[#2B2B2B] text-white py-4 px-4 sm:px-6 lg:px-24 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img src="/icons/Storefront-colour.png" alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-lg sm:text-xl">NFT Marketplace</span>
        </Link>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <nav className="flex items-center gap-6 lg:gap-10 text-gray-300 font-medium">
            <Link href="/marketplace" className="hover:text-white transition">Marketplace</Link>
            <Link href="/rankings" className="hover:text-white transition">Rankings</Link>
            <Link href="/connect-wallet" className="hover:text-white transition">Connect a Wallet</Link>
          </nav>

          {user ? (
            <>
              <span className="text-sm sm:text-base font-medium">
                {user.displayName || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-white px-6 py-2 rounded-[20px] font-medium transition-transform duration-300 hover:scale-95 text-sm sm:text-base"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-white px-6 py-2 rounded-[20px] font-medium transition-transform duration-300 hover:scale-95 text-sm sm:text-base"
              >
                Log In
              </Link>
              <Link
                href="/register"
                className="bg-[#A259FF] text-white px-6 lg:px-[50px] py-3 lg:py-[16px] rounded-[20px] flex items-center gap-2 transition-transform duration-300 hover:scale-95 text-sm sm:text-base"
              >
                <img src="/icons/User.png" alt="User" className="w-5 h-5" />
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
  className="md:hidden focus:outline-none"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )}
</button>

      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#2B2B2B] z-50 px-4 py-6 shadow-lg transition-all duration-300">
          <nav className="flex flex-col gap-4 text-gray-300 font-medium">
            <Link href="/marketplace" className="hover:text-white transition">Marketplace</Link>
            <Link href="/rankings" className="hover:text-white transition">Rankings</Link>
            <Link href="/connect-wallet" className="hover:text-white transition">Connect a Wallet</Link>
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            {user ? (
              <>
                <div className="text-white font-medium">
                  {user.displayName || user.email}
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-[#A259FF] text-white px-6 py-3 rounded-[20px] font-semibold transition-transform duration-300 hover:scale-95"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="bg-[#A259FF] text-white px-6 py-3 rounded-[20px] text-center font-semibold transition-transform duration-300 hover:scale-95"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  className="bg-[#A259FF] text-white px-6 py-3 rounded-[20px] text-center font-semibold transition-transform duration-300 hover:scale-95"
                >
                  <div className="flex items-center justify-center gap-2">
                    <img src="/icons/User.png" alt="User" className="w-5 h-5" />
                    Sign Up
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}


