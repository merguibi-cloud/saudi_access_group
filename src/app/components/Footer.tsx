import { MapPin, Mail, Youtube, Linkedin, Instagram, MessageCircle } from "lucide-react";

/* ELEMENTOR CONVERSION NOTES:
 * - Footer: Use Elementor Footer template
 * - Background: Black, Border Top: White 10%
 * - Layout: 4 columns grid (Desktop), 2 columns (Tablet), 1 column (Mobile)
 * - Social Icons: Icon List or custom HTML widgets
 * - WhatsApp Button: Floating Action Button - use HTML widget or plugin
 * - Bottom Bar: Flexbox row with space between
 */

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 py-16">
      
      {/* ELEMENTOR: Container - Max Width: 1280px, Padding: 0 32px, Flexbox Column, Gap: 48px */}
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-12">
        
        {/* ELEMENTOR: Footer Grid - 4 Columns (Desktop), 2 Columns (Tablet), 1 Column (Mobile), Gap: 48px */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* ELEMENTOR: Brand Column - Flexbox Column, Gap: 24px */}
          <div className="flex flex-col gap-6">
            {/* ELEMENTOR: Logo Group - Same as Header */}
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#003366' }}
              >
                <span className="text-white font-bold text-lg">SA</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-bold text-xl tracking-tight leading-tight">SAUDI</h3>
                <p className="text-white/70 text-xs tracking-widest leading-tight">ACCESS GROUP</p>
              </div>
            </div>
            {/* ELEMENTOR: Text widget - White 60%, Font Size: 14px */}
            <p className="text-white/60 text-sm leading-relaxed">
              Nous aidons les entrepreneurs à concrétiser leur projet en Arabie Saoudite avec méthode, réseau et accompagnement.
            </p>
          </div>

          {/* ELEMENTOR: Saudi Access Column - Flexbox Column, Gap: 24px */}
          <div className="flex flex-col gap-6">
            {/* ELEMENTOR: Heading (H4) - White, Font Size: 18px */}
            <h4 className="text-white font-light text-lg">Parcours</h4>
            {/* ELEMENTOR: Icon List widget or Nav Menu */}
            <div className="flex flex-col gap-3">
              <a href="#immersion" className="flex items-center gap-2 text-white/60 transition-colors text-sm" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C29A3B'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: '#C29A3B' }} />
                Programme Immersion
              </a>
              <a href="#accompagnement" className="flex items-center gap-2 text-white/60 transition-colors text-sm" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C29A3B'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: '#C29A3B' }} />
                Accompagnement
              </a>
              <a href="#implantation" className="flex items-center gap-2 text-white/60 transition-colors text-sm" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C29A3B'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: '#C29A3B' }} />
                Implantation
              </a>
            </div>
          </div>

          {/* ELEMENTOR: Informations Column - Flexbox Column, Gap: 24px */}
          <div className="flex flex-col gap-6">
            {/* ELEMENTOR: Heading (H4) - White, Font Size: 18px */}
            <h4 className="text-white font-light text-lg">Informations</h4>
            {/* ELEMENTOR: Icon List widget */}
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors text-sm">
                <span className="w-1 h-1 bg-amber-400 rounded-full shrink-0" />
                Mentions légales
              </a>
              <a href="#" className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors text-sm">
                <span className="w-1 h-1 bg-amber-400 rounded-full shrink-0" />
                Politique de confidentialité
              </a>
              <a href="#" className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors text-sm">
                <span className="w-1 h-1 bg-amber-400 rounded-full shrink-0" />
                Conditions de services
              </a>
            </div>
          </div>

          {/* ELEMENTOR: Contact Column - Flexbox Column, Gap: 24px */}
          <div className="flex flex-col gap-6">
            {/* ELEMENTOR: Heading (H4) - White, Font Size: 18px */}
            <h4 className="text-white font-light text-lg">Contact</h4>
            
            {/* ELEMENTOR: Contact Info - Icon List or Text widgets */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-1" style={{ color: '#C29A3B' }} />
                <span>King Fahd Road - Hamad Tower</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 shrink-0" style={{ color: '#C29A3B' }} />
                <a
                  href="mailto:contact@saudiaccessgroup.com"
                  className="transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C29A3B'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  contact@saudiaccessgroup.com
                </a>
              </div>
            </div>

            {/* ELEMENTOR: Social Icons - Social Icons widget, Gap: 12px */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center transition-all group shrink-0"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(194,154,59,0.2)'; e.currentTarget.style.borderColor = 'rgba(194,154,59,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                <Youtube className="w-4 h-4 text-white/60 transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center transition-all group shrink-0"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(194,154,59,0.2)'; e.currentTarget.style.borderColor = 'rgba(194,154,59,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                <Linkedin className="w-4 h-4 text-white/60 transition-colors" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center transition-all group shrink-0"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(194,154,59,0.2)'; e.currentTarget.style.borderColor = 'rgba(194,154,59,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                <Instagram className="w-4 h-4 text-white/60 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* ELEMENTOR: Bottom Bar - Border Top, Padding Top: 32px, Flexbox Row, Space Between */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* ELEMENTOR: Copyright Text - White 40%, Font Size: 14px */}
          <p className="text-white/40 text-sm">
            © 2026 Saudi Access Group. Tous droits réservés.
          </p>
          {/* ELEMENTOR: Made in Text - Flexbox Row, Gap: 8px */}
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Conçu en</span>
            <span style={{ color: '#C29A3B' }}>♦</span>
            <span>Arabie Saoudite</span>
          </div>
        </div>
      </div>

      {/* ELEMENTOR: WhatsApp Floating Button */}
      {/* Use HTML widget, Button widget, or WhatsApp plugin */}
      {/* Position: Fixed, Bottom: 32px, Right: 32px, Z-index: 50 */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 z-50 transition-colors"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </footer>
  );
}