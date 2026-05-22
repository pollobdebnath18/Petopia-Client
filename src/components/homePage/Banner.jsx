"use client";
import Image from "next/image";
import Link from "next/link";
import BannerImg from "@/assets/banner_cat.avif";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ball = {
  width: 100,
  height: 100,
  backgroundColor: "var(--hue-2)",
  borderRadius: "50%",
};

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1"
        >
          {/* TITLE */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Give a <span className="text-blue-500">Loving Home</span> to Pets 🐾
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p variants={item} className="mt-5 text-gray-600 text-lg">
            Discover adorable pets waiting for adoption. Connect with trusted
            owners and shelters, and bring happiness into your life by adopting
            a new best friend today.
          </motion.p>

          {/* BUTTON */}
          <motion.div variants={item}>
            <Link href="/all-pets">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-7 px-7 py-3 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Explore More
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {/* FLOATING BALL */}
          <motion.div
            className="absolute w-24 h-24 bg-blue-400 rounded-full blur-xl opacity-40"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: "20%", left: "10%" }}
          />

          {/* SECOND BALL */}
          <motion.div
            className="absolute w-16 h-16 bg-pink-400 rounded-full blur-lg opacity-30"
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ bottom: "10%", right: "15%" }}
          />

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={BannerImg}
              alt="Happy pets"
              width={500}
              height={500}
              className="rounded-xl relative z-10 shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
