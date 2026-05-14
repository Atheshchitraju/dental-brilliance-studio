import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { PageShell } from "@/components/PageShell";
import { Reveal, SectionHeader } from "@/components/Section";

import logo from "@/assets/logo1.webp";
import logo1 from "@/assets/Excel.webp";
import logo2 from "@/assets/girish.webp";
import logo3 from "@/assets/House of teeth.webp";
import logo4 from "@/assets/makers-of-smile.webp";
import logo5 from "@/assets/tooth-align.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "3D Digital Dental Designers Lab — Precision Dental Solutions",
      },
      {
        name: "description",
        content:
          "Premium dental laboratory crafting crowns, implants, veneers and digital smile designs with CAD/CAM precision.",
      },
      {
        property: "og:title",
        content: "3D Digital Dental Designers Lab — Precision Dental Solutions",
      },
      {
        property: "og:description",
        content:
          "Premium dental laboratory crafting crowns, implants, veneers and digital smile designs with CAD/CAM precision.",
      },
    ],
  }),
  component: Index,
});

const clients = [
  {
    id: "jas-dental",
    name: "Jas Dental",
    logo: logo,
    banner: "/assets/logo.webp",
    email: "jasasthetic@gmail.com",
  },
  {
    id: "excel-dental",
    name: "Excel Dental",
    logo: logo1,
    banner: "/assets/excel-banner.webp",
  },
  {
    id: "girish-dental",
    name: "Girish Dental Clinic",
    logo: logo2,
    banner: "/assets/girish-banner1.webp",
  },
  {
    id: "house-of-teeth",
    name: "House of Teeth",
    logo: logo3,
    banner: "/assets/house-of-teeth-banner.webp",
  },
  {
    id: "makers-of-smile",
    name: "Makers of Smile",
    logo: logo4,
    banner: "/assets/makers-banner.webp",
  },
  {
    id: "tooth-align-clinic",
    name: "Tooth Align Clinic",
    logo: logo5,
    banner: "/assets/tooth-align-banner.webp",
  },
];

const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

const stats = [
  { v: "15+", l: "Years of Craft" },
  { v: "12K", l: "Restorations Delivered" },
  { v: "320", l: "Partner Clinics" },
  { v: "99.4%", l: "Fit Accuracy" },
];

function Index() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 -z-10 opacity-50">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-lg" />
          <div className="absolute top-40 right-0 h-[22rem] w-[22rem] rounded-full bg-accent/20 blur-lg" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Digital Dental Atelier
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Precision <span className="gradient-text">Dental Lab</span> Solutions
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              We craft restorations the way nature intended — with sub-micron accuracy, premium
              ceramics, and a digital workflow trusted by leading clinics worldwide.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                preload="intent"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-transform duration-200 hover:scale-[1.02]"
              >
                VIEW PRODUCTS →
              </Link>

              <Link
                to="/portfolio"
                preload="intent"
                className="inline-flex items-center rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-white"
              >
                View Our Work
              </Link>

              <a
                href="https://wa.me/918217216397?text=Hi!%20I%20need%20dental%20lab%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-white"
              >
                Whats App Us
              </a>
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <Reveal key={s.l} delay={i * 0.06}>
                  <div>
                    <div className="text-3xl font-bold gradient-text">{s.v}</div>

                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                      {s.l}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/20 bg-white/10 backdrop-blur-sm  max-w-sm  w-[680px] h-[580px]">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/dental-hero.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Bottom Card */}
            {/* <div className="absolute -bottom-6 -left-4 glass rounded-2xl p-4 hidden md:block shadow-md">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Precision Care
              </div>

              <div className="text-2xl font-bold">Digital Craft</div>
            </div> */}

            {/* Top Card */}
            {/* <div className="absolute -top-6 -right-4 glass rounded-2xl p-4 hidden md:block shadow-md">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Premium</div>

              <div className="text-2xl font-bold">Dental Lab</div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* CLIENT STRIP */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
              Trusted by Leading Clinics
            </p>
          </Reveal>

          <div className="relative overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {clients.map((c, i) => (
                <Link
                  key={i}
                  to={`/clinics/${c.id}`}
                  preload="intent"
                  onMouseEnter={() => preloadImage(c.banner)}
                  className="flex flex-col items-center justify-center h-[110px] bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-14 object-contain mb-2 transition-transform duration-300 hover:scale-105"
                  />

                  <p className="text-xs text-center text-gray-600 px-2">{c.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Why 3D Digital Dental Designers"
            title="Where craft meets digital precision"
            subtitle="A fully integrated digital workflow — from intraoral scan to final polish — operated by master ceramists and 3D dental designers."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Sub-micron Accuracy",
                d: "5-axis milling and validated workflows ensure marginal fits within 20μm.",
              },
              {
                t: "Premium Materials",
                d: "Lithium disilicate, monolithic zirconia, PMMA — only the best ceramics in our atelier.",
              },
              {
                t: "Designer-led",
                d: "Every case is touched by a senior 3D dental designer, not just a technician.",
              },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 0.08}>
                <div className="glass rounded-3xl p-8 h-full shadow-sm transition-transform duration-200 hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-primary mb-5" />

                  <h3 className="text-xl font-semibold">{f.t}</h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-[2.5rem] bg-gradient-primary p-12 md:p-16 text-center relative overflow-hidden shadow-xl">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: "radial-gradient(circle at 30% 20%, white, transparent 50%)",
                }}
              />

              <h2 className="relative text-3xl md:text-5xl font-bold text-primary-foreground">
                Partner with a lab that elevates your practice.
              </h2>

              <p className="relative mt-4 text-primary-foreground/80 max-w-xl mx-auto">
                Send us your first case — discover the 3D Digital Dental Designers difference.
              </p>

              <Link
                to="/contact"
                preload="intent"
                className="relative mt-8 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-transform duration-200 hover:scale-[1.03]"
              >
                Start a conversation →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
