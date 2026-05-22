"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
const AddForm = () => {
  const [open, setOpen] = useState(true);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  //   console.log(user);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    //  convert types properly
    const petsData = {
      ...data,
      age: Number(data.age),
      adoptionFee: Number(data.adoptionFee),
    };
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(petsData),
    });

    const result = await res.json();

    if (result.insertedId) {
      toast.success("Pet Added Successfully in My Listings");
      setTimeout(() => {
        router.push("/my-listings");
      }, 1000);
    } else {
      toast.error("Added Failed. Please Try Again");
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-5">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-5 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
            Add New Pet 🐾
          </h1>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => router.back()}
            className="
    w-10 h-10 rounded-full
    flex items-center justify-center
    bg-gray-100 hover:bg-red-100
    text-gray-600 hover:text-red-500
    transition-all duration-300
    cursor-pointer
  "
          >
            ✕
          </button>
        </div>

        {open && (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            <input
              name="petName"
              placeholder="Pet Name"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <select
              name="species"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Species</option>
              <option value="Dog">Dog </option>
              <option value="Cat">Cat </option>
              <option value="Bird">Bird </option>
              <option value="Rabbit">Rabbit </option>
              <option value="Other">Other</option>
            </select>

            <input
              name="breed"
              placeholder="Breed"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              name="age"
              type="number"
              placeholder="Age"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <select
              name="gender"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male </option>
              <option value="Female">Female </option>
            </select>

            <input
              name="imageUrl"
              placeholder="Image URL"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              name="location"
              placeholder="Location"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              name="adoptionFee"
              type="number"
              placeholder="Adoption Fee ($)"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              name="healthStatus"
              placeholder="Health Status"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              name="vaccinationStatus"
              placeholder="Vaccination Status"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              name="ownerEmail"
              value={user?.email || ""}
              readOnly
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="description"
              placeholder="Description..."
              rows="2"
              className="border rounded-lg p-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="md:col-span-2 w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer"
            >
              Add Pet 🐾
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddForm;
