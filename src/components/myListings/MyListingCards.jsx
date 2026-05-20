"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { DeleteCard } from "./DeleteCard";

const MyListingCard = ({ pet, onRequests, onDelete }) => {
  const router = useRouter();

  const { _id, petName, imageUrl, adoptionFee, species, gender } = pet;

  return (
    <div className="border rounded-2xl shadow-md p-4 flex flex-col gap-3 bg-white hover:shadow-lg transition">
      <img
        src={imageUrl}
        alt={petName}
        className="w-full h-48 object-cover rounded-xl"
      />

      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{petName}</h2>
        <span className="text-2xl font-bold text-green-600">
          ${adoptionFee}
        </span>
      </div>

      {/* Info Row */}
      <div className="flex justify-between text-sm text-gray-600 mt-1">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
            {species}
          </span>

          <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-medium">
            {gender}
          </span>
        </div>
        <span className="text-blue-600 font-medium">0 Requests</span>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <div className="flex gap-2">
          <button
            onClick={() => onRequests?.(pet)}
            className="flex-1 px-3 py-2 rounded-lg text-black outline hover:bg-blue-600 transition cursor-pointer"
          >
            Requests
          </button>

          <button
            onClick={() => router.push(`/pets/edit/${_id}`)}
            className="flex-1 px-3 py-2 rounded-lg outline  text-black hover:bg-yellow-600 transition cursor-pointer"
          >
            Edit
          </button>
        </div>

        <div className="flex gap-2 mt-2">
          {/* VIEW BUTTON */}
          <button
            onClick={() => router.push(`/all-pets/${_id}`)}
            className="
      flex-1 px-3 py-2 rounded-lg text-white font-medium
      bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500
      hover:from-blue-600 hover:via-cyan-500 hover:to-blue-700
      shadow-md hover:shadow-xl
      transform hover:-translate-y-0.5
      transition-all duration-300 ease-in-out
      cursor-pointer
    "
          >
            View
          </button>

          {/* DELETE BUTTON */}

          <DeleteCard
            petId={_id}
            ownerEmail={pet?.ownerEmail}
            onSuccess={onDelete}
          ></DeleteCard>
        </div>
      </div>
    </div>
  );
};

export default MyListingCard;
