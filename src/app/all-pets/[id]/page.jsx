import AdoptForm from "@/components/allPets/AdoptForm";
import PetsDetails from "@/components/allPets/PetsDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const PetDetailsPage = async ({ params }) => {
  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const pet = await res.json();

  return (
    <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <PetsDetails pet={pet} />

      <AdoptForm pet={pet} currentUser={user} />
    </div>
  );
};

export default PetDetailsPage;
