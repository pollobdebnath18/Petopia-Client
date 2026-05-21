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

//my-requets for sepecific user

export const fetchMyRequests = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/requests?email=${email}`,
    {
      cache: "no-store",
    },
  );

  return res.json();
};

//my-request for multiple user 
const fetchPetRequests = async (petId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/requests/pet/${petId}`,
    { cache: "no-store" },
  );

  return res.json();
};
