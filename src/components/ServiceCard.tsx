import React from "react";

const ServiceCard = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="h-48 w-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
          alt="service"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Service Name */}
        <h3 className="text-xl font-semibold text-gray-800">
          Physiotherapy Treatment
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">
          Personalized treatment that helps you recover from injury, reduce
          pain, and restore movement through expert care.
        </p>

        {/* Button */}
        <button
          className="mt-3 w-full bg-primary text-white py-2 rounded-full 
                 hover:bg-primary/90 active:scale-95 transition-all duration-150"
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
