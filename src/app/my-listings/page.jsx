import MyListingCard from "@/components/myListings/MyListingCards";
import { auth } from "@/lib/auth";
import { fetchMyPets, fetchMyRequests } from "@/lib/data";
import { headers } from "next/headers";
import Link from "next/link";

const MyListingspage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const email = session?.user?.email;

  const requests = await fetchMyRequests(email);
  const myPets = await fetchMyPets(email);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      {/* HEADER */}
      <div className="mb-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
          My Listings 🐾
        </h1>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Manages all your pets in one place — track, update, and control
          listings easily.
        </p>
      </div>

      {/* EMPTY STATE */}
      {myPets.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-14 sm:py-20 px-4 bg-white rounded-2xl shadow-md border">
          <div className="text-5xl sm:text-6xl mb-4">🐾</div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            No Listings Found
          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-md">
            You haven’t added any pets yet. Start by adding your first pet for
            adoption.
          </p>

          <Link
            href="/all-pets"
            className="
              mt-6 px-5 sm:px-6 py-3
              rounded-full
              bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500
              text-white font-medium
              text-sm sm:text-base
              shadow-md hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-0.5
            "
          >
            Browse All Pets
          </Link>
        </div>
      ) : (
        <div>
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
            <div className="bg-white shadow-md rounded-2xl p-5 sm:p-6 border text-center">
              <h2 className="text-gray-500 font-medium">Total Listings</h2>
              <p className="text-2xl sm:text-3xl font-bold text-blue-600 mt-2">
                {myPets.length}
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-5 sm:p-6 border text-center">
              <h2 className="text-gray-500 font-medium">Available</h2>
              <p className="text-2xl sm:text-3xl font-bold text-green-600 mt-2">
                {myPets.filter((p) => !p.isAdopted).length}
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-5 sm:p-6 border text-center">
              <h2 className="text-gray-500 font-medium">Adopted</h2>
              <p className="text-2xl sm:text-3xl font-bold text-red-500 mt-2">
                {myPets.filter((p) => p.isAdopted).length}
              </p>
            </div>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {myPets.map((pet) => (
              <MyListingCard key={pet._id} pet={pet} requests={requests} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListingspage;
