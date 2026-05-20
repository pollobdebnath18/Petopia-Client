"use client";

import { Label } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

const FilterFunctionality = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSpecies = searchParams.get("species") || "";

  const handleFilter = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("species", value);
    } else {
      params.delete("species");
    }

    router.push(`/all-pets?${params.toString()}`);
  };

  return (
    <div>
      <Label className="text-gray-600 font-medium mb-2 block">
        Filter by Species
      </Label>

    
      <select
        value={currentSpecies} 
        onChange={handleFilter}
        className="w-[256px] border px-3 py-2 rounded"
      >
        <option value="">All Species</option>
        <option value="Bird">Bird</option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
};

export default FilterFunctionality;
