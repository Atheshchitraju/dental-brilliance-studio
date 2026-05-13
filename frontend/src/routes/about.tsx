import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal, SectionHeader } from "@/components/Section";
import aboutShades from "@/assets/about-shades.webp";
import aboutCraft from "@/assets/about-craft.webp";
import aboutFinishing from "@/assets/about-finishing.webp";
import aboutTools from "@/assets/about-tools.webp";
import aboutDigital from "@/assets/about-digital.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — 3D Digital Dental Designers Lab" },
      {
        name: "description",
        content:
          "Founded in 2008, 3D Digital Dental Designers Lab unites master ceramists and digital designers under one roof.",
      },
      { property: "og:title", content: "About — 3D Digital Dental Designers Lab" },
      {
        property: "og:description",
        content:
          "Founded in 2008, 3D Digital Dental Designers Lab unites master ceramists and digital designers under one roof.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            eyebrow="Our story"
            title="A lab born from craft, sharpened by technology"
            subtitle="3D Digital Dental Designers was founded in 2008 by a master ceramist and a CAD engineer who believed dentistry deserved both."
          />

          {/* Intro: image + brief */}
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative rounded-3xl overflow-hidden shadow-glass aspect-[4/5] group">
                <img
                  src={aboutShades}
                  alt="Master ceramist matching VITA shade tab in the 3D Digital Dental Designers lab"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-80">
                    Shade matching
                  </div>
                  <div className="text-lg font-semibold">Down to a single VITA step</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                  Restorations that <span className="gradient-text">disappear into the smile</span>.
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  For over 15 years, 3D Digital Dental Designers has been a quiet workshop behind
                  some of the most natural-looking smiles in the region. We blend hand-layered
                  ceramics with a fully digital CAD/CAM workflow, so every crown, veneer, and
                  implant restoration we deliver fits the first time and looks like it grew there.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Each case is touched by a senior designer, scanned, milled, and finished under one
                  roof — shipped back to your clinic in 48 to 72 hours.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="glass rounded-3xl p-8 shadow-soft h-full">
                <h3 className="text-2xl font-semibold">Mission</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  To deliver dental restorations indistinguishable from nature — combining the
                  artistry of master ceramists with the precision of digital workflows.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-8 shadow-soft h-full">
                <h3 className="text-2xl font-semibold">Vision</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  To be the most trusted digital dental atelier — a partner clinics recommend by
                  name, and patients remember by the smile we helped create.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Inside the lab — image gallery */}
          <Reveal>
            <div className="mt-16">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                  Inside the atelier
                </div>
                <h3 className="text-3xl font-bold tracking-tight">Craft you can see</h3>
                <p className="mt-3 text-muted-foreground">
                  A glimpse into the daily rhythm of our lab — from analog finishing to fully
                  digital design.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { src: aboutCraft, label: "Hand finishing" },
                  { src: aboutFinishing, label: "Articulation check" },
                  { src: aboutDigital, label: "Digital workflow" },
                  { src: aboutTools, label: "Tools of the trade" },
                ].map((img, i) => (
                  <div
                    key={img.label}
                    className={`relative rounded-2xl overflow-hidden shadow-soft group ${
                      i === 0 ? "aspect-[3/4] md:row-span-2 md:aspect-auto" : "aspect-square"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={`3D Digital Dental Designers lab — ${img.label}`}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white text-xs font-semibold uppercase tracking-[0.15em]">
                      {img.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 glass rounded-3xl p-8 md:p-10 shadow-soft">
              <h3 className="text-2xl font-semibold mb-6">
                Why choose 3D Digital Dental Designers
              </h3>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "ISO 13485 certified manufacturing",
                  "48–72 hour standard turnaround",
                  "Senior designer on every case",
                  "Premium ceramics only — no compromises",
                  "Full digital workflow support",
                  "Lifetime craftsmanship guarantee",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs">
                      ✓
                    </span>
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
