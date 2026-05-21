"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

export function RequestDelete({ requests, req, user }) {
  const handleDelete = async (id) => {
    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/requests/${id}?email=${user.email}`,
        {
          method: "DELETE",
          authorization: `Bearer ${tokenData?.token}`,
        },
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Delete failed");
        return;
      }

      toast.success(`${req.petName} Deleted Successfully`);
    } catch (err) {
      toast.error("Delete failed");
    }
  };
  return (
    <AlertDialog>
      <Button
        className={
          "py-2 px-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition"
        }
      >
        <Trash2 size={18} />{" "}
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
                This will permanently delete <strong>{req?.petName} </strong>
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                slot="close"
                variant="danger"
                onClick={() => handleDelete(req._id)}
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
