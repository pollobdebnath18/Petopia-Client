"use client";

import { Label, ListBox, Select } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    const value = search.trim();

    if (value) {
      params.set("search", value); //
    } else {
      params.delete("search");
    }

    router.push(`/all-pets?${params.toString()}`); 
  };

  return (
    <div className="space-y-2 ">
      <Label className="text-gray-600 font-medium">Search by Name</Label>

      <div className="flex justify-center items-center gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search pets..."
          className="h-12 px-4 border rounded-lg w-full dark:bg-gray-700"
        />

        <button
          onClick={handleSearch}
          className="h-10 px-6 rounded-xl bg-blue-600 text-white cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
