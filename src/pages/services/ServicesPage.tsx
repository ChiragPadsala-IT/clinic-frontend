import { useNavigate } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard";
import HeroPageTitle from "../../components/HeroPageTitle";

const services = [
  {
    title: "Child Physiotherapy",
    description:
      "Therapy for motor skills, coordination, and developmental milestones in children.",
    image:
      "https://peachphysio.ca/wp-content/uploads/2022/04/PeachPhysio-32-TAGGED-scaled-1.jpeg",
  },
  {
    title: "Orthopedic Rehab",
    description:
      "Recovery support for bone, joint, and muscle injuries through guided physiotherapy.",
    image:
      "https://s16736.pcdn.co/wp-content/uploads/sites/270/2023/01/OrthopedicRehab.jpg.optimal.jpg",
  },
  {
    title: "Child Physiotherapy",
    description:
      "Therapy for motor skills, coordination, and developmental milestones in children.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png",
  },
  {
    title: "Child Physiotherapy",
    description:
      "Therapy for motor skills, coordination, and developmental milestones in children.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png",
  },
  {
    title: "Child Physiotherapy",
    description:
      "Therapy for motor skills, coordination, and developmental milestones in children.",
    image:
      "https://peachphysio.ca/wp-content/uploads/2022/04/PeachPhysio-32-TAGGED-scaled-1.jpeg",
  },
  {
    title: "Orthopedic Rehab",
    description:
      "Recovery support for bone, joint, and muscle injuries through guided physiotherapy.",
    image:
      "https://s16736.pcdn.co/wp-content/uploads/sites/270/2023/01/OrthopedicRehab.jpg.optimal.jpg",
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* ------------------ HERO SECTION ------------------ */}
      <HeroPageTitle
        pageTitle="Our Services"
        subTitle="Move Freely, Live Fully — Expert Physiotherapy & Holistic Care"
      />

      {/* ------------------ SERVICES GRID ------------------ */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
            What We Offer
          </h2>

          <p className="text-center text-gray-600 mt-3 mb-12 max-w-2xl mx-auto">
            Our services are designed to help you heal, strengthen, and live a
            healthier life.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {item.description}
                  </p>

                  <button
                    className="mt-4 text-primary border border-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      navigate(`/services/${item.title}/${item.description}`)
                    }
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ CTA SECTION ------------------ */}
      <section className="py-20 bg-primary/80 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Healing Journey
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          Book an appointment with our expert physiotherapists and begin your
          recovery today.
        </p>

        <a
          href="/contact-us"
          className="mt-8 inline-block bg-white text-primary px-10 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all"
        >
          Book Appointment
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;
