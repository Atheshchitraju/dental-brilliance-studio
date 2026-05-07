import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal, SectionHeader } from "@/components/Section";
import labImg from "@/assets/lab-equipment.webp";
import eqMilling from "@/assets/eq-milling.webp";
import eqScanner from "@/assets/eq-scanner.webp";
import eqPrinter from "@/assets/eq-printer.webp";
import eqFurnace from "@/assets/eq-furnace.webp";
import eqCad from "@/assets/eq-cad.webp";
import eqPorcelain from "@/assets/eq-porcelain.webp";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Equipment & Technology — 3D Digital Dental Designers Lab" },
      { name: "description", content: "Industry-leading CAD/CAM systems, intraoral scanners, 5-axis milling machines and 3D printers." },
      { property: "og:title", content: "Equipment & Technology — 3D Digital Dental Designers Lab" },
      { property: "og:description", content: "Industry-leading CAD/CAM systems, intraoral scanners, 5-axis milling machines and 3D printers." },
      { property: "og:image", content: labImg },
    ],
  }),
  component: EquipmentPage,
});

const equipment = [
  {
    name: "5-Axis Milling Stations",
    spec: "Roland DWX-52DCi",
    image: eqMilling,
    desc: "Continuous, simultaneous 5-axis milling for complex anatomies — undercuts, bridges and abutments — in a single uninterrupted run.",
    accuracy: "± 5 µm",
    materials: ["Zirconia", "PMMA", "Wax", "Titanium", "CoCr"],
    capabilities: [
      "15-station automatic disc changer for 24/7 production",
      "Wet & dry milling in one chamber",
      "Suitable for crowns, bridges, abutments and bars",
    ],
  },
  {
    name: "Intraoral Scanners",
    spec: "3Shape TRIOS 5 Wireless",
    image: eqScanner,
    desc: "AI-powered, full-color intraoral capture that streams directly into our design pipeline — no impressions, no remakes.",
    accuracy: "10.9 µm trueness",
    materials: ["Full-arch", "Quadrant", "Implant scan bodies"],
    capabilities: [
      "Wireless ScanAssist alignment",
      "Real-time shade measurement",
      "Direct integration with exocad / 3Shape DM",
    ],
  },
  {
    name: "3D Resin Printers",
    spec: "Formlabs Form 4B",
    image: eqPrinter,
    desc: "Low-Force Stereolithography (LFS) for ultra-precise surgical guides, dental models, splints and try-in prototypes.",
    accuracy: "25 µm layer height",
    materials: ["Surgical Guide Resin", "Model V3", "Dental LT Clear", "IBT Flex"],
    capabilities: [
      "Print speed up to 100 mm/h",
      "Validated biocompatible Class I & IIa resins",
      "Automated washing & curing workflow",
    ],
  },
  {
    name: "Sintering Furnaces",
    spec: "Ivoclar Programat S2",
    image: eqFurnace,
    desc: "High-speed sintering with intelligent infrared-controlled programs for stress-free, fully dense monolithic zirconia.",
    accuracy: "± 1 °C up to 1,600 °C",
    materials: ["Monolithic Zirconia", "Multilayer Zirconia", "e.max ZirCAD"],
    capabilities: [
      "Speed cycle: single unit in < 90 minutes",
      "Long-term sintering for high-translucency restorations",
      "Energy-efficient MoSi₂ heating elements",
    ],
  },
  {
    name: "CAD Design Workstations",
    spec: "exocad DentalCAD & 3Shape Design Studio",
    image: eqCad,
    desc: "Industry-leading CAD suites paired with calibrated dual-monitor workstations and full natural-tooth morphology libraries.",
    accuracy: "Sub-micron design tolerance",
    materials: ["Anatomy library", "Smile Composer", "TruSmile preview"],
    capabilities: [
      "Crown, bridge, implant, bar and full-arch design",
      "Articulator & virtual mock-up tools",
      "DICOM-driven implant planning integration",
    ],
  },
  {
    name: "Porcelain Atelier",
    spec: "Hand-layering Studio",
    image: eqPorcelain,
    desc: "Master ceramists hand-layer feldspathic porcelain over zirconia and lithium disilicate for life-like translucency and depth.",
    accuracy: "Custom shade match — Vita 3D-Master",
    materials: ["IPS e.max Ceram", "Creation ZI-CT", "Vita VM 9"],
    capabilities: [
      "Custom characterisation & internal staining",
      "Polarised photography for shade verification",
      "High-magnification finishing under stereo loupes",
    ],
  },
];

function EquipmentPage() {
  return (
    <PageShell>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Our atelier"
            title="Equipped for tomorrow's dentistry"
            subtitle="Validated, calibrated and maintained — our technology stack is the backbone of every 3D Digital Dental Designers restoration."
          />

          <Reveal>
            <div className="rounded-[2rem] overflow-hidden shadow-glass mb-16">
              <img
                src={labImg}
                alt="3D Digital Dental Designers dental lab interior with CAD/CAM and milling equipment"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.05}>
                <article className="glass rounded-3xl overflow-hidden shadow-soft hover:shadow-glass transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={e.image}
                      alt={`${e.name} — ${e.spec}`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full h-56 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-primary border border-border/50">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      Accuracy {e.accuracy}
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col">
                    <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">{e.spec}</div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{e.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>

                    <div className="mt-5">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-2">
                        Materials
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {e.materials.map((m) => (
                          <span
                            key={m}
                            className="text-xs px-2.5 py-1 rounded-full bg-secondary/60 border border-border/40 text-foreground/80"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-5 border-t border-border/40">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-3">
                        Capabilities
                      </div>
                      <ul className="space-y-2">
                        {e.capabilities.map((c) => (
                          <li key={c} className="flex items-start gap-2.5 text-sm text-foreground/85">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-primary/40 shrink-0" />
                            <span className="leading-relaxed">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { k: "< 10 µm", v: "Scan trueness" },
                { k: "± 5 µm", v: "Milling tolerance" },
                { k: "25 µm", v: "Print resolution" },
                { k: "100%", v: "Calibrated daily" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-2xl p-6 text-center shadow-soft">
                  <div className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}