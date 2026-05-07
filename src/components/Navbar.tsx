import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/3D.webp";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/equipment", label: "Equipment" },
  { to: "/shade", label: "Shade Matcher" },
  { to: "/designers", label: "Designers" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-11 w-11 rounded-xl overflow-hidden shadow-glow ring-1 ring-primary/30 flex items-center justify-center bg-[#6B1F8C]">
            <img src={logo} alt="3D Digital Dental Designers Lab logo" width={44} height={44} className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold tracking-tight">3D Digital Dental</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Designers Lab</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary rounded-md" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glass hover:shadow-glow transition-all"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md p-2 hover:bg-secondary"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass mx-4 mt-2 rounded-2xl p-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}