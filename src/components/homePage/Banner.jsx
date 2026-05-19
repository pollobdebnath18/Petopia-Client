import Image from "next/image";
import Link from "next/link";
import BannerImg from "@/assets/banner_cat.avif";

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Give a <span className="text-blue-500">Loving Home</span> to Pets 🐾
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            Discover adorable pets waiting for adoption. Connect with trusted
            owners and shelters, and bring happiness into your life by adopting
            a new best friend today.
          </p>

          <Link href="/pets">
            <button className="mt-7 px-7 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium shadow-md hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg transition-all duration-300 cursor-pointer">
              Adopt Now
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex justify-center">
          <Image
            src={BannerImg}
            alt="Happy pets"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
