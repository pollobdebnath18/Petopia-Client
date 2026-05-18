const AllPetsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}`);
  const pets = await res.json();
  return (
    <div>
      <h1>All pets</h1>
      <h2>total : {pets.length}</h2>
    </div>
  );
};

export default AllPetsPage;
