import React from "react";
import { HomePageBanner } from "../assets/images";
import { easeIn, easeInOut, motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import ClinicTeamCard from "../components/ClinicTeamCard";

const Home = () => {
  return (
    <div className="relative flex flex-col gap-10 ">
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

      {/* Testimonial */}
      <div className="w-full max-w-6xl mx-auto my-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Patients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card */}
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

            {/* Stars  */}
            <div className="flex mt-3 text-yellow-400">⭐⭐⭐⭐⭐</div>

            <p className="text-gray-600 mt-4 line-clamp-3">
              I had an amazing experience at the clinic. The staff were very
              supportive, and the physiotherapy treatment helped me recover
              faster than I expected.
            </p>
          </motion.div>

          {/* Duplicate more cards as needed  */}
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
      </div>

      {/* Services */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <div className="max-md:max-w-full flex justify-center gap-10 flex-wrap my-10">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>

      <hr className="opacity-5 my-10" />

      {/* Advisor */}
      <div>
        <h1 className="text-3xl font-bold text-center mb-8">Your Advisor</h1>
        <div className="max-w-6/5 max-md:max-w-full flex justify-center gap-10 flex-wrap my-10 mx-auto">
          <ClinicTeamCard />
          <ClinicTeamCard />
          <ClinicTeamCard />
          <ClinicTeamCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
