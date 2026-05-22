"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Logo from "@/assets/logo.webp";
import { authClient } from "@/lib/auth-client";

import {
  FaHome,
  FaPaw,
  FaPlus,
  FaHeart,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";

import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    setDropdownOpen(false);
    setOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "All Pets", href: "/all-pets", icon: <FaPaw /> },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 border rounded-full w-10 h-10" />;
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:text-white dark:bg-black backdrop-blur-md border-b border-gray-100 dark:border-white/30 shadow-sm px-4 sm:px-6 py-3">
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto flex items-center justify-between w-full">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-[42px] h-[42px] rounded-full overflow-hidden border-2 border-blue-500 shadow-sm">
            <Image
              src={Logo}
              alt="logo"
              width={42}
              height={42}
              className="object-cover w-full h-full"
            />
          </div>

          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Petopia
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-3 bg-gray-50 p-2 rounded-full dark:bg-black dark:border-white">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md"
                    : "text-gray-600  hover:bg-white hover:text-blue-600 dark:bg-gray-500 dark:text-white/50"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">
          {/* THEME */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border hover:scale-105 transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* USER / AUTH */}
          {user ? (
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {/* AVATAR */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <img
                  src={user?.image}
                  alt={user?.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-blue-500"
                />
              </button>

              {/* DROPDOWN (same style you had) */}
              <div
                className={`
                  absolute right-0 top-14 w-56 bg-white rounded-2xl shadow-xl
                  border border-gray-100 dark:border-blue-500 overflow-hidden z-50
                  transition-all duration-300 dark:bg-black dark:text-white/90 
                  ${
                    dropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }
                `}
              >
                <div className="space-y-2 p-2">
                  <Link
                    href="/my-requests"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-500"
                  >
                    <FaHeart />
                    My Requests
                  </Link>

                  <Link
                    href="/add-pet"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-500"
                  >
                    <FaPlus />
                    Add Pet
                  </Link>

                  <Link
                    href="/my-listings"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-500"
                  >
                    <FaList />
                    My Listings
                  </Link>
                </div>

                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-500"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* AUTH BUTTONS (visible on all sizes) */}
              <Link href="/signin">
                <button className="px-4 py-2 rounded-full border border-blue-500 text-blue-600 text-sm">
                  Sign In
                </button>
              </Link>

              <Link href="/signup">
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm">
                  Get Started
                </button>
              </Link>
            </>
          )}

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-xl shadow p-4 flex flex-col gap-2 ">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2"
            >
              {item.name}
            </Link>
          ))}

          {!user && (
            <>
              <Link href="/signin" onClick={() => setOpen(false)}>
                <button className="w-full py-2 border border-blue-500 text-blue-600 rounded-lg">
                  Sign In
                </button>
              </Link>

              <Link href="/signup" onClick={() => setOpen(false)}>
                <button className="w-full py-2 bg-blue-500 text-white rounded-lg">
                  Get Started
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
