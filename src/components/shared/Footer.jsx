import Image from "next/image";
import Logo from "@/assets/logo.webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* LEFT - Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={Logo}
              alt="Petopia Logo"
              width={42}
              height={42}
              className="rounded-full"
            />
            <h2 className="text-xl font-bold">Petopia</h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Petopia is a modern pet adoption platform where users can discover,
            adopt, and give loving homes to pets. Every pet deserves a second
            chance
          </p>
        </div>

        {/* MIDDLE - Contact Info */}
        <div className="text-center">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>

          <div className="text-gray-400 text-sm space-y-3">
            <p>📧 support@petopia.com</p>
            <p>📞 +880 17XXXXXXXX</p>
            <p>📍 Sylhet, Bangladesh</p>
          </div>
        </div>

        {/* RIGHT - Social Links */}
        <div className="text-center">
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>

          <div className="flex justify-center items-center gap-5">
            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/40 hover:bg-blue-600 hover:scale-110 transition"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/40 hover:bg-pink-500 hover:scale-110 transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/40 hover:bg-sky-500 hover:scale-110 transition"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Petopia. All rights reserved by Pollob Debnath
      </div>
    </footer>
  );
};

export default Footer;
