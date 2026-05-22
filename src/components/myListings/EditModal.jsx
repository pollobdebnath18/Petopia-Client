"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "@heroui/react";

const EditModal = ({ pet }) => {
  const { data: session } = authClient.useSession();
  const email = session?.user?.email;
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const isOwner = email === pet?.ownerEmail;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isOwner) {
      toast.error("Unauthorized access");
      return;
    }

    const formData = new FormData(e.target);
    const petsData = Object.fromEntries(formData.entries());

    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${pet?._id}?email=${email}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(petsData),
        },
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Pet updated successfully 🐾");
        setOpen(false);
        router.refresh();
      } else {
        toast.error(data.message || "Update failed");
      }
    } catch (error) {
      console.log(error);
      toast.error(`Update Failed, ${error}`);
    }
  };

  return (
    <>
      {/* OPEN BUTTON */}
      <Button
        onClick={() => setOpen(true)}
        className="
          flex-1 px-3 py-2 rounded-lg
          border border-blue-500
          text-blue-600 font-medium
          bg-transparent
          hover:text-white
          hover:border-transparent
          hover:bg-gradient-to-r
          hover:from-blue-500
          hover:via-cyan-500
          hover:to-blue-700
          transition-all duration-300
        "
      >
        Update
      </Button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-2xl bg-white rounded-2xl p-4 relative shadow-xl dark:bg-gray-700 dark:text-white/90">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-xl hover:text-red-500 transition"
            >
              ✕
            </button>

            {/* TITLE */}
            <h1 className="text-2xl font-bold text-center mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
              Update Pet Form 🐾
            </h1>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {/* PET NAME */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Pet Name</label>
                <input
                  name="petName"
                  defaultValue={pet?.petName}
                  className="border p-2 rounded-lg"
                />
              </div>

              {/* SPECIES */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Species</label>

                <select
                  name="species"
                  defaultValue={pet?.species}
                  className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="">Select Species</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* BREED */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Breed</label>
                <input
                  name="breed"
                  defaultValue={pet?.breed}
                  className="border p-2 rounded-lg"
                />
              </div>

              {/* AGE */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Age</label>
                <input
                  name="age"
                  type="number"
                  defaultValue={pet?.age}
                  className="border p-2 rounded-lg"
                />
              </div>

              {/* GENDER */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Gender</label>

                <select
                  name="gender"
                  defaultValue={pet?.gender}
                  className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              {/* IMAGE */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Image URL</label>
                <input
                  name="imageUrl"
                  defaultValue={pet?.imageUrl}
                  className="border p-2 rounded-lg"
                />
              </div>

              {/* LOCATION */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Location</label>
                <input
                  name="location"
                  defaultValue={pet?.location}
                  className="border p-2 rounded-lg"
                />
              </div>

              {/* FEE */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Adoption Fee</label>
                <input
                  name="adoptionFee"
                  type="number"
                  defaultValue={pet?.adoptionFee}
                  className="border p-2 rounded-lg"
                />
              </div>

              {/* HEALTH */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Health Status</label>
                <input
                  name="healthStatus"
                  defaultValue={pet?.healthStatus}
                  className="border p-2 rounded-lg"
                />
              </div>

              {/* VACCINATION */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Vaccination</label>
                <input
                  name="vaccinationStatus"
                  defaultValue={pet?.vaccinationStatus}
                  className="border p-2 rounded-lg"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  defaultValue={pet?.description}
                  rows="2"
                  className="border p-2 rounded-lg"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={!isOwner}
                className="
                  md:col-span-2 w-full py-3 rounded-lg
                  bg-gradient-to-r from-blue-600 to-cyan-500
                  text-white font-semibold
                  hover:scale-[1.01]
                  transition
                  disabled:opacity-50 cursor-pointer
                "
              >
                Update Pet 🐾
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal;
