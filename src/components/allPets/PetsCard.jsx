import React from "react";
import Link from "next/link";

const getSpeciesStyle = (species) => {
  switch (species?.toLowerCase()) {
    case "dog":
      return "bg-blue-100 text-blue-600";
    case "cat":
      return "bg-pink-100 text-pink-600";
    case "bird":
      return "bg-yellow-100 text-yellow-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const PetsCard = ({ pet }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group">
      {/* IMAGE */}
      <div className="relative">
        <img
          src={pet.imageUrl}
          alt={pet.petName}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
        />

        <span
          className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-full font-medium ${getSpeciesStyle(
            pet.species,
          )}`}
        >
          {pet.species}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5 text-left dark:bg-gray-800 dark:text-white/80">
        {/* Name + Age + Gender */}
        <h2 className=" font-bold">
          <span className="text-xl font-bold">{pet.petName}</span> •{" "}
          <span className="text-lg">
            {pet.age} years • {pet.gender}
          </span>
        </h2>

        {/* Breed */}
        <p className="text-gray-600 text-sm mt-1">{pet.breed}</p>

        {/* Location */}
        <p className="text-gray-500 text-sm mt-2">{pet.location}</p>

        {/* Divider */}
        <hr className="my-2 border-gray-200" />

        {/* Adoption Fee (UPDATED) */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Adoption Fee</p>
          <p className="text-2xl font-bold text-green-600">
            ${pet.adoptionFee}
          </p>
        </div>

        {/* Divider */}
        <hr className="my-2 border-gray-200" />

        {/* Buttons */}
        <div className="flex gap-2">
          <Link href={`/all-pets/${pet._id}`} className="flex-1">
            <button className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
              View Details
            </button>
          </Link>

          <Link href={`/all-pets/${pet._id}`} className="flex-1">
            <button className="w-full py-2 rounded-xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              Adopt Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetsCard;
