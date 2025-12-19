"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Logo } from "./logo";
import { useEffect, useState } from "react";
import { deleteCookie, getValueFromCookie } from "../../../../packages/auth/server/server-action";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      const token = await getValueFromCookie("access_token");
      setIsLoggedIn(!!token);
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await deleteCookie("access_token");
    await deleteCookie("refresh_token");
    setIsLoggedIn(false);
    window.location.href = "/me/sign-in";
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-[#172b4d]">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {["Features", "Solutions", "Plans", "Pricing", "Resources"].map((item) => (
              <button key={item} className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                {item}
                <ChevronDown className="h-4 w-4" />
              </button>
            ))}
          </nav>
        </div>
        <div className="flex h-full items-center gap-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-lg font-medium text-[#172b4d] hover:underline"
            >
              Đăng xuất
            </button>
          ) : (
            <Link
              href="/me/sign-in"
              className="text-lg font-medium text-[#172b4d] hover:underline"
            >
              Đăng nhập
            </Link>
          )}


          <Link
            href="/"
            className="hidden sm:flex h-full items-center bg-[#0065ff] hover:bg-[#0747a6] text-white px-6 font-semibold text-lg transition-colors whitespace-nowrap"
          >
            Get Fun To Do M for free
          </Link>
        </div>
      </div>
    </header>
  );
}