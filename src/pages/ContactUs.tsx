import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HeroPageTitle from "../components/HeroPageTitle";
import AppointmentForm from "../components/AppointmentForm";

const ContactUs: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Today and next 30 days
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);

  // Disable Sundays (0 = Sunday)
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0; // return false for Sunday
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <HeroPageTitle
        pageTitle="Contact Us"
        subTitle="Welcome to Nirlep Physiotherapy & Garbhsanskar Courses — your
            trusted center for healing, wellness, and holistic pregnancy care."
      />

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Contact Info + Map */}
          <div className="space-y-6">
            {/* Address */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>
                Millennium Business Hub, 618, beside Amiras Hotel, opp. Sarthana
                Nature Park, Sarthana Jakat Naka, Surat, Gujarat 395013, India
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>+91 910 6204 252</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>nirlepphysiotherapy618@gmail.com</p>
            </div>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                title="Nirlep Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.307485657346!2d72.89720647607684!3d21.229132206583374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f1c123456789%3A0xea2bbf73ad25dbf0!2sNirlep%20Physiotherapy%20%26%20Garbhsanskar%20Courses!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="400"
                className="rounded-lg border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Appointment Form */}
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
