"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

const Navbar = () => {
  const pathname = usePathname();

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
    {
      name: "Home",
      href: "/",
      icon: <FaHome />,
    },
    {
      name: "All Pets",
      href: "/all-pets",
      icon: <FaPaw />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-[42px] h-[42px] rounded-full overflow-hidden border border-gray-200 shadow-sm">
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
        <div className="hidden md:flex items-center gap-3 bg-gray-50 p-2 rounded-full">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-2 px-5 py-2 rounded-full
                  text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md"
                      : "text-gray-600 hover:bg-white hover:text-blue-600"
                  }
                `}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* USER */}
        {user ? (
          <div
            className="relative hidden md:block group"
            onMouseEnter={() => {
              if (window.innerWidth >= 1024) {
                setDropdownOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 1024) {
                setDropdownOpen(false);
              }
            }}
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
                referrerPolicy="no-referrer"
              />

              <div className="hidden lg:block text-left">
                <p className="text-sm font-semibold text-gray-700">
                  {user?.name}
                </p>

                <p className="text-xs text-gray-400">{user?.email}</p>
              </div>
            </button>

            {/* DROPDOWN */}
            <div
              className={`
                absolute right-0 top-14 w-56 bg-white rounded-2xl shadow-xl
                border border-gray-100 overflow-hidden z-50
                transition-all duration-300
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
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <FaHeart className="text-pink-500 group-hover:text-white" />
                  <span className="font-medium">My Requests</span>
                </Link>

                <Link
                  href="/add-pet"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <FaPlus className="text-blue-500 group-hover:text-white" />
                  <span className="font-medium">Add Pet</span>
                </Link>

                <Link
                  href="/my-listings"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <FaList className="text-emerald-500 group-hover:text-white" />
                  <span className="font-medium">My Listings</span>
                </Link>
              </div>

              {/* LOGOUT */}
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-500 hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <FaSignOutAlt className="group-hover:text-white" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-3">
            {/* SIGN IN */}
            <Link href="/signin">
              <button
                className="
                  px-5 py-2 rounded-full
                  border border-blue-500
                  text-blue-600 font-medium
                  bg-transparent
                  hover:bg-gradient-to-r
                  hover:from-blue-500
                  hover:via-cyan-500
                  hover:to-blue-600
                  hover:text-white
                  shadow-sm hover:shadow-lg
                  transition-all duration-300
                  cursor-pointer
                "
              >
                Sign In
              </button>
            </Link>

            {/* GET STARTED */}
            <Link href="/signup">
              <button
                className="
                  px-5 py-2 rounded-full
                  text-white font-medium
                  bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500
                  hover:from-blue-700 hover:via-blue-500 hover:to-cyan-600
                  shadow-md hover:shadow-xl
                  hover:-translate-y-0.5
                  transition-all duration-300
                  cursor-pointer
                "
              >
                Get Started
              </button>
            </Link>
          </div>
        )}

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-gray-700 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-2">
          {/* NAV LINKS */}
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  px-4 py-3 rounded-xl flex items-center gap-2 transition
                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }
                `}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}

          {/* MOBILE USER */}
          {user ? (
            <>
              <Link
                href="/my-requests"
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-100 text-gray-700"
              >
                <FaHeart className="text-pink-500" />
                My Requests
              </Link>

              <Link
                href="/add-pet"
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-100 text-gray-700"
              >
                <FaPlus className="text-blue-500" />
                Add Pet
              </Link>

              <Link
                href="/my-listings"
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-100 text-gray-700"
              >
                <FaList className="text-emerald-500" />
                My Listings
              </Link>

              <button
                onClick={handleSignOut}
                className="w-full mt-2 px-4 py-3 rounded-xl bg-red-500 text-white flex items-center justify-center gap-2"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/signin" onClick={() => setOpen(false)}>
                <button className="w-full py-3 rounded-xl border border-blue-500 text-blue-600">
                  Sign In
                </button>
              </Link>

              <Link href="/signup" onClick={() => setOpen(false)}>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
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
