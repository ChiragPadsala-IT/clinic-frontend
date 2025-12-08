import React from "react";
import HeroPageTitle from "../../components/HeroPageTitle";
import { useNavigate, useParams } from "react-router-dom";
import AppointmentForm from "../../components/AppointmentForm";

const ServiceDetailsPage = () => {
  const navigate = useNavigate();

  const { title, description } = useParams();
  const pageTitle = decodeURIComponent(title!.toString());
  const pageDescription = decodeURIComponent(description!.toString());

  const services = [
    "Orthopedic Rehab",
    "Child Physiotherapy",
    "Women’s Physio & Fitness",
    "Sports Injury Rehab",
    "Personalized Weight Loss Plans",
    "Garbhsanskar Classes",
  ];

  const subService = [
    {
      service: "Neurodevelopmental Disorders",
      category: [
        {
          name: "Cerebral Palsy (CP)",
          image:
            "https://www.cerebralpalsyguide.com/wp-content/uploads/2022/01/child-with-cp-smiling.jpg",
        },
        {
          name: "Cerebral Palsy (CP)",
          image:
            "https://www.cerebralpalsyguide.com/wp-content/uploads/2022/01/child-with-cp-smiling.jpg",
        },
        {
          name: "Cerebral Palsy (CP)",
          image:
            "https://www.cerebralpalsyguide.com/wp-content/uploads/2022/01/child-with-cp-smiling.jpg",
        },
        {
          name: "Cerebral Palsy (CP)",
          image:
            "https://www.cerebralpalsyguide.com/wp-content/uploads/2022/01/child-with-cp-smiling.jpg",
        },
      ],
    },
    {
      service: "Orthopedic Conditions",
      category: [
        {
          name: "Cerebral Palsy (CP)",
          image:
            "https://www.cerebralpalsyguide.com/wp-content/uploads/2022/01/child-with-cp-smiling.jpg",
        },
      ],
    },
  ];
  console.log(title);

  return (
    <div className="w-full">
      {/* -----------Hero------------------ */}
      {/* <HeroPageTitle pageTitle={pageTitle} subTitle={pageDescription} /> */}
      <div className="w-full bg-gray-50">
        {/* ---------------------- HERO ---------------------- */}
        <section className="bg-primary/10 py-16 border-b border-primary/20">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Pediatric Rehabilitation & Therapy Conditions
            </h1>

            {/* Breadcrumbs */}
            <div className="flex gap-2 text-sm text-gray-600 mt-2">
              <span
                className="hover:text-primary hover:cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </span>
              <span>/</span>
              <span
                className="hover:text-primary hover:cursor-pointer"
                onClick={() => navigate("/services")}
              >
                Services
              </span>
              <span>/</span>
              <span className="text-primary font-medium">Pediatric Rehab</span>
            </div>
          </div>
        </section>

        {/* ---------------------- MAIN CONTENT ---------------------- */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                We provide comprehensive assessment and management for:
              </h2>

              {/* CATEGORY SECTIONS */}
              <div className="space-y-10">
                {/* Neurodevelopmental Disorders */}
                <div className="flex flex-col gap-15">
                  {subService.map((service, index) => (
                    <div key={index} className="">
                      <h3 className="text-xl font-semibold text-primary mb-5">
                        {service.service}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {service.category.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="bg-white rounded-2xl overflow-hidden border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                          >
                            <img src={item.image} alt="" />
                            <h3 className="text-xl font-semibold text-primarytext-xl p-2">
                              {item.name}
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-10">
              {/* Appointment Form */}
              <AppointmentForm />

              {/* Services List */}
              <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Our Services
                </h3>

                <ul className="space-y-3">
                  {services.map((item, i) => (
                    <li
                      key={i}
                      className="p-3 border border-gray-200 rounded-lg hover:bg-primary/10 cursor-pointer transition-all"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
