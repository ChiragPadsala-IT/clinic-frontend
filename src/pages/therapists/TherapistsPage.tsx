const doctors = [
  {
    name: "Dr. Pallavi Narendra Patel",
    title: "Founder, Nirlep Multispeciality Physiotherapy & Garbhasanskar",
    image: "/images/dr-pallavi.jpg",
  },
  {
    name: "Dr. Happy Piyush Vasani",
    title:
      "HOD (Orthopedic Rehab), Nirlep Multispeciality Physiotherapy & Garbhasanskar",
    image: "/images/dr-happy.jpg",
  },
  {
    name: "Dr. Rinkal Lathiya",
    title:
      "HOD (Pediatric Rehab), Nirlep Multispeciality Physiotherapy & Garbhasanskar",
    image: "/images/dr-rinkal.jpg",
  },
  {
    name: "Dr. Parul Padsala Pansheriya",
    title: "Co-Founder, Nirlep Multispeciality Physiotherapy & Garbhasanskar",
    image: "/images/dr-parul.jpg",
  },
  {
    name: "Zin Saloni Tulsibhai Sakariya",
    title: "Founder of Fit with Salo",
    image: "/images/dr-saloni.jpg",
  },
];

const TherapistsPage = () => {
  return (
    <div>
      <section className="w-full bg-primary/10 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Doctors</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Meet the experts who care for you at Nirlep Multispeciality
            Physiotherapy & Garbhasanskar
          </p>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Doctor Image */}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />

                {/* Doctor Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">{doctor.title}</p>
                  {/* <button className="mt-4 w-full bg-primary text-white py-2 rounded-full hover:bg-primary/90 transition">
                    View Profile
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TherapistsPage;
