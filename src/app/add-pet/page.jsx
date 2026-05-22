import AddForm from "@/components/addPets/AddForm";

export const metadata = {
  title: "Petopia | Add Pets",
  description:
    "Petopia is a modern pet adoption platform where users can discover, adopt, and give loving homes to pets including dogs, cats, birds, and more. Find your perfect companion today.",
};

const AddPetPage = () => {
  return (
    <div>
      <AddForm></AddForm>
    </div>
  );
};

export default AddPetPage;
