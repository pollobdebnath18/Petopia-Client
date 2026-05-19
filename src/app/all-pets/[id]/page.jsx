import PetsDetails from "@/components/allPets/PetsDetails";
import React from "react";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${id}`);
  const pet = await res.json();
  return (
    <div>
      <PetsDetails pet={pet}></PetsDetails>
    </div>
  );
};

export default PetDetailsPage;
