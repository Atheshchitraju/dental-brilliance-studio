import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal, SectionHeader } from "@/components/Section";
import p1 from "@/assets/Monolithic Zirconia Crown.jpg";
import p2 from "@/assets/Full Arch Veneer Restoration.jpg";
import p3 from "@/assets/eq-cad1.jpg";
import p4 from "@/assets/Lithium Disilicate Inlay.jpg";
import p5 from "@/assets/Implants.jpg";
import p6 from "@/assets/SurgicalGuideDesign1.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — 3D Digital Dental Designers Lab" },
      { name: "description", content: "Selected case studies, before/after restorations and digital smile designs by 3D Digital Dental Designers Lab." },
      { property: "og:title", content: "Portfolio — 3D Digital Dental Designers Lab" },
      { property: "og:description", content: "Selected case studies, before/after restorations and digital smile designs by 3D Digital Dental Designers Lab." },
      { property: "og:image", content: p2 },
    ],
  }),
  component: PortfolioPage,
});

const cases = [
  { img: p1, title: "Monolithic Zirconia Crown", tag: "Crown & Bridge" },
  { img: p2, title: "Full Arch Veneer Restoration", tag: "Smile Design" },
  { img: p3, title: "Digital Workflow — CAD Preview", tag: "CAD/CAM" },
  { img: p4, title: "Lithium Disilicate Inlay", tag: "Aesthetic" },
  { img: p5, title: "Implant-Supported Bridge", tag: "Implants" },
  { img: p6, title: "Surgical Guide Design", tag: "Digital" },
];

function PortfolioPage() {
  return (
    <PageShell>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Selected work"
            title="A portfolio shaped by precision"
            subtitle="A glimpse of the smiles, restorations and digital cases delivered to our partner clinics."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <figure className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-glass transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">{c.tag}</div>
                    <div className="font-semibold mt-1">{c.title}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}