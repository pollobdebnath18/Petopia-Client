export const dynamic = "force-dynamic";
import FilterFunctionality from "@/components/allPets/FilterFunctionality";
import PetsCard from "@/components/allPets/PetsCard";
import SearchFilter from "@/components/allPets/SearchFunctionality";
import { fetchAllPets } from "@/lib/data";

const AllPetsPage = async ({ searchParams }) => {
  const sParams = (await searchParams) || {};

  const search = sParams.search || "";
  const species = sParams.species || "";
  const pets = await fetchAllPets(search, species);

  return (
    <div>
      <div className="mx-10 md:mx-6 max-w-6xl lg:mx-auto gap-10 ">
        <div className="text-center my-6 mb-12">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
            All Pets 🐾
          </h1>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Find your perfect companion — search, filter, and adopt your new
            friend today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-6">
          <SearchFilter></SearchFilter>
          <FilterFunctionality></FilterFunctionality>
          <div></div>
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
