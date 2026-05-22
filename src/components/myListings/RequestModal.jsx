"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { X } from "lucide-react";
import { ImStarEmpty } from "react-icons/im";

const RequestModal = ({ pet }) => {
  const [open, setOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  //  LOAD REQUESTS
  useEffect(() => {
    if (!open) return;

    const fetchRequests = async () => {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/requests/pet/${pet._id}`,
      );

      const data = await res.json();
      setRequests(data || []);
      setLoading(false);
    };

    fetchRequests();
  }, [open, pet._id]);

  //  APPROVE / REJECT
  const handleAction = async (id, status) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/requests/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        console.log(data.message);
        return;
      }

      //  UPDATE UI AFTER APPROVE/REJECT
      setRequests((prev) => {
        let updated = prev.map((req) =>
          req._id === id ? { ...req, status } : req,
        );

        //  If approved → hide other requests
        if (status === "approved") {
          updated = updated.filter((req) => req._id === id);
        }

        return updated;
      });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <>
      {/* OPEN BUTTON */}
      <Button
        onClick={() => setOpen(true)}
        className="w-1/2 px-3 py-2 bg-blue-600 text-white rounded-lg"
      >
        Requests
      </Button>

      {/* MODAL BACKDROP (IMPORTANT Z-INDEX FIX) */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 dark:bg-black">
          {/* MODAL BOX */}
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 dark:bg-gray-600">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Requests for {pet.petName}</h2>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            {/* LOADING */}
            {loading ? (
              <p className="text-center py-10">Loading...</p>
            ) : requests.length === 0 ? (
              /* EMPTY STATE */
              <div className="text-center py-10">
                <ImStarEmpty className="text-4xl mx-auto text-blue-500" />
                <p className="text-gray-500 mt-2">No requests yet</p>
              </div>
            ) : (
              /* REQUEST LIST */
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {requests.map((req) => (
                  <div
                    key={req._id}
                    className="border rounded-xl p-4 bg-gray-50"
                  >
                    {/* NAME + STATUS */}
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold dark:text-gray-700">{req.userName}</h3>

                      <span
                        className={`px-3 py-1 rounded-full text-sm
                          ${
                            req.status === "approved"
                              ? "bg-green-100 text-green-600"
                              : req.status === "rejected"
                                ? "bg-red-100 text-red-600"
                                : "bg-yellow-100 text-yellow-600"
                          }`}
                      >
                        {req.status}
                      </span>
                    </div>

                    {/* EMAIL */}
                    <p className="text-sm text-gray-500 dark:text-gray-600">{req.email}</p>

                    {/* PICKUP DATE */}
                    <p className="text-sm mt-1">
                      Pickup:{" "}
                      <span className="font-medium">{req.pickupDate}</span>
                    </p>

                    {/* BUTTONS (ONLY PENDING) */}
                    {req.status === "pending" && (
                      <div className="grid grid-cols-2 gap-3 mt-4 dark:bg-gray-400">
                        <button
                          onClick={() => handleAction(req._id, "approved")}
                          className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() => handleAction(req._id, "rejected")}
                          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RequestModal;
