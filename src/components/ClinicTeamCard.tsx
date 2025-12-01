import React from "react";

interface ClinicProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const ClinicTeamCard: React.FC<ClinicProps> = ({
  name,
  role,
  description,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
      <img
        src={image}
        className="w-28 h-28 rounded-full mx-auto object-cover"
      />

      <h3 className="text-xl font-bold text-gray-800 mt-5">{name}</h3>

      <p className="text-gray-600 text-sm mt-2">{role}</p>

      <p className="text-gray-500 text-sm mt-4 line-clamp-3">{description}</p>
    </div>
  );

  // return (
  //   <div className="max-w-sm bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
  //     {/* Image */}
  //     <div className="h-56 w-full overflow-hidden">
  //       <img
  //         src={image}
  //         alt="Team Member"
  //         className="w-full h-full object-cover"
  //       />
  //     </div>

  //     {/* Content */}
  //     <div className="p-5 flex flex-col gap-2">
  //       {/* Name */}
  //       <h3 className="text-xl font-bold text-gray-800">{name}</h3>

  //       {/* Role */}
  //       <p className="text-primary font-semibold">{role}</p>

  //       {/* Description */}
  //       <p className="text-gray-600 text-sm line-clamp-3">{description}</p>

  //       {/* Button */}
  //       {/* <button
  //         className="mt-3 w-full bg-primary text-white py-2 rounded-full
  //            hover:bg-primary-dark active:scale-95 transition-all duration-200"
  //       >
  //         View Profile
  //       </button> */}
  //     </div>
  //   </div>
  // );
};

export default ClinicTeamCard;
