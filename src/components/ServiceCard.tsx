import React from "react";

interface ServiceProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, image }) => {
  return (
    <div className=" rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="h-68 w-full">
        <img src={image} alt="service" className="h-full w-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Service Name */}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        {/* Button */}
        {/* <button
          className="mt-3 w-full bg-primary text-white py-2 rounded-full 
                 hover:bg-primary/90 active:scale-95 transition-all duration-150"
        >
          More Details
        </button> */}
      </div>
    </div>
  );
};

export default ServiceCard;
