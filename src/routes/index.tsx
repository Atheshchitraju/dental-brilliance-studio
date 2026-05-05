import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { PageShell } from "@/components/PageShell";
import { Reveal, SectionHeader } from "@/components/Section";

const ToothScene = lazy(() =>
  import("@/components/ToothScene").then((m) => ({ default: m.ToothScene })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3D Digital Dental Designers Lab — Precision Dental Solutions" },
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
    name: "Jas Dental",
    logo: "src/assets/3D.jpg",
  },
  {
    name: "Excel Dental",
    logo: "src/assets/3D.jpg",
  },
  {
    name: "Girish Dental Clinic",
    logo: "src/assets/3D.jpg",
  },
  {
    name: "House of Teeth",
    logo: "src/assets/3D.jpg",
  },
  {
    name: "Makers of Smile",
    logo: "src/assets/3D.jpg",
  },
  {
    name: "Tooth Align Clinic",
    logo: "src/assets/3D.jpg",
  },
];

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
        <div className="absolute inset-0 -z-10 opacity-60">
          <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Digital Dental
              Atelier
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              Precision <span className="gradient-text">Dental Lab</span> Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              We craft restorations the way nature intended — with sub-micron accuracy, premium
              ceramics, and a digital workflow trusted by leading clinics worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glass"
              >
                VIEW PRODUCTS →
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-white transition-all"
              >
                View Our Work
              </Link>

              <a
                href="https://wa.me/918217216397?text=Hi!%20I%20need%20dental%20lab%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-white transition-all"
              >
                Whats App Us
              </a>
            </motion.div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <Reveal key={s.l} delay={i * 0.08}>
                  <div className="text-3xl font-bold gradient-text">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] md:h-[560px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-[2.5rem] glass shadow-glass overflow-hidden">
              <Suspense
                fallback={<div className="h-full w-full bg-gradient-silver animate-pulse" />}
              >
                <ToothScene />
              </Suspense>
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-soft hidden md:block">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Turnaround
              </div>
              <div className="text-2xl font-bold">48–72h</div>
            </div>
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-soft hidden md:block">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                ISO 13485
              </div>
              <div className="text-2xl font-bold">Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS STRIP */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
              Trusted by Leading Clinics
            </p>
          </Reveal>
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll whitespace-nowrap items-center">
              {[...clients, ...clients].map((c, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center min-w-[140px] h-[100px] bg-white/70 backdrop-blur-md rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-10 object-contain mb-2 grayscale hover:grayscale-0 transition"
                  />
                  <p className="text-xs text-center text-gray-600 px-2 truncate">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US TEASER */}
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
              <Reveal key={f.t} delay={i * 0.1}>
                <div className="glass rounded-3xl p-8 h-full shadow-soft hover:shadow-glass hover:-translate-y-1 transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-primary mb-5 shadow-glow" />
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
            <div className="rounded-[2.5rem] bg-gradient-primary p-12 md:p-16 text-center shadow-glow relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }}
              />
              <h2 className="relative text-3xl md:text-5xl font-bold text-primary-foreground">
                Partner with a lab that elevates your practice.
              </h2>
              <p className="relative mt-4 text-primary-foreground/80 max-w-xl mx-auto">
                Send us your first case — discover the 3D Digital Dental Designers difference.
              </p>
              <Link
                to="/contact"
                className="relative mt-8 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary hover:scale-105 transition-transform"
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
