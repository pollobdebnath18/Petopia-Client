"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

export function DeleteCard({ petId, ownerEmail, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const loggedInEmail = session?.user?.email;
  // console.log(loggedInEmail);

  const handleDelete = async () => {
    try {
      if (!loggedInEmail) {
        toast.error("You must be logged in");
        return;
      }

      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${petId}?email=${loggedInEmail}`,
        {
          method: "DELETE",
        },
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(" Deleted successfully");
        onSuccess?.(petId);
      } else {
        toast.error(data.message || "Delete failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AlertDialog>
      <Button
        className="flex-1 px-3 py-2 rounded-lg text-white font-medium
      bg-gradient-to-r from-red-500 via-red-600 to-pink-500
      hover:from-red-600 hover:via-pink-500 hover:to-red-700
      shadow-md hover:shadow-xl
      transform hover:-translate-y-0.5
      transition-all duration-300 ease-in-out
      cursor-pointer"
      >
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete and all of its data. This action
                cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                slot="close"
                variant="danger"
                onClick={handleDelete}
                disabled={loading}
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
