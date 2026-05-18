import PetsCard from "@/components/allPets/PetsCard";

const AllPetsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`);
  const pets = await res.json();
  return (
    <div>
      <div className="mx-10 md:mx-6 max-w-6xl lg:mx-auto gap-10 ">
        <div>
          <h1 className="text-2xl font-bold my-3">All Pets</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pets.map((pet) => (
            <PetsCard key={pet._id} pet={pet}></PetsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPetsPage;
