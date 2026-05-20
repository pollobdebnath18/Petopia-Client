export const fetchAllPets = async (search = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/pets?search=${search}`,
  );
  const pets = await res.json();
  return pets || [];
};
