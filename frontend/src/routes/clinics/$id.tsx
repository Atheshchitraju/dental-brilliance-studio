import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/clinics/$id")({
  component: ClinicPage,
});

const clinics = [
  {
    id: "jas-dental",
    name: "Jas Dental",

    logo: "/assets/doctors/Basha Sir.webp",
    banner: "/assets/logo.webp",

    description:
      "Jas Dental is a premium digital dentistry clinic focused on aesthetic smile design, precision restorations, and modern dental workflows. The clinic combines advanced technology with patient-centered care to deliver high-quality dental solutions.",

    location: "HSR Layout, Bengaluru",
    phone: "+91 7569125028",
    email: "jasasthetic@gmail.com",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8047997650115!2d77.64372107983766!3d12.920264054877379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14815a26548b%3A0x9c84d0d7b3d64c71!2sJas%20Dental%20HSR%20LAYOUT!5e0!3m2!1sen!2sin!4v1778756659686!5m2!1sen!2sin",

    services: [
      "Smile Designing",
      "Dental Implants",
      "Root Canal Treatment",
      "Cosmetic Dentistry",
      "Teeth Whitening",
      "Digital Smile Analysis",
    ],

    gallery: [
      "/assets/gallery/jasdental1.webp",
      "/assets/gallery/jasdental2.webp",
      "/assets/gallery/jasdental3.webp",
      "/assets/gallery/jasdental4.webp",
      "/assets/gallery/jasdental5.webp",
    ],

    doctors: [
      {
        name: "Dr. Basha",
        role: "General & Family Dental Specialist",
        image: "/assets/doctors/Basha Sir.webp",
        experience: "9+ Years Experience",

        phone: "",
        email: "",

        specialization: "General & Family Dentistry",

        clinicName: "JAS DENTAL",

        address: "HSR Layout, Bengaluru",

        website: "",
      },

      {
        name: "Dr Dikshya Bose",
        role: "General and Family Dentist",
        image: "/assets/doctors/Dikshya Bose.webp",
        experience: "General Dental Specialist",

        phone: "",
        email: "",

        specialization: "General & Family Dentistry",

        clinicName: "JAS DENTAL",

        address: "BTM  Layout, Bengaluru",

        website: "",
      },
    ],
  },

  {
    id: "excel-dental",
    name: "Excel Dental",

    logo: "/assets/doctors/Dr Rizwana Tarannum.webp",
    banner: "/assets/banners/excel-banner.webp",

    description:
      "Excel Dental is a modern cosmetic and restorative dental clinic delivering advanced smile transformations using precision digital workflows and premium patient care.",

    location: "JP Nagar 7th Phase, Bengaluru",
    phone: "+91 8792801460",
    email: "riz.zinu7@gmail.com",

    services: [
      "Smile Designing",
      "Aligners",
      "Dental Veneers",
      "Laser Dentistry",
      "Crowns & Bridges",
      "Dental Implants",
    ],

    gallery: [],

    doctors: [
      {
        name: "Dr Rizwana Tarannum",
        role: "B.D.S (Certified Cosmetic Dentist)",
        image: "/assets/doctors/Dr Rizwana Tarannum.webp",
        experience: "Cosmetic Dental Specialist",

        phone: "8792801460",
        email: "riz.zinu7@gmail.com",

        specialization: "Zirconia Crown Specialist, Veneers Specialist, Smile Designing Specialist",

        clinicName: "Excel Dental",

        address: "JP Nagar 7th Phase, Bengaluru",

        website: "",
      },
    ],
  },

  {
    id: "girish-dental",
    name: "Girish Dental Clinic",

    logo: "/assets/doctors/girish.webp",
    banner: "/assets/banners/girish-banner1.webp",

    description:
      "Girish Dental Clinic specializes in advanced restorative and cosmetic dentistry with a strong focus on precision digital workflows, smile enhancement, and patient comfort.",

    location: "Wilson Garden, Bangalore",
    phone: "+91 9845988184",
    email: "enharishkumar@gmail.com",

    services: [
      "Digital Smile Design",
      "Dental Veneers",
      "Full Mouth Rehabilitation",
      "Root Canal Treatment",
      "Dental Crowns",
      "Teeth Whitening",
    ],

    gallery: [],

    doctors: [
      {
        name: "Dr E N Harish Kumar",
        role: "B.D.S.",
        image: "/assets/doctors/girish.webp",
        experience: "28+ Years Experience",

        phone: "9845988184",
        email: "enharishkumar@gmail.com",

        specialization: "Prosthodontics, Restorative Dentistry, Cosmetic Dentistry",

        clinicName: "Girish Dental Clinic",

        address:
          "#257/1, 13th Cross Wilson Garden, Next to Bharath Medical, Opp Naveen Nethralaya, Bangalore 560027",

        website: "",

        additionalInfo:
          "Senior Internship in Prosthodontics | Ex-Faculty K.G.F & BIDS Dental College | Year of Passing 1997 | Dental Council Registration No: 5007_A",
      },
    ],
  },

  {
    id: "tooth-align-clinic",
    name: "Tooth Align Clinic",

    logo: "/assets/doctors/Haritha.webp",
    banner: "/assets/banners/tooth-align-banner.webp",

    description:
      "Modern orthodontic and cosmetic dental center specializing in clear aligners and digital orthodontic workflows.",

    location: "HSR Layout, Bengaluru",
    phone: "+91 9398753235",
    email: "drharithatoothalign@gmail.com",

    services: [
      "Clear Aligners",
      "Smile Makeover",
      "Invisible Braces",
      "Orthodontic Treatment",
      "Teeth Whitening",
      "Digital Smile Planning",
    ],

    gallery: [],

    doctors: [
      {
        name: "Dr Haritha",
        role: "Dental Surgeon Dentist",
        image: "/assets/doctors/Haritha.webp",
        experience: "14 Years Experience",

        phone: "9398753235 / 7090450469",
        email: "drharithatoothalign@gmail.com",

        specialization: "Dental Surgery & Smile Design",

        clinicName: "Tooth Align Multi Speciality Dental Clinic and Implant Center",

        address:
          "5th, 15th Cross Rd, Opposite Sandwich Guru, 6th Sector, HSR Layout, Bengaluru, Karnataka 560102",

        website: "https://g.co/kgs/G9W1DJn",
      },
    ],
  },

  {
    id: "house-of-teeth",
    name: "House Of Teeth",

    logo: "/assets/doctors/chandini.webp",
    banner: "/assets/banners/house-of-teeth-banner.webp",

    description:
      "Premium cosmetic and restorative dental clinic focused on advanced smile transformations and personalized patient care.",

    location: "Bangalore, India",
    phone: "+91 8105189978",
    email: "houseofteeth888@gmail.com",

    services: [
      "Smile Makeovers",
      "Dental Veneers",
      "Teeth Whitening",
      "Dental Implants",
      "Cosmetic Dentistry",
      "Digital Smile Design",
    ],

    gallery: [],

    doctors: [
      {
        name: "Dr Chandani",
        role: "BDS, MDS",
        image: "/assets/doctors/chandini.webp",
        experience: "Senior Dental Specialist",

        phone: "8105189978",
        email: "houseofteeth888@gmail.com",

        specialization: "BDS, MDS ",

        clinicName: "House Of Teeth",

        address: "Bangalore, India",

        website: "",
      },
    ],
  },

  {
    id: "makers-of-smile",
    name: "Makers Of Smile",

    logo: "/assets/doctors/Roli Singh.webp",
    banner: "/assets/banners/makers-banner.webp",

    description:
      "Contemporary dental clinic specializing in smile aesthetics and advanced restorative dentistry.",

    location: "Akshayanagar, Bengaluru",
    phone: "+91 7349137242",
    email: "contact@makersofsmile.com",

    services: [
      "Smile Designing",
      "Cosmetic Dentistry",
      "Dental Veneers",
      "Invisible Aligners",
      "Teeth Whitening",
      "Full Mouth Rehabilitation",
    ],

    gallery: [],

    doctors: [
      {
        name: "Dr Roli Singh",
        role: "Implantologist & Dental Surgeon",
        image: "/assets/doctors/Roli Singh.webp",
        experience: "15 Years Experience",

        phone: "7349137242",
        email: "",

        specialization: "Implantology & Advanced Dental Surgery",

        clinicName: "Makers Of Smile Dental Clinic",

        address:
          "1st Floor, Begur Woods Layout, Plot#58, Devhuti Rockpile, Begur - Koppa Rd, Akshayanagar, Bengaluru, Karnataka 560076",

        website: "",
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
      <section className="relative h-[280px] sm:h-[380px] md:h-[500px] overflow-hidden">
        <img
          src={clinic.banner}
          alt={clinic.name}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            {clinic.name}
          </h1>

          <p className="text-white/80 mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-7">
            Advanced Digital Dentistry & Smile Design
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <img
              src={clinic.logo}
              alt={clinic.name}
              loading="eager"
              decoding="async"
              className="rounded-[32px] shadow-2xl w-full max-w-[520px] h-[620px] object-cover object-top bg-white mx-auto"
            />
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-purple-600 font-semibold mb-4 text-xs sm:text-sm">
              About The Clinic
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
              Precision Dentistry With Modern Technology
            </h2>

            <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg">
              {clinic.description}
            </p>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-10">
              <div className="bg-purple-50 rounded-2xl p-5 border">
                <p className="text-sm text-gray-500 mb-2">Location</p>

                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  {clinic.location}
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-5 border">
                <p className="text-sm text-gray-500 mb-2">Phone</p>

                <p className="font-semibold text-gray-900 text-sm sm:text-base">{clinic.phone}</p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-5 border">
                <p className="text-sm text-gray-500 mb-2">Email</p>

                <p className="font-semibold text-gray-900 break-all text-sm sm:text-base">
                  {clinic.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <section className="mt-20 sm:mt-28">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">Specialized Dental Treatments</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clinic.services.map((service) => (
              <div
                key={service}
                className="group bg-white border rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl mb-6">
                  🦷
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{service}</h3>

                <p className="text-gray-600 leading-7">
                  Premium quality treatment using modern digital workflows.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="mt-20 sm:mt-28">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold"> Inside {clinic.name}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {clinic.gallery.map((img) => (
              <div key={img} className="overflow-hidden rounded-[24px] sm:rounded-[32px]">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[240px] sm:h-[320px] object-cover hover:scale-105 transition-transform duration-300 will-change-transform"
                />
              </div>
            ))}
          </div>
        </section>

        {/* DOCTORS */}
        {clinic.doctors && (
          <section className="mt-20 sm:mt-28">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-5xl font-bold">Specialists Behind The Smiles</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
              {clinic.doctors.map((doctor) => (
                <div
                  key={doctor.name}
                  className="bg-white border rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-xl max-w-[500px] mx-auto w-full hover:-translate-y-2 transition-all duration-300"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/5] object-cover object-top hover:scale-105 transition-transform duration-300 will-change-transform"
                  />

                  <div className="p-5 sm:p-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      {doctor.name}
                    </h3>

                    <p className="text-purple-600 text-base sm:text-lg mb-3">{doctor.role}</p>

                    <div className="space-y-3 mt-4">
                      <p className="text-gray-500 font-medium">{doctor.experience}</p>

                      {doctor.specialization && (
                        <p className="text-gray-700 leading-7">{doctor.specialization}</p>
                      )}

                      {doctor.phone && <p className="text-sm text-gray-600">📞 {doctor.phone}</p>}

                      {doctor.email && (
                        <p className="text-sm text-gray-600 break-all">✉️ {doctor.email}</p>
                      )}

                      {doctor.clinicName && (
                        <p className="text-sm text-gray-600">🏥 {doctor.clinicName}</p>
                      )}

                      {doctor.address && (
                        <p className="text-sm text-gray-600 leading-6">📍 {doctor.address}</p>
                      )}

                      {doctor.additionalInfo && (
                        <p className="text-sm text-gray-500 leading-6 border-t pt-3">
                          {doctor.additionalInfo}
                        </p>
                      )}

                      {doctor.website && (
                        <a
                          href={doctor.website}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block mt-2 text-purple-600 font-semibold hover:underline"
                        >
                          Visit Clinic
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </section>
      {/* MAP SECTION */}
      {clinic.map && (
        <section className="mt-20 sm:mt-28">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">Visit Our Clinic</h2>

            <p className="text-gray-600 mt-4">Find us easily with Google Maps navigation.</p>
          </div>

          <div className="overflow-hidden rounded-[32px] shadow-2xl border border-gray-200">
            <iframe
              src={clinic.map}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </section>
      )}
    </div>
  );
}

export default ClinicPage;
