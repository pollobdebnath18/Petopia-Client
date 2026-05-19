"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/assets/logo.webp";
import { authClient } from "@/lib/auth-client";
import { FaHome, FaPaw, FaPlus, FaHeart } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
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
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  
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
          <div className="relative group hidden md:block">
            {/* AVATAR */}
            <button className="flex items-center gap-3 cursor-pointer">
              <img
                src={user?.image}
                alt={user?.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-blue-500"
                referrerPolicy="no-referrer"
              />

              <div className="text-left">
                <p className="text-sm font-semibold text-gray-700">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-400">{user?.email}</p>
              </div>
            </button>

            {/* DROPDOWN */}
            <div className="absolute right-0 top-14 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
              <Link
                href="/my-requests"
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 text-sm"
              >
                <FaHeart />
                My Requests
              </Link>

              <Link
                href="/add-pet"
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 text-sm"
              >
                <FaPlus />
                Add Pet
              </Link>

              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link href="/signin" className="hidden md:block">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow hover:scale-105 transition">
              Sign In
            </button>
          </Link>
        )}

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-3">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl flex items-center gap-2 transition
                  
                  ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }
                `}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}

          {!user && (
            <Link href="/signin">
              <button className="w-full bg-blue-500 text-white py-3 rounded-xl">
                Sign In
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
