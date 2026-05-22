"use client";

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Mail, CalendarDays, LogOut, Home, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/");
  };
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-black dark:via-gray-950 dark:to-gray-900">
        <div className="bg-white dark:bg-gray-900 px-8 py-6 rounded-2xl shadow-xl border dark:border-gray-800">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Loading Profile...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-black dark:via-gray-950 dark:to-gray-900 px-4 py-2">
      <div className="max-w-4xl mx-auto">
        {/* PROFILE CARD */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
          {/* TOP BANNER */}
          <div className="h-35 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 relative">
            <div className="absolute -bottom-16 left-10">
              <img
                src={user?.image}
                alt={user?.name}
                className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-900 object-cover shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="pt-20 px-8 pb-8">
            {/* NAME */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                  {user?.name}
                </h1>

                <p className="mt-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Mail size={18} />
                  {user?.email}
                </p>

                <p className="mt-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <ShieldCheck size={18} className="text-green-500" />
                  {user?.emailVerified ? "Verified Account" : "Not Verified"}
                </p>
              </div>

              {/* STATUS BADGE */}
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full shadow-md w-fit">
                Petopia Member 🐾
              </div>
            </div>

            {/* INFO CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              {/* CREATED */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900">
                    <CalendarDays className="text-blue-600 dark:text-blue-300" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Account Created
                    </p>

                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      {new Date(user?.createdAt).toLocaleDateString()}
                    </h3>
                  </div>
                </div>
              </div>

              {/* UPDATED */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900">
                    <CalendarDays className="text-cyan-600 dark:text-cyan-300" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Last Updated
                    </p>

                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      {new Date(user?.updatedAt).toLocaleDateString()}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* HOME */}
              <Link href="/">
                <button className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                  <Home size={18} />
                  Home Page
                </button>
              </Link>

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 text-white font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
