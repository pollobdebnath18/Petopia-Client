"use client";
import { Label } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SortPriceFunctionality = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "";

  const handleSort = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    router.push(`/all-pets?${params.toString()}`);
  };
  return (
    <div>
      <Label className="text-gray-600 font-medium mb-2 block">
        Sort by Price
      </Label>

      <select
        value={currentSort}
        onChange={handleSort}
        className="w-[256px] border px-3 py-2 rounded dark:bg-gray-700"
      >
        <option value="">Default</option>
        <option value="low-high">Price Low to high</option>
        <option value="high-low">Price high to Low</option>
      </select>
    </div>
  );
};

export default SortPriceFunctionality;
