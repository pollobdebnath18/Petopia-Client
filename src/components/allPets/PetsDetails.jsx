import {
  FaPaw,
  FaDog,
  FaBirthdayCake,
  FaVenusMars,
  FaMapMarkerAlt,
  FaDollarSign,
  FaHeartbeat,
  FaSyringe,
} from "react-icons/fa";

const PetsDetails = ({ pet }) => {
  const {
    petName,
    species,
    breed,
    age,
    gender,
    imageUrl,
    healthStatus,
    vaccinationStatus,
    location,
    adoptionFee,
    description,
    ownerEmail,
  } = pet;

  return (
    <div className=" ">
      {/* LEFT SIDE - 50% */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* IMAGE */}
        <div className="relative">
          <img
            src={imageUrl}
            alt={petName}
            className="w-full h-72 object-cover"
          />

          <span className="absolute top-4 left-4 bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
            {species}
          </span>
        </div>

       
        <div className="p-6 space-y-2"> 
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{petName}</h1>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-2 flex-wrap">
                <span>{breed}</span>
                <span>•</span>
                <span>{species}</span>
                <span>•</span>
                <span>{gender}</span>
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500  tracking-wide">
                Adoption Fee
              </p>

              <h2 className="text-3xl font-bold text-green-600">
                ${adoptionFee}
              </h2>
            </div>
          </div>

          {/* BREED */}
          <p className="text-gray-600 text-sm">{breed}</p>

          {/* 2 COLUMN DETAILS */}

          <div className="grid grid-cols-2 gap-2 text-sm">
            {/* Species */}
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
              <FaPaw className="text-blue-500 mt-1" />
              <div>
                <p className="text-gray-400">Species</p>
                <p className="font-semibold">{species}</p>
              </div>
            </div>

            {/* Breed */}
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
              <FaDog className="text-green-500 mt-1" />
              <div>
                <p className="text-gray-400">Breed</p>
                <p className="font-semibold">{breed}</p>
              </div>
            </div>

            {/* Age */}
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
              <FaBirthdayCake className="text-pink-500 mt-1" />
              <div>
                <p className="text-gray-400">Age</p>
                <p className="font-semibold">{age} years</p>
              </div>
            </div>

            {/* Gender */}
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
              <FaVenusMars className="text-purple-500 mt-1" />
              <div>
                <p className="text-gray-400">Gender</p>
                <p className="font-semibold">{gender}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              <div>
                <p className="text-gray-400">Location</p>
                <p className="font-semibold">{location}</p>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
              <FaDollarSign className="text-green-600 mt-1" />
              <div>
                <p className="text-gray-400">Adoption Fee</p>
                <p className="font-semibold">${adoptionFee}</p>
              </div>
            </div>

            {/* Health Status */}
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
              <FaHeartbeat className="text-rose-500 mt-1" />
              <div>
                <p className="text-gray-400">Health</p>
                <p className="font-semibold">{healthStatus}</p>
              </div>
            </div>

            {/* Vaccination */}
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
              <FaSyringe className="text-indigo-500 mt-1" />
              <div>
                <p className="text-gray-400">Vaccination</p>
                <p className="font-semibold">{vaccinationStatus}</p>
              </div>
            </div>
          </div>

          {/* ABOUT + DESCRIPTION */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">About Pet</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default PetsDetails;
