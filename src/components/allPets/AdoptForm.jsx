"use client";

import { authClient } from "@/lib/auth-client";
import { Mail, User } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const AdoptForm = ({ pet }) => {
  const { data: session, isPending } = authClient.useSession();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  //  WAIT UNTIL SESSION LOADS (IMPORTANT FOR HYDRATION)
  if (isPending) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white border shadow-xl rounded-2xl p-10 text-center">
        Loading session...
      </div>
    );
  }

  const user = session?.user;

  //  SAFE AFTER SESSION READY
  const isOwner = user?.email === pet?.ownerEmail;
  const isAdopted = pet?.isAdopted === true;
  const isDisabled = loading || isOwner || isAdopted || !user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login first");
      return;
    }

    if (isOwner) {
      toast.error("You cannot adopt your own pet");
      return;
    }

    if (isAdopted) {
      toast.error("This pet is already adopted");
      return;
    }

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!data.pickupDate || !data.message) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenData?.token}`, // ✅ FIXED HERE
          },
          body: JSON.stringify({
            petId: pet._id,
            petName: pet.petName,
            userName: user.name,
            email: user.email,
            pickupDate: data.pickupDate,
            message: data.message,
            image: pet.imageUrl,
            status: "pending",
          }),
        },
      );

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Request failed");
        return;
      }

      setSuccess(true);
      toast.success(`${pet.petName} adoption request sent 🐾`);
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  //  SUCCESS SCREEN
  if (success) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-white border shadow-xl rounded-2xl p-10 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-green-600">
          Request Sent Successfully!
        </h2>
        <p className="text-gray-500 mt-2">
          You requested adoption for <b>{pet.petName}</b>
        </p>
      </div>
    );
  }

  // ADOPTED UI
  if (isAdopted) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-green-50 border border-green-200 shadow-lg rounded-2xl p-10 text-center">
        <div className="text-5xl mb-3">🐾</div>

        <h2 className="text-2xl font-bold text-green-600">
          This Pet is Already Adopted
        </h2>

        <p className="text-gray-600 mt-2">
          <b>{pet.petName}</b> has already found a loving home.
        </p>

        <p className="text-sm text-gray-500 mt-2">
          No further adoption requests can be submitted.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white border shadow-xl rounded-2xl p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Adopt This Pet 🐾</h2>

      {/* OWNER WARNING */}
      {isOwner && (
        <div className="mb-5 bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-xl text-sm text-center">
          You are the owner of this pet. You cannot adopt your own pet.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PET NAME */}
        <div>
          <label className="text-sm">Pet Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
            <input
              value={pet?.petName || ""}
              readOnly
              className="w-full bg-gray-100 border rounded-lg pl-10 p-2"
            />
          </div>
        </div>

        {/* USER NAME */}
        <div>
          <label className="text-sm">Your Name</label>
          <input
            value={user?.name || ""}
            readOnly
            className="w-full bg-gray-100 border rounded-lg p-2"
          />
        </div>

        {/* EMAIL */}
        <div className="md:col-span-2">
          <label className="text-sm">Your Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
            <input
              value={user?.email || ""}
              readOnly
              className="w-full bg-gray-100 border rounded-lg pl-10 p-2"
            />
          </div>
        </div>

        {/* DATE */}
        <div>
          <label>Pickup Date</label>
          <input
            name="pickupDate"
            type="date"
            required
            disabled={isDisabled}
            className="w-full border rounded-lg p-2 disabled:bg-gray-100"
          />
        </div>

        {/* MESSAGE */}
        <div className="md:col-span-2">
          <label>Message</label>
          <textarea
            name="message"
            required
            rows="2"
            disabled={isDisabled}
            className="w-full border rounded-lg p-2 disabled:bg-gray-100"
          />
        </div>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={isDisabled}
        className={`w-full mt-6 py-3 rounded-lg text-white font-semibold ${
          isOwner || isAdopted
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading
          ? "Submitting..."
          : isAdopted
            ? "Already Adopted"
            : isOwner
              ? "Owner Cannot Adopt"
              : `Adopt ${pet?.petName} 🐾`}
      </button>
    </form>
  );
};

export default AdoptForm;
