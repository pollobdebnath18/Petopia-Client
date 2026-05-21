import React from "react";
import { PawPrint, Clock3, CheckCircle2, XCircle } from "lucide-react";

import RequestTable from "@/components/myRequests/RequestTable";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { fetchMyRequests } from "@/lib/data";
import Link from "next/link";

const MyRequests = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const email = session?.user?.email;
  const requests = await fetchMyRequests(email);

  const total = requests?.length || 0;
  const pending = requests?.filter((r) => r.status === "pending").length || 0;
  const approved = requests?.filter((r) => r.status === "approved").length || 0;
  const rejected = requests?.filter((r) => r.status === "rejected").length || 0;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 pt-4 pb-10">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 text-transparent bg-clip-text">
          My Adoption Requests 🐾
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Track and manage all your pet adoption requests in one place.
        </p>
      </div>

      {/* EMPTY STATE */}
      {total === 0 ? (
        <div className="mt-12 bg-white border border-dashed border-gray-200 rounded-3xl p-10 text-center shadow-sm">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center mb-5">
            <PawPrint className="w-10 h-10 text-blue-600" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800">No Requests Yet</h2>

          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            You haven’t submitted any adoption requests yet.
          </p>

          <Link href={"/all-pets"}>
            <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              Explore Pets 🐾
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Requests"
              value={total}
              icon={<PawPrint size={24} />}
            />

            <StatCard
              title="Pending"
              value={pending}
              icon={<Clock3 size={24} />}
              color="yellow"
            />

            <StatCard
              title="Approved"
              value={approved}
              icon={<CheckCircle2 size={24} />}
              color="green"
            />

            <StatCard
              title="Rejected"
              value={rejected}
              icon={<XCircle size={24} />}
              color="red"
            />
          </div>

          {/* TABLE */}
          <div className="mt-10">
            <RequestTable email={email} requests={requests} />
          </div>
        </>
      )}
    </div>
  );
};

export default MyRequests;

/* =========================
   REUSABLE STAT CARD
========================= */
const StatCard = ({ title, value, icon }) => {
  return (
    <div className="group bg-white/90 backdrop-blur border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <h2 className="text-4xl font-bold mt-2 text-blue-600">{value}</h2>
        </div>

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition">
          {icon}
        </div>
      </div>
    </div>
  );
};
