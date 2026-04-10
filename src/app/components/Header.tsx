import { Phone } from "lucide-react";
import { Link } from "react-router";

/* ELEMENTOR CONVERSION NOTES:
 * - Header: Use Elementor Header template
 * - Container: Max Width 1280px, Padding 32px
 * - Logo: Image widget + Text widget group
 * - Navigation: Nav Menu widget
 * - Button: Button widget with icon
 * - Background: Black 60% opacity with backdrop blur
 */

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/60 backdrop-blur-md border-b border-white/5"
    >
      {/* ELEMENTOR: Container - Flexbox Row, Justify: Space Between, Align: Center, Gap: 32px */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        
        {/* ELEMENTOR: Logo Group - Flexbox Row, Gap: 8px */}
        <Link to="/" className="flex items-center gap-2">
          {/* ELEMENTOR: Icon Box or Image widget - 40x40px, Deep Blue (#1C1C1E) background */}
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#1C1C1E' }}
          >
            <span className="text-white font-bold text-lg">SA</span>
          </div>
          {/* ELEMENTOR: Heading widgets */}
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-xl tracking-tight leading-tight">SAUDI</h1>
            <p className="text-white/70 text-xs tracking-widest leading-tight">ACCESS GROUP</p>
          </div>
        </Link>

        {/* ELEMENTOR: Nav Menu widget - Horizontal layout, Gap: 32px */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className="text-white/70 hover:text-white transition-colors">
            Accueil
          </Link>
          <Link to="/systeme-isi" className="text-white/70 hover:text-white transition-colors">
            Système ISI
          </Link>
          <Link to="/immersion" className="text-white/70 hover:text-white transition-colors">
            Immersion
          </Link>
          <Link to="/support-strategique" className="text-white/70 hover:text-white transition-colors">
            Support stratégique
          </Link>
          <Link to="/implantation" className="text-white/70 hover:text-white transition-colors">
            Implantation
          </Link>
          <Link to="/about" className="text-white/70 hover:text-white transition-colors">
            À propos
          </Link>
        </nav>

        {/* ELEMENTOR: Button widget with icon - Gold SAG (#B87333) style */}
        <Link
          to="/#contact"
          className="flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all shrink-0 hover:bg-white/5"
          style={{ borderColor: '#B87333', color: '#B87333' }}
        >
          <Phone className="w-4 h-4" />
          <span className="text-sm">Nous contacter</span>
        </Link>
      </div>
    </header>
  );
}