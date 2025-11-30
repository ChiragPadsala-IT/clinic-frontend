import React from "react";

const ClinicTeamCard = () => {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-photo/photo-sweet-confident-mature-lady-600nw-1918036262.jpg"
          alt="Team Member"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        {/* Name */}
        <h3 className="text-xl font-bold text-gray-800">Dr. Sarah Johnson</h3>

        {/* Role */}
        <p className="text-primary font-semibold">Senior Physiotherapist</p>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3">
          With 10+ years of experience, Dr. Sarah specializes in sports
          injuries, chronic pain management, and personalized rehabilitation
          programs.
        </p>

        {/* Button */}
        <button
          className="mt-3 w-full bg-primary text-white py-2 rounded-full 
             hover:bg-primary-dark active:scale-95 transition-all duration-200"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ClinicTeamCard;
