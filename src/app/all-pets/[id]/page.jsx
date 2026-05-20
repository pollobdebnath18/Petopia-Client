import AdoptForm from "@/components/allPets/AdoptForm";
import PetsDetails from "@/components/allPets/PetsDetails";
import React from "react";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${id}`);
  const pet = await res.json();
  return (
    <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <PetsDetails pet={pet}></PetsDetails>
      <AdoptForm pet={pet}></AdoptForm>
    </div>
  );
};

export default PetDetailsPage;
