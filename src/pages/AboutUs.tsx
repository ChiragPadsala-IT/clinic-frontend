import React, { useEffect, useRef, useState } from "react";
import Counter from "../components/Counter";

const AboutUs = () => {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          if (statsRef.current) observer.unobserve(statsRef.current); // Only once
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="w-full bg-primary/10 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Welcome to Nirlep Physiotherapy & Garbhsanskar Courses — your
            trusted center for healing, wellness, and holistic pregnancy care.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Nirlep Physiotherapy & Garbhsanskar Courses, we provide expert
            physiotherapy services and nurturing Garbhsanskar programs for
            expectant mothers. Our focus is healing, wellness, and mindful care.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We combine medical expertise with compassion to ensure a healthy and
            joyful journey towards recovery and motherhood.
          </p>
        </div>

        <div className="w-full">
          <img
            src="https://www.revivept.ca/client/1686/media/img/430337/Physiotherapy_Services_in_Edmonton_AB.jpg"
            alt="Physiotherapy"
            className="rounded-2xl shadow-md"
          />
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-primary ">
            <div className="flex gap-4">
              <div className="w-14 h-14  bg-primary/10 text-primary flex items-center justify-center rounded-full mx-auto md:mx-0">
                🎯
              </div>
              <h3 className="text-2xl font-semibold h-14 flex items-center text-primary mb-4">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600">
              To promote healing and wellness through personalized physiotherapy
              and holistic pregnancy care.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-primary">
            <div className="flex gap-4">
              <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-full mx-auto md:mx-0">
                👁️
              </div>
              <h3 className="text-2xl h-14 flex items-center font-semibold text-primary mb-4">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600">
              To be Surat’s trusted center for physiotherapy and Garbhsanskar
              classes.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-white" ref={statsRef}>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition">
            <span className="text-primary text-5xl mb-3">👨‍⚕️</span>
            <h4 className="text-4xl font-bold text-primary">
              {startCount ? <Counter target={7} /> : 0}+
            </h4>
            <p className="text-gray-600 mt-2">Professional Staff</p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition">
            <span className="text-primary text-5xl mb-3">😊</span>
            <h4 className="text-4xl font-bold text-primary">
              {startCount ? <Counter target={10000} /> : 0}+
            </h4>
            <p className="text-gray-600 mt-2">Satisfied Clients</p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 p-8 rounded-xl shadow hover:shadow-md transition">
            <span className="text-primary text-5xl mb-3">⏳</span>
            <h4 className="text-4xl font-bold text-primary">
              {startCount ? <Counter target={15} /> : 0}+
            </h4>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section
        className="relative bg-fixed bg-center bg-cover py-20"
        style={{
          backgroundImage:
            "url('https://zoihospitals.com/wp-content/uploads/2019/10/Physiotherapy-When-Why-and-How-explained.png')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-5xl mx-auto px-4 text-white">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We maintain honesty, transparency, and trust in all interactions.",
              },
              {
                title: "Compassion",
                desc: "We care deeply for our patients’ well-being and comfort.",
              },
              {
                title: "Excellence",
                desc: "We strive to deliver the highest quality physiotherapy care.",
              },
              {
                title: "Holistic Care",
                desc: "We focus on healing the body, mind, and emotional wellbeing.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/50 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg"
              >
                <h4 className="text-xl font-bold text-primary ">
                  {item.title}
                </h4>
                <p className="text-white text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center">
          <img
            src="https://www.easterncollege.ca/uploads/2016/06/physiotherapy-assistant-helping-senior-male.jpg"
            className="rounded-xl shadow"
            alt="Physiotherapy"
          />

          <div className="text-left">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Start Your Healing Journey Today
            </h3>
            <p className="text-gray-600 mb-6">
              We are committed to giving you the best physiotherapy and wellness
              experience.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:opacity-90"
            >
              Contact Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
