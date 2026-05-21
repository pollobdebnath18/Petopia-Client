"use client";

import React from "react";
import Link from "next/link";
import { Eye, Trash2, Clock3, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { RequestDelete } from "./RequestDelete";

const RequestTable = ({ requests }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

 

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border bg-white rounded-xl overflow-hidden shadow-md">
        {/* HEADER */}
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Pet Name</th>
            <th className="p-3 text-left">Request Date</th>
            <th className="p-3 text-left">Pickup Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {requests?.map((req) => (
            <tr key={req._id} className="border-t hover:bg-gray-50">
              {/* PET INFO */}
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <img
                    src={req.image || "https://via.placeholder.com/50"}
                    alt={req.petName}
                    className="w-12 h-12 rounded-lg object-cover border"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {req.petName}
                    </h3>
                    <p className="text-xs text-gray-500">Pet Request</p>
                  </div>
                </div>
              </td>

              {/* REQUEST DATE */}
              <td className="p-3 text-gray-600">
                {new Date(req.createdAt).toLocaleDateString()}
              </td>

              {/* PICKUP DATE */}
              <td className="p-3 text-gray-600">{req.pickupDate}</td>

              {/* STATUS */}
              <td className="p-3">
                <span className="flex items-center gap-1">
                  {req.status === "pending" && (
                    <>
                      <Clock3 size={16} className="text-yellow-500" />
                      <span className="text-yellow-600">Pending</span>
                    </>
                  )}

                  {req.status === "approved" && (
                    <>
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="text-green-600">Approved</span>
                    </>
                  )}

                  {req.status === "rejected" && (
                    <>
                      <XCircle size={16} className="text-red-500" />
                      <span className="text-red-600">Rejected</span>
                    </>
                  )}
                </span>
              </td>

              {/* ACTIONS */}
              <td className="p-3">
                <div className="flex justify-center gap-2">
                  <Link href={`/all-pets/${req.petId}`}>
                    <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition cursor-pointer">
                      <Eye size={18} />
                    </button>
                  </Link>

                  <RequestDelete req={req} requests={requests} user ={user}></RequestDelete>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
