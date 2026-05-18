"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/assets/logo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold">Petopia</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/pets" className="hover:text-blue-500">
            All Pets
          </Link>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block px-4 py-2 bg-blue-500 text-white rounded">
          Login
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-3">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/pets" onClick={() => setOpen(false)}>
            All Pets
          </Link>
          <button className="px-4 py-2 bg-blue-500 text-white rounded w-fit">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
