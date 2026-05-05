import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Reveal, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — 3D Digital Dental Designers Lab" },
      { name: "description", content: "Get in touch with 3D Digital Dental Designers Lab — request a quote, schedule a pickup, or visit our atelier." },
      { property: "og:title", content: "Contact — 3D Digital Dental Designers Lab" },
      { property: "og:description", content: "Get in touch with 3D Digital Dental Designers Lab — request a quote, schedule a pickup, or visit our atelier." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Get in touch"
            title="Let's craft something exceptional"
            subtitle="Tell us about your case or your clinic — a senior designer will respond within one business day."
          />

          <div className="grid lg:grid-cols-5 gap-8">
            <Reveal className="lg:col-span-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="glass rounded-3xl p-8 shadow-soft space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required maxLength={100} />
                  <Field label="Clinic" name="clinic" maxLength={120} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required maxLength={255} />
                  <Field label="Phone" name="phone" type="tel" maxLength={40} />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-foreground/70 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    maxLength={1000}
                    rows={5}
                    className="w-full rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    placeholder="Tell us about your case…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glass hover:shadow-glow transition-all"
                >
                  {sent ? "Thanks — we'll be in touch ✓" : "Send message →"}
                </button>
              </form>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2 space-y-4">
              <InfoCard label="Email" value="dentaldesigners.3d@gmail.com" />
              <InfoCard label="Phone" value="+91 821721 6397" />
              <InfoCard label="Address" value="NO 107, First Floor,4th Cross,36th Main Road, BHOOHBCL, KAS Officers Colony, BTM Layout 2nd Stage, Bengaluru, Karnataka 560068" />
              <div className="glass rounded-3xl overflow-hidden shadow-soft">
                <iframe
                  title="3D Digital Dental Designers Lab Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.2204279884266!2d77.6188936!3d12.9153234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4e9636bc3bb767b5%3A0x3d408c490f496273!2sDigital%20Dental%20Designers!5e0!3m2!1sen!2sin!4v1776946588917!5m2!1sen!2sin"
                  width="100%"
                  height="240"
                  loading="lazy"
                  className="border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required, maxLength }: { label: string; name: string; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-foreground/70 mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        className="w-full rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
      />
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-5 shadow-soft">
      <div className="text-xs uppercase tracking-[0.18em] font-semibold text-primary">{label}</div>
      <div className="mt-1 text-foreground">{value}</div>
    </div>
  );
}