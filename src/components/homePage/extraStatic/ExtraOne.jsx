import React from "react";
import { HeartHandshake, Eye } from "lucide-react";

const ExtraOne = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-green-50 dark:bg-gradient-to-b dark:from-black dark:to-black">
      <div className="max-w-6xl mx-auto px-6 ">
        {/* Heading */}
        <div className="text-center pt-16 pb-5">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white/70">
            Our Mission & Vision
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed dark:text-white/50">
            At Petopia, we believe every pet deserves a safe, loving, and happy
            home. Our goal is to connect caring families with pets in need while
            promoting responsible adoption and animal welfare.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-green-100 dark:bg-black dark:border-gray-500 ">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <HeartHandshake className="text-green-600" size={32} />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white/70">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed dark:text-white/40">
              Our mission is to rescue, protect, and rehome pets by creating a
              trusted adoption platform where animals can find caring families.
              We aim to reduce stray animal populations and spread awareness
              about compassionate pet care and responsible adoption.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border border-blue-100  dark:bg-black dark:border-gray-500">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <Eye className="text-blue-600" size={32} />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white/70">
              Our Vision
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed dark:text-white/40">
              We envision a world where every pet is valued, loved, and cared
              for. Petopia strives to become a leading pet adoption community
              that inspires kindness, supports animal welfare, and helps create
              lifelong bonds between pets and humans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraOne;
