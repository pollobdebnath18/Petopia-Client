export const fetchAllPets = async (search = "", species = "", sort = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/pets?search=${search}&species=${species}&sort=${sort}`,
    { cache: "no-store" },
  );
  const pets = await res.json();
  return pets || [];
};

//my-listings
export const fetchMyPets = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/pets?email=${email}`,
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  return data || [];
};
