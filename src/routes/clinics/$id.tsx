import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/clinics/$id")({
  component: ClinicPage,
});

const clinics = [
  {
    id: "jas-dental",
    name: "Jas Dental",

    logo: "/assets/Basha Sir.webp",
    banner: "/assets/logo.webp",

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

    gallery: [
      "/assets/designer.webp",
      "/assets/designer-2.webp",
      "/assets/desginer2.webp",
    ],

    doctors: [
      {
        name: "Dr. Basha",
        role: "General & Family Dental Specialist",
        image: "/assets/Basha Sir.webp",
        experience: "9+ Years Experience",
      },
      {
        name: "Dr. Dikshya Bose",
        role: "General & Family Dental Specialist",
        image: "/assets/Dikshya Bose.webp",
        experience: "5+ Years Experience",
      },
    ],
  },

  {
    id: "excel-dental",
    name: "Excel Dental",

    logo: "/assets/Dr Rizwana Tarannum.webp",
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

    gallery: [
      "/assets/designer.webp",
      "/assets/designer-2.webp",
      "/assets/desginer2.webp",
    ],

    doctors: [
      {
        name: "Dr. Rizwana Tarannum",
        role: "Cosmetic Dental Specialist",
        image: "/assets/Dr Rizwana Tarannum.webp",
        experience: "12+ Years Experience",
      },
    ],
  },

  {
    id: "girish-dental",
    name: "Girish Dental Clinic",

    logo: "/assets/girish.webp",
    banner: "/assets/girish-banner1.webp",

    description:
      "Girish Dental Clinic specializes in advanced restorative and cosmetic dentistry with a strong focus on precision digital workflows, smile enhancement, and patient comfort.",

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

    gallery: [
      "/assets/designer.webp",
      "/assets/designer-2.webp",
      "/assets/desginer2.webp",
    ],

    doctors: [
      {
        name: "Dr. Girish",
        role: "Restorative & Cosmetic Dental Specialist",
        image: "/assets/girish.webp",
        experience: "15+ Years Experience",
      },
    ],
  },

  {
    id: "tooth-align-clinic",
    name: "Tooth Align Clinic",

    logo: "/assets/Haritha.webp",
    banner: "/assets/tooth-align-banner.webp",

    description:
      "Modern orthodontic and cosmetic dental center specializing in clear aligners and digital orthodontic workflows.",

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
      "/assets/designer.webp",
      "/assets/designer-2.webp",
      "/assets/desginer2.webp",
    ],

    doctors: [
      {
        name: "Dr. Haritha",
        role: "Orthodontist & Smile Designer",
        image: "/assets/Haritha.webp",
        experience: "14 Years Experience",
      },
    ],
  },

  {
    id: "house-of-teeth",
    name: "House of Teeth",

    logo: "/assets/chandini.webp",
    banner: "/assets/house-of-teeth-banner.webp",

    description:
      "Premium cosmetic and restorative dental clinic focused on advanced smile transformations and personalized patient care.",

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

    gallery: [
      "/assets/designer.webp",
      "/assets/designer-2.webp",
      "/assets/desginer2.webp",
    ],

    doctors: [
      {
        name: "Dr. Chandini",
        role: "Cosmetic Dental Specialist",
        image: "/assets/chandini.webp",
        experience: "11+ Years Experience",
      },
    ],
  },

  {
    id: "makers-of-smile",
    name: "Makers of Smile",

    logo: "/assets/Roli Singh.webp",
    banner: "/assets/makers-banner.webp",

    description:
      "Contemporary dental clinic specializing in smile aesthetics and advanced restorative dentistry.",

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

    gallery: [
      "/assets/designer.webp",
      "/assets/designer-2.webp",
      "/assets/desginer2.webp",
    ],

    doctors: [
      {
        name: "Dr. Roli Singh",
        role: "Smile Design Specialist",
        image: "/assets/Roli Singh.webp",
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
      {/* HERO */}
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
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            {clinic.name}
          </h1>

          <p className="text-white/80 mt-6 max-w-2xl text-lg">
            Advanced Digital Dentistry & Smile Design
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={clinic.logo}
              alt={clinic.name}
              loading="eager"
              decoding="async"
              className="rounded-[32px] shadow-2xl w-full object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[5px] text-purple-600 font-semibold mb-4">
              About The Clinic
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Precision Dentistry With Modern Technology
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              {clinic.description}
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              <div className="bg-purple-50 rounded-2xl p-5 border">
                <p className="text-sm text-gray-500 mb-2">Location</p>
                <p className="font-semibold text-gray-900">
                  {clinic.location}
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-5 border">
                <p className="text-sm text-gray-500 mb-2">Phone</p>
                <p className="font-semibold text-gray-900">
                  {clinic.phone}
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-5 border">
                <p className="text-sm text-gray-500 mb-2">Email</p>
                <p className="font-semibold text-gray-900 break-all">
                  {clinic.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <section className="mt-28">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Specialized Dental Treatments
            </h2>
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

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service}
                </h3>

                <p className="text-gray-600 leading-7">
                  Premium quality treatment using modern digital workflows.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="mt-28">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Inside {clinic.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clinic.gallery.map((img) => (
              <div key={img} className="overflow-hidden rounded-[32px]">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-300 will-change-transform"
                />
              </div>
            ))}
          </div>
        </section>

        {/* DOCTORS */}
        {clinic.doctors && (
          <section className="mt-28">
            <div className="text-center mb-14">
              <h2 className="text-5xl font-bold">
                Specialists Behind The Smiles
              </h2>
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
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[3/3] object-cover object-top hover:scale-105 transition-transform duration-300 will-change-transform"
                  />

                  <div className="p-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {doctor.name}
                    </h3>

                    <p className="text-purple-600 text-lg mb-3">
                      {doctor.role}
                    </p>

                    <p className="text-gray-500 mb-6">
                      {doctor.experience}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  );
}