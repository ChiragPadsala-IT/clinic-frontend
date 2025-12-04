import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      <section className="w-full bg-primary/10 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Welcome to Nirlep Physiotherapy & Garbhsanskar Courses — your
            trusted center for healing, wellness, and holistic pregnancy care.
          </p>
        </div>
      </section>
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
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Get an Appointment
            </h2>
            <p className="text-gray-600 mb-6">
              Book an Appointment with Our Experts Today. Schedule an
              appointment now and feel the difference with personalized,
              compassionate care designed just for you.
            </p>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              {/* Date */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="date"
                >
                  Appointment Date
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={today}
                  maxDate={maxDate}
                  filterDate={isWeekday} // disables Sundays
                  placeholderText="Select a date"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg p-2 h-32 focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
