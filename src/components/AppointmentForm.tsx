import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [setselectedTime, setSetselectedTime] = useState("");
  const [value, onChange] = useState("10:00");

  // Today and next 30 days
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);

  // Disable Sundays (0 = Sunday)
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0; // return false for Sunday
  };

  const timeSlots = [
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-primary mb-4">Make Appointment</h2>
      <p className="text-gray-600 mb-6">
        Book an Appointment with Our Experts Today. Schedule an appointment now
        and feel the difference with personalized, compassionate care designed
        just for you.
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

        {/* Time */}
        {selectedDate !== null &&
          selectedDate !== undefined &&
          selectedDate.toString() !== "" && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Appointment Time
              </label>

              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    // onClick={() => onSelect(time)}
                    onClick={() => {}}
                    className={`p-2 border rounded-md text-sm transition 
              ${
                setselectedTime === time
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 hover:bg-primary/10"
              }
            `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

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

        {/* Appointment Amount */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Appointment Fees
          </label>
          <input
            type="text"
            value="₹0"
            readOnly
            className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 text-gray-700 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-all"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
