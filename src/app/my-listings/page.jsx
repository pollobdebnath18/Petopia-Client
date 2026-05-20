import MyListingCard from "@/components/myListings/MyListingCards";
import { auth } from "@/lib/auth";
import { fetchMyPets } from "@/lib/data";
import { headers } from "next/headers";

const MyListingspage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const email = session?.user?.email;

  const myPets = await fetchMyPets(email);
  // console.log(email, myPets, "email and myPets");

  return (
    <div className="w-6xl mx-auto px-6 my-8">
     
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
          My Listings 🐾
        </h1>
        <p className="text-gray-500 mt-2">
          Manage all your pets in one place — track, update, and control
          listings easily.
        </p>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Total */}
        <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition text-center">
          <h2 className="text-gray-500 font-medium text-xl">Total Listings</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {myPets.length}
          </p>
        </div>

        {/* Available */}
        <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition text-center">
          <h2 className="text-gray-500 font-medium text-xl">Available</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {myPets.filter((p) => !p.isAdopted).length}
          </p>
        </div>
        {/* Adopted */}
        <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition text-center">
          <h2 className="text-gray-500 font-medium text-xl">Adopted</h2>
          <p className="text-3xl font-bold text-red-500 mt-2">
            {myPets.filter((p) => p.isAdopted).length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {myPets.map((pet) => (
          <MyListingCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default MyListingspage;
