import { Link } from "@tanstack/react-router";
import logo from "@/assets/3D.webp";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-gradient-silver">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl overflow-hidden ring-1 ring-primary/30 bg-[#6B1F8C] flex items-center justify-center">
              <img src={logo} alt="3D Digital Dental Designers Lab logo" width={1000} height={40} className="h-full w-full object-cover" />
            </div>
            <div className="font-display text-base font-bold leading-tight">3D Digital Dental<br/>Designers Lab</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Crafting precision dental restorations with digital artistry since 2020.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary">Crown & Bridge</Link></li>
            <li><Link to="/services" className="hover:text-primary">Implants</Link></li>
            <li><Link to="/services" className="hover:text-primary">Smile Design</Link></li>
            <li><Link to="/services" className="hover:text-primary">CAD/CAM</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/designers" className="hover:text-primary">Our Designers</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>dentaldesigners.3d@gmail.com</li>
            <li>+91 8221 721 6397</li>
            <li>NO 107, First Floor,4th Cross,36th Main Road, BHOOHBCL, KAS Officers Colony, BTM Layout 2nd Stage, Bengaluru, Karnataka 560068</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} 3D Digital Dental Designers Lab. All rights reserved.  
<span className="block mt-2 text-sm text-muted-foreground">
  Developed by <span className="font-semibold text-primary">Athesh C</span>
</span>
      </div>
      
    </footer>
  );
}