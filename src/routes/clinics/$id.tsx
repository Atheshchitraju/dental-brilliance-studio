import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/clinics/$id")({
  component: ClinicPage,
});

const clinics = [
  {
    id: "jas-dental",

    name: "Jas Dental",

    logo: "/assets/Basha Sir.png",

    banner: "/assets/logo.jpeg",

    description:
      "Jas Dental is a premium digital dentistry clinic focused on aesthetic smile design, precision restorations, and modern dental workflows. The clinic combines advanced technology with patient-centered care to deliver high-quality dental solutions.",

    location: "Hyderabad, Bengaluru, Chennai",

    phone: "+91 9876543210",

    email: "contact@jasdental.com",

    services: [
      "Smile Designing",
      "Dental Implants",
      "Root Canal Treatment",
      "Cosmetic Dentistry",
      "Teeth Whitening",
      "Digital Smile Analysis",
    ],

    gallery: ["/assets/designer.png", "/assets/designer-2.jpg", "/assets/designer-3.jpg"],

    doctors: [
      {
        name: "Dr. Basha",
        role: "General & Family  Dental Specialist",
        image: "/assets/Basha Sir.png",
        experience: "9+ Years Experience",
      },
      {
        name: "Dr. Dikshya Bose",

        role: "General & Family Dental Specialist",

        image: "/assets/Dikshya Bose.png",

        experience: "5+ Years Experience",
      },
    ],
  },
  {
    id: "excel-dental",

    name: "Excel Dental",

    logo: "/assets/Dr Rizwana Tarannum.png",

    banner: "/assets/excel-banner.webp",

    description:
      "Excel Dental is a modern cosmetic and restorative dental clinic delivering advanced smile transformations using precision digital workflows and premium patient care.",

    location: "Bangalore, India",

    phone: "+91 9123456780",

    email: "hello@exceldental.com",

    services: [
      "Smile Designing",
      "Aligners",
      "Dental Veneers",
      "Laser Dentistry",
      "Crowns & Bridges",
      "Dental Implants",
    ],

    gallery: ["/assets/excel-1.jpg", "/assets/excel-2.jpg", "/assets/excel-3.jpg"],
    doctors: [
      {
        name: "Dr. Rizwana Tarannum",
        role: "Cosmetic Dental Specialist",
        image: "/assets/Dr Rizwana Tarannum.png",
        experience: "12+ Years Experience",
      },
    ],
  },
  {
    id: "girish-dental",

    name: "Girish Dental Clinic",

    logo: "/assets/girish.png",

    banner: "/assets/girish-banner1.png",

    description:
      "Girish Dental Clinic specializes in advanced restorative and cosmetic dentistry with a strong focus on precision digital workflows, smile enhancement, and patient comfort. The clinic combines modern technology with highly personalized treatment planning.",

    location: "Chennai, India",

    phone: "+91 9012345678",

    email: "contact@girishdental.com",

    services: [
      "Digital Smile Design",
      "Dental Veneers",
      "Full Mouth Rehabilitation",
      "Root Canal Treatment",
      "Dental Crowns",
      "Teeth Whitening",
    ],

    gallery: ["/assets/girish-1.jpg", "/assets/girish-2.jpg", "/assets/girish-3.jpg"],
    doctors: [
      {
        name: "Dr. Girish",
        role: "Restorative & Cosmetic Dental Specialist",
        image: "/assets/girish.png",
        experience: "15+ Years Experience",
      },
    ],
  },

  {
    id: "tooth-align-clinic",

    name: "Tooth Align Clinic",

    logo: "/assets/Haritha.png",

    banner: "/assets/tooth-align-banner.png",

    description:
      "Tooth Align Clinic is a modern orthodontic and cosmetic dental center specializing in clear aligners, smile correction, and digital orthodontic workflows. The clinic focuses on precision treatment planning and patient comfort using advanced dental technologies.",

    location: "Hyderabad, India",

    phone: "+91 9345678901",

    email: "contact@toothalignclinic.com",

    services: [
      "Clear Aligners",
      "Smile Makeover",
      "Invisible Braces",
      "Orthodontic Treatment",
      "Teeth Whitening",
      "Digital Smile Planning",
    ],

    gallery: [
      "/assets/tooth-align-1.jpg",
      "/assets/tooth-align-2.jpg",
      "/assets/tooth-align-3.jpg",
    ],

    doctors: [
      {
        name: "Dr. Haritha",
        role: "Orthodontist & Smile Designer",
        image: "/assets/Haritha.png",
        experience: "14 Years Experience",
      },
    ],
  },
  {
    id: "house-of-teeth",

    name: "House of Teeth",

    logo: "/assets/chandini.png",

    banner: "/assets/house-of-teeth-banner.png",

    description:
      "House of Teeth is a premium cosmetic and restorative dental clinic focused on advanced smile transformations, digital workflows, and personalized patient care. The clinic combines cutting-edge dental technology with aesthetic excellence to deliver natural and confident smiles.",

    location: "Bangalore, India",

    phone: "+91 9876501234",

    email: "hello@houseofteeth.com",

    services: [
      "Smile Makeovers",
      "Dental Veneers",
      "Teeth Whitening",
      "Dental Implants",
      "Cosmetic Dentistry",
      "Digital Smile Design",
    ],

    gallery: ["/assets/house-1.jpg", "/assets/house-2.jpg", "/assets/house-3.jpg"],

    doctors: [
      {
        name: "Dr. Chandini",
        role: "Cosmetic Dental Specialist",
        image: "/assets/chandini.png",
        experience: "11+ Years Experience",
      },
    ],
  },
  {
    id: "makers-of-smile",

    name: "Makers of Smile",

    logo: "/assets/Roli Singh.png",

    banner: "/assets/makers-banner.png",

    description:
      "Makers of Smile is a contemporary dental clinic specializing in smile aesthetics, restorative dentistry, and advanced digital dental workflows. The clinic is dedicated to creating confident smiles through precision-driven treatment planning and modern dental technology.",

    location: "Hyderabad, India",

    phone: "+91 9988776655",

    email: "contact@makersofsmile.com",

    services: [
      "Smile Designing",
      "Cosmetic Dentistry",
      "Dental Veneers",
      "Invisible Aligners",
      "Teeth Whitening",
      "Full Mouth Rehabilitation",
    ],

    gallery: ["/assets/makers-1.jpg", "/assets/makers-2.jpg", "/assets/makers-3.jpg"],

    doctors: [
      {
        name: "Dr. Roli Singh",
        role: "Smile Design Specialist",
        image: "/assets/Roli Singh.png",
        experience: "9+ Years Experience",
      },
    ],
  },
];

function ClinicPage() {
  const { id } = useParams({ strict: false });

  const clinic = clinics.find((c) => c.id === id);

  if (!clinic) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Clinic Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={clinic.banner}
          alt={clinic.name}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white">{clinic.name}</h1>

          <p className="text-white/80 mt-6 max-w-2xl text-lg">
            Advanced Digital Dentistry & Smile Design
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src={clinic.logo}
              alt={clinic.name}
              className="rounded-[32px] shadow-2xl w-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="uppercase tracking-[5px] text-purple-600 font-semibold mb-4">
              About The Clinic
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Precision Dentistry With Modern Technology
            </h2>

            <p className="text-gray-600 leading-8 text-lg">{clinic.description}</p>

            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              <div className="bg-purple-50 rounded-2xl p-5 border">
                <p className="text-sm text-gray-500 mb-2">Location</p>

                <p className="font-semibold text-gray-900">{clinic.location}</p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-5 border">
                <p className="text-sm text-gray-500 mb-2">Phone</p>

                <p className="font-semibold text-gray-900">{clinic.phone}</p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-5 border">
                <p className="text-sm text-gray-500 mb-2">Email</p>

                <p className="font-semibold text-gray-900 break-all">{clinic.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <section className="mt-28">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[5px] text-purple-600 font-semibold mb-4">
              Our Services
            </p>

            <h2 className="text-4xl font-bold">Specialized Dental Treatments</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinic.services.map((service) => (
              <div
                key={service}
                className="group bg-white border rounded-[28px] p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl mb-6">
                  🦷
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{service}</h3>

                <p className="text-gray-600 leading-7">
                  Premium quality treatment using modern digital dentistry workflows and
                  precision-crafted restorations.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="mt-28">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[5px] text-purple-600 font-semibold mb-4">
              Clinic Gallery
            </p>

            <h2 className="text-4xl font-bold">Inside {clinic.name}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clinic.gallery.map((img) => (
              <div key={img} className="overflow-hidden rounded-[32px]">
                <img
                  src={img}
                  alt=""
                  className="w-full h-[320px] object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </section>
        {/* DOCTORS SECTION */}
        {clinic.doctors && (
          <section className="mt-28">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[5px] text-purple-600 font-semibold mb-4">
                Meet Our Doctors
              </p>

              <h2 className="text-5xl font-bold">Specialists Behind The Smiles</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {clinic.doctors.map((doctor) => (
                <div
                  key={doctor.name}
                  className="bg-white border rounded-[28px] overflow-hidden shadow-xl max-w-[420px] mx-auto"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full aspect-[3/3] object-cover object-top hover:scale-110 transition duration-500"
                  />

                  <div className="p-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{doctor.name}</h3>

                    <p className="text-purple-600 text-lg mb-3">{doctor.role}</p>

                    <p className="text-gray-500 mb-6">{doctor.experience}</p>

                    <p className="text-gray-600 leading-8">
                      Dedicated to advanced digital dentistry, smile designing, and patient-focused
                      treatment planning using modern dental technologies.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-32">
          <div className="bg-gradient-to-r from-purple-700 to-fuchsia-600 rounded-[40px] p-14 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Digital Dental Designing?</h2>

            <p className="text-white/80 max-w-2xl mx-auto leading-8 mb-10">
              Collaborate with 3D Digital Dental Designers Lab for premium restorations, smile
              design workflows, and precision-crafted dental solutions.
            </p>

            <button className="bg-white text-purple-700 px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
              Contact Jas Dental
            </button>
          </div>
        </section>
      </section>
    </div>
  );
}
