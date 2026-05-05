import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — 3D Digital Dental Designers Lab" },
      { name: "description", content: "Crown & bridge, implants, smile design, orthodontic appliances and full digital CAD/CAM dentistry." },
      { property: "og:title", content: "Services — 3D Digital Dental Designers Lab" },
      { property: "og:description", content: "Crown & bridge, implants, smile design, orthodontic appliances and full digital CAD/CAM dentistry." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Crown & Bridge",
    desc: "Hand-layered porcelain and monolithic zirconia crowns with sub-20μm marginal precision.",
    icon: "M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z",
  },
  {
    title: "Dental Implants",
    desc: "Custom abutments and screw-retained restorations on every major implant platform.",
    icon: "M12 3v18M5 8h14M7 14h10",
  },
  {
    title: "Smile Design",
    desc: "Digital smile design with mock-ups, ceramic veneers, and full aesthetic rehabilitation.",
    icon: "M4 12c0 4 4 7 8 7s8-3 8-7M4 12c0-4 4-7 8-7s8 3 8 7",
  },
  {
    title: "Orthodontic Appliances",
    desc: "Clear aligners, retainers, and custom orthodontic devices designed in-house.",
    icon: "M3 12h18M6 8h12M6 16h12",
  },
  {
    title: "Digital Dentistry (CAD/CAM)",
    desc: "Full digital workflow — intraoral scan to milled restoration in under 72 hours.",
    icon: "M4 4h16v12H4zM8 20h8M12 16v4",
  },
  {
    title: "Full Mouth Rehab",
    desc: "Complex multidisciplinary cases, planned digitally and delivered with confidence.",
    icon: "M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6z",
  },
];

const categories = [
  {
    title: "Zirconia",
    desc: "High-strength ceramic restorations with exceptional aesthetics and biocompatibility.",
    icon: "M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z",
    items: [
      "Zirconia Classic",
      "Zirconia Monolithic Classic",
      "Zirconia Premium",
      "Zirconia Monolithic Premium",
      "Zirconia Premium Multilayered",
      "Zirconia Monolithic Multilayered",
    ],
  },
  {
    title: "Implant Prosthetics",
    desc: "Cement and screw-retained solutions on every major implant platform.",
    icon: "M12 3v18M5 8h14M7 14h10",
    items: [
      "Cement Retained Zirconia Classic",
      "Cement Retained Zirconia Premium",
      "Cement Retained DMLS Classic",
      "Cement Retained DMLS Premium",
      "Cement Retained Bar with Zirconia",
      "Cement Retained Bar with Composite",
      "Screw Retained DMLS Crown & Bridge",
      "Screw Retained Zirconia Crown & Bridge",
    ],
  },
  {
    title: "DMLS (CAD/CAM)",
    desc: "Direct Metal Laser Sintered frameworks engineered for precision and durability.",
    icon: "M4 4h16v12H4zM8 20h8M12 16v4",
    items: [
      "DMLS Crown & Bridge",
      "DMLS SLM Crown",
      "DMLS Full Metal",
      "DMLS Inlay/Onlay",
      "With Die Preparation Extra",
    ],
  },
  {
    title: "E-Max CAD",
    desc: "Lithium disilicate restorations celebrated for translucency and lifelike beauty.",
    icon: "M4 12c0 4 4 7 8 7s8-3 8-7M4 12c0-4 4-7 8-7s8 3 8 7",
    items: [
      "E-Max CAD",
      "E-Max Veneer CAD",
      "E-Max Inlay/Onlay",
      "E-Max Prime",
      "E-Max Zirconia Esthetic",
    ],
  },
  {
    title: "Precision Attachments",
    desc: "Discreet, retentive connectors for removable and combination prosthetics.",
    icon: "M3 12h18M6 8h12M6 16h12",
    items: ["Single Attachments", "Double Attachments", "Bilateral Attachments"],
  },
  {
    title: "Others",
    desc: "Specialty appliances crafted with the same precision as our flagship work.",
    icon: "M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6z",
    items: [
      "Night Guard",
      "Bleaching Tray",
      "Orthodontic Retention Plate",
      "Temporary Crown",
    ],
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="What we craft"
            title="Restorations engineered for the modern clinic"
            subtitle="Every service is delivered with a digital workflow, premium materials, and the touch of master ceramists."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="group h-full glass rounded-3xl p-8 shadow-soft hover:shadow-glass hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                  <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-6">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more →
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Full catalogue"
            title="Service categories & sub-services"
            subtitle="Explore every restoration we deliver — organised by category, engineered for precision."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="group h-full glass rounded-3xl p-8 shadow-soft hover:shadow-glass hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col">
                  <div className="absolute -top-20 -left-16 h-44 w-44 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-500" />
                  <div className="flex items-start gap-4 mb-5">
                    <div className="h-12 w-12 shrink-0 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={c.icon} />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">Category {String(i + 1).padStart(2, "0")}</div>
                      <h3 className="text-xl font-semibold leading-tight mt-1">{c.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.desc}</p>
                  <ul className="space-y-2.5 mt-auto">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-primary shadow-glow" />
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}