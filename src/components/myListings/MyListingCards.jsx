"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { DeleteCard } from "./DeleteCard";
import EditModal from "./EditModal";
import RequestModal from "./RequestModal";

const MyListingCard = ({ pet, onRequests, onDelete, requests }) => {
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
        <span className="text-blue-600 font-medium">
          {requests?.length || 0} Requests
        </span>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <div className="flex  gap-2">
          {/* VIEW BUTTON */}
          <button
            onClick={() => router.push(`/all-pets/${_id}`)}
            className="
       flex-1 px-3 py-2 rounded-lg
          border border-blue-500
          text-blue-600 font-medium
          bg-transparent
          hover:text-white
          hover:border-transparent
          hover:bg-gradient-to-r
          hover:from-blue-500
          hover:via-cyan-500
          hover:to-blue-700
          transition-all duration-300 cursor-pointer
    "
          >
            View
          </button>
          <EditModal pet={pet} />
        </div>

        <div className="flex gap-2 mt-2">
          <RequestModal pet={pet} requests={requests}></RequestModal>

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
