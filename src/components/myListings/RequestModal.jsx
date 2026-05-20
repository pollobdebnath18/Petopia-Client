"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { ImStarEmpty } from "react-icons/im";

const RequestModal = ({ pet }) => {
  const [open, setOpen] = useState(false);
  const {data:session , isPending} = authClient.useSession();
  const user = session?.user;
//   console.log(user)

  return (
    <>
      {/* OPEN BUTTON */}
      <Button
        onClick={() => setOpen(true)}
        className="
         flex-1 px-3 py-2 rounded-lg text-white font-medium
      bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500
      hover:from-blue-600 hover:via-cyan-500 hover:to-blue-700
      shadow-md hover:shadow-xl
      transform hover:-translate-y-0.5
      transition-all duration-300 ease-in-out
      cursor-pointer
        "
      >
        Requests
      </Button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          {/* MODAL BOX */}
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 ">
            {/* CLOSE BUTTON */}

            <div className="flex items-center justify-between">
              {/* TITLE */}
              <h2 className="text-xl font-bold  mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text ">
                Adoption Requests for {pet?.petName}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className=" text-gray-600 hover:text-red-500 text-xl mb-3"
              >
                <X />
              </button>
            </div>
            <div className="flex items-center justify-center text-4xl text-blue-600">
              <ImStarEmpty />
            </div>

            {/* CONTENT */}
            <div className="text-center text-gray-500 pt-8">
              No requests yet for <b>{pet?.petName}</b>
            </div>

            {/* FOOTER */}
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="
                  px-4 py-2 rounded-lg
                  bg-gray-100 hover:bg-gray-200
                  transition
                "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestModal;
