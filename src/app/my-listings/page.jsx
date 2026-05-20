import MyListingCard from "@/components/myListings/MyListingCards";
import { auth } from "@/lib/auth";
import { fetchMyPets } from "@/lib/data";
import { headers } from "next/headers";
import Link from "next/link";

const MyListingspage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const email = session?.user?.email;

  const myPets = await fetchMyPets(email);
  // console.log(email, myPets, "email and myPets");
  console.log(myPets.length);

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

      {myPets.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white rounded-2xl shadow-md border">
          {/* ICON */}
          <div className="text-6xl mb-4">🐾</div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            No Listings Found
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 mt-2 max-w-md">
            You haven’t added any pets yet. Start by adding your first pet for
            adoption and manage your listings here.
          </p>

          {/* BUTTON */}
          <Link
            href="/all-pets"
            className="
        mt-6 px-6 py-3 rounded-full
        bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500
        text-white font-medium
        shadow-md hover:shadow-xl
        transform hover:-translate-y-0.5
        transition-all duration-300
      "
          >
            Browse All Pets
          </Link>
        </div>
      ) : (
        <div>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Total */}
            <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition text-center">
              <h2 className="text-gray-500 font-medium text-xl">
                Total Listings
              </h2>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {myPets.map((pet) => (
              <MyListingCard key={pet._id} pet={pet} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListingspage;
