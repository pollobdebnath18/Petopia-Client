import Image from "next/image";
import Logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT - Logo + Name + Description */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src={Logo}
              alt="Petopia Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h2 className="text-xl font-bold">Petopia</h2>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            Petopia is a modern pet adoption platform where you can find loving
            pets and give them a forever home. Adopt, don’t shop ❤️
          </p>
        </div>

        {/* MIDDLE - Social Icons */}
        <div>
          <h2 className="text-lg font-bold mb-3">Follow Us</h2>

          <div className="flex flex-col gap-3 text-gray-300">
            <a href="#" className="hover:text-blue-400">
              🔵 Facebook
            </a>
            <a href="#" className="hover:text-pink-400">
              📸 Instagram
            </a>
            <a href="#" className="hover:text-sky-400">
              🐦 Twitter
            </a>
            <a href="#" className="hover:text-blue-300">
              💼 LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT - Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-3">Contact Us</h2>

          <div className="text-gray-300 space-y-2 text-sm">
            <p>Email: support@petopia.com</p>
            <p>Phone: +880 17XXXXXXXX</p>
            <p>Location: Sylhet, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Petopia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
