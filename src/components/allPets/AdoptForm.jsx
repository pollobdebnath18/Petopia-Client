"use client";

import { authClient } from "@/lib/auth-client";
import { Mail, User } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const AdoptForm = ({ pet }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // ✅ simple validation (important fix)
    if (!data.pickupDate || !data.message) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      // TODO: API CALL HERE
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            petId: pet._id,
            petName: pet.petName,
            userName: user.name,
            email: user.email,
            pickupDate: data.pickupDate,
            message: data.message,
            status: "pending",
          }),
        },
      );

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message);
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

  // ✅ SUCCESS SCREEN
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

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white border shadow-xl rounded-2xl p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Adopt This Pet 🐾</h2>

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
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* MESSAGE */}
        <div className="md:col-span-2">
          <label>Message</label>
          <textarea
            name="message"
            required
            rows="2"
            className="w-full border rounded-lg p-2"
          />
        </div>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 py-3 rounded-lg bg-blue-600 text-white font-semibold cursor-pointer"
      >
        {loading ? "Submitting..." : `Adopt ${pet.petName} 🐾`}
      </button>
    </form>
  );
};

export default AdoptForm;
