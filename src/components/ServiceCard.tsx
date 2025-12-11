import React from "react";
import { useNavigate } from "react-router-dom";

interface ServiceProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, image }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>

        <button
          className="mt-4 text-primary border border-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            navigate(`/services/${title}/${description}`)
          }
        >
          Learn More
        </button>
      </div>
    </div>
  );

  // return (
  //   <div className=" rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300">
  //     {/* Image */}
  //     <div className="h-68 w-full">
  //       <img src={image} alt="service" className="h-full w-full object-cover" />
  //     </div>

  //     {/* Content */}
  //     <div className="p-5 flex flex-col gap-3">
  //       {/* Service Name */}
  //       <h3 className="text-xl font-semibold text-primary">{title}</h3>

  //       {/* Description */}
  //       <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

  //       {/* Button */}
  //       <button
  //         className="mt-3 w-full bg-primary text-white py-2 rounded-full
  //                hover:bg-primary/90 active:scale-95 transition-all duration-150"
  //       >
  //         More Details
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default ServiceCard;
