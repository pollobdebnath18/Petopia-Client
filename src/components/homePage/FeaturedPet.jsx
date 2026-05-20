import React from "react";
import PetsCard from "../allPets/PetsCard";

const FeaturedPet = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`);
  const pets = await res.json();
  return (
    <div>
      <div className="mx-10 md:mx-6 max-w-6xl lg:mx-auto gap-10 my-24">
        <div>
          <h1 className="text-2xl font-bold my-4">Featured Pets</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-10">
          {pets.slice(0, 6).map((pet) => (
            <PetsCard key={pet._id} pet={pet}></PetsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPet;
