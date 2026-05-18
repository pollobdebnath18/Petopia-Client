import React from "react";
import {
  UtensilsCrossed,
  Stethoscope,
  Dumbbell,
  HeartHandshake,
} from "lucide-react";

const PetCareTips = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">Pet Care Tips 🐶</h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Keep your furry friends healthy, active, and happy with these
            essential pet care tips.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 group-hover:scale-110 transition">
              <UtensilsCrossed size={30} />
            </div>

            <h3 className="mt-5 text-xl font-bold">Proper Feeding</h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Provide balanced and nutritious meals to maintain your pet’s
              health and energy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 group-hover:scale-110 transition">
              <Stethoscope size={30} />
            </div>

            <h3 className="mt-5 text-xl font-bold">Vet Checkups</h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Schedule regular veterinary visits to ensure vaccinations and
              overall wellness.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-500 group-hover:scale-110 transition">
              <Dumbbell size={30} />
            </div>

            <h3 className="mt-5 text-xl font-bold">Daily Exercise</h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Regular exercise keeps pets active, healthy, and mentally
              stimulated.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 group-hover:scale-110 transition">
              <HeartHandshake size={30} />
            </div>

            <h3 className="mt-5 text-xl font-bold">Love & Attention</h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Spend quality time with your pets to build trust, comfort, and
              emotional bonding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;
