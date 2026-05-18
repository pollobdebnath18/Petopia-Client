import React from "react";
import { Heart, ShieldCheck, DollarSign, PawPrint } from "lucide-react";

const AdoptPets = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">Why Adopt Pets? 🐾</h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Adopting a pet gives animals a second chance at life and brings
            unconditional love, happiness, and companionship into your home.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-pink-500 group-hover:scale-110 transition">
              <Heart size={32} />
            </div>

            <h3 className="mt-5 text-xl font-bold">Save Lives</h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Give homeless and abandoned pets a loving forever home filled with
              care and happiness.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-500 group-hover:scale-110 transition">
              <ShieldCheck size={32} />
            </div>

            <h3 className="mt-5 text-xl font-bold">Reduce Stray Animals</h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Help reduce the number of stray animals by supporting responsible
              adoption.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-500 group-hover:scale-110 transition">
              <DollarSign size={32} />
            </div>

            <h3 className="mt-5 text-xl font-bold">Affordable Adoption</h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Adoption is more affordable and meaningful than purchasing pets
              from breeders.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 group-hover:scale-110 transition">
              <PawPrint size={32} />
            </div>

            <h3 className="mt-5 text-xl font-bold">Loyal Companions</h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Adopted pets are incredibly loyal and bring endless joy and
              companionship to families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptPets;
