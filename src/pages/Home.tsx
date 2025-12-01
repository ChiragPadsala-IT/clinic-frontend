import React from "react";
import { HomePageBanner } from "../assets/images";
import { easeIn, easeInOut, motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import ClinicTeamCard from "../components/ClinicTeamCard";
import GoogleReviewCard from "../components/GoogleRevieCard";

const services = [
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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png",
  },
  {
    title: "Child Physiotherapy",
    description:
      "Therapy for motor skills, coordination, and developmental milestones in children.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png",
  },
];

const advisors = [
  {
    name: "Dr. Juli",
    role: "Founder",
    description:
      "Founder, Nirlep Multispeciality Physiotherapy & Garbhasanskar",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Dr. Juli",
    role: "Founder",
    description:
      "Founder, Nirlep Multispeciality Physiotherapy & Garbhasanskar",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Dr. Juli",
    role: "Founder",
    description:
      "Founder, Nirlep Multispeciality Physiotherapy & Garbhasanskar",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

const googleReviews = [
  {
    authorName: "Sam Parker",
    authorAvatar: "https://i.pravatar.cc/100?img=8",
    text: "I visited PhysioCare after a sports injury and the treatment plan was excellent. The staff were professional, the center was clean, and I could see steady progress within a few sessions. Highly recommend!, I visited PhysioCare after a sports injury and the treatment plan was excellent. The staff were professional, the center was clean, and I could see steady progress within a few sessions. Highly recommend!I visited PhysioCare after a sports injury and the treatment plan was excellent. The staff were professional, the center was clean, and I could see steady progress within a few sessions. Highly recommend!I visited PhysioCare after a sports injury and the treatment plan was excellent. The staff were professional, the center was clean, and I could see steady progress within a few sessions. Highly recommend!I visited PhysioCare after a sports injury and the treatment plan was excellent. The staff were professional, the center was clean, and I could see steady progress within a few sessions. Highly recommend!",
    rating: 5,
    date: "2025-11-01T12:00:00Z",
    verified: true,
  },
];

const Home = () => {
  return (
    <div className="relative flex flex-col ">
      <div className="w-full h-[100vh] max-sm:h-[80vh] max-md:flex justify-cente">
        <img
          src={HomePageBanner}
          className="w-full h-[100vh] max-sm:h-[80vh] z-10 absolute"
          alt=""
        />
        {/* <div> */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.2, ease: easeInOut }}
          className="
          absolute 
          ml-40 mt-45 
          h-screen
          z-20
          max-md:w-[100%] 
          max-md:mx-auto max-md:mt-0 
          flex flex-col gap-5 max-md:justify-center max-md:items-center
          text-sm sm:text-[18px]
          max-md:h-[80vh]
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.2, ease: easeInOut }}
            className=" 
                   text-primary text-4xl font-bold opacity-90"
          >
            Restore your body <br /> with expert <br /> Physiotherapy
          </motion.h1>
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.2, ease: easeInOut }}
            className="opacity-70"
          >
            Personalized treatments, evidence-based care, and <br /> gentle
            guidance to help you move freely, recover faster, and <br /> live
            pain-free.
          </motion.h6>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.2, ease: easeInOut }}
            className="w-1/2 p-2 cursor-pointer rounded-full bg-primary text-white hover:bg-gray-light transition-all duration-110 active:scale-95 hover:scale-102"
          >
            Book appointment
          </motion.button>
        </motion.div>
        {/* </div> */}
      </div>

      {/* Services */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-28 px-6 bg-fixed inset-0 bg-black/10 "
        style={{
          backgroundImage:
            "url('https://www.news-medical.net/image-handler/picture/2018/4/shutterstock_By_ESB_Professional.jpg')",
        }}
      >
        <div className="w-full max-w-6xl mx-auto my-5 px-4 inset-0 bg-black/60">
          <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <ServiceCard
                title={item.title}
                description={item.description}
                image={item.image}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {/* Image */}
          <div className="h-full">
            <img
              src="https://www.nmcpondy.com/wp-content/uploads/2025/07/1699355707815479704654a1c3b58c95.jpg"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
              alt="clinic"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-6">
            <h4 className="text-primary font-semibold tracking-wide">
              WHY CHOOSE US?
            </h4>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Our Core Values: Guiding Principles of Quality Care
            </h2>

            <div className="grid grid-cols-1 gap-5">
              {[
                "Experienced & Expert Team",
                "Personalized Treatment Plans",
                "Advanced Physiotherapy Techniques",
                "Safe & Scientific Garbhsanskar Practices",
                "Holistic Approach for Mind, Body & Soul",
                "Family-Centered Care",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <span className="text-primary text-2xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our professional */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h4 className="text-primary font-semibold">OUR PROFESSIONAL</h4>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Meet Our Doctors
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-4">
            At Nirlep, every doctor is dedicated to your healing with precision,
            compassion, and expertise.
          </p>

          {/* Cards */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {advisors.map((item, index) => (
              <ClinicTeamCard
                description={item.description}
                image={item.image}
                name={item.name}
                role={item.role}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Garbhsanskar */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-28 px-6 bg-fixed"
        style={{
          backgroundImage:
            "url('https://storage.jainebooks.org/sanskarshakti/2024/04/3-fetus.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-5xl mx-auto text-center text-white">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Experience Holistic Garbhsanskar in Surat with Nirlep
          </h2>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg opacity-90 max-w-3xl mx-auto">
            Our Garbhsanskar program blends yoga, meditation, music, and
            prenatal care to support a calm mind, healthy body, and positive
            bonding between mother and baby — all guided by experts who truly
            care.
          </p>

          {/* Button */}
          <button
            className="mt-10 bg-primary text-white px-8 py-3 rounded-full text-lg 
      hover:bg-primary/90 active:scale-95 transition-all"
          >
            Explore Garbhsanskar
          </button>
        </div>
      </section>

      {/* Testimonial */}
      {/* <div className="w-full max-w-6xl mx-auto my-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Patients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: "1.05" }}
            whileTap={{ scale: "1" }}
            className="bg-white cursor-pointer p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Sarah Thompson</h3>
                <p className="text-sm text-gray-500">Patient</p>
              </div>
            </div>
            <div className="flex mt-3 text-yellow-400">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-600 mt-4 line-clamp-3">
              I had an amazing experience at the clinic. The staff were very
              supportive, and the physiotherapy treatment helped me recover
              faster than I expected.
            </p>
          </motion.div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/101"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">David Miller</h3>
                <p className="text-sm text-gray-500">Athlete</p>
              </div>
            </div>

            <div className="flex mt-3 text-yellow-400">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-600 mt-4 line-clamp-3">
              The therapists really understand how to treat sports injuries.
              Highly recommend this clinic for anyone looking for professional
              care.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/102"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Emily Carter</h3>
                <p className="text-sm text-gray-500">Customer</p>
              </div>
            </div>

            <div className="flex mt-3 text-yellow-400">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-600 mt-4 line-clamp-3">
              The booking process was easy, the staff is friendly, and the
              environment is clean and calming. Definitely my go-to place for
              treatment.
            </p>
          </div>
        </div>
      </div> */}

      {/* Google Review */}
      <div className="bg-white">
        <div className="w-full max-w-6xl mx-auto py-10 px-4 ">
          <h2 className="text-1 text-primary font-bold text-center mb-8">
            Testimonial
          </h2>
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Patients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {googleReviews.map((item, index) => (
              <GoogleReviewCard
                authorName={item.authorName}
                date={item.date}
                rating={item.rating}
                text={item.text}
                authorAvatar={item.authorAvatar}
                key={index}
                source={"google"}
                verified={item.verified}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
