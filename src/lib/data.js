export const fetchAllPets = async (search = "", species = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/pets?search=${search}&species=${species}`,
    { cache: "no-store" },
  );
  const pets = await res.json();
  return pets || [];
};
