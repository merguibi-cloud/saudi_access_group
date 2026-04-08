import { CheckCircle2, Shield, Zap, Users, Globe } from "lucide-react";
import saudiImage from "figma:asset/4688efa0a53b1cc868c2ca2b0bc2d545992e3e42.png";

/* ELEMENTOR CONVERSION NOTES:
 * - Section: Gradient Background Black to Neutral 950, Padding: 128px 0
 * - Layout: 2 Columns Grid (Desktop), 1 Column (Mobile)
 * - Left Column: Stats grid (3 cols) + Strengths grid (2x2)
 * - Right Column: Large image with overlay + Vision 2030 card
 * - All elements use glassmorphic design (backdrop blur, borders)
 */

const stats = [
  { label: "Engagé", value: "100%" },
  { label: "Années d'expérience", value: "+15" },
  { label: "Clients satisfaits", value: "+50" }
];

const strengths = [
  {
    icon: Shield,
    title: "Services personnalisés",
    description: "Pilotés localement"
  },
  {
    icon: Globe,
    title: "Réseau institutionnel",
    description: "Accès privilégié"
  },
  {
    icon: Zap,
    title: "Alignement Vision 2030",
    description: "Objectifs stratégiques"
  },
  {
    icon: Users,
    title: "Confidentialité garantie",
    description: "Réactivité assurée"
  }
];

export function WhySection() {
  return (
    <section id="expertise" className="relative bg-gradient-to-b from-black via-neutral-950 to-black py-32 overflow-hidden">
      
      {/* ELEMENTOR: Container - Max Width: 1280px, Padding: 0 32px */}
      <div className="max-w-7xl mx-auto px-8">
        
        {/* ELEMENTOR: Grid - 2 Columns (Desktop), 1 Column (Mobile), Gap: 64px, Align Items: Center */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ELEMENTOR: Left Column - Flexbox Column, Gap: 40px */}
          <div className="flex flex-col gap-10">
            
            {/* ELEMENTOR: Header Group - Flexbox Column, Gap: 16px */}
            <div className="flex flex-col gap-4">
              {/* ELEMENTOR: Text widget - Amber 400, Uppercase, Letter Spacing 0.2em */}
              <p className="text-amber-400 text-sm tracking-widest uppercase">
                Pourquoi Choisir Saudi Access
              </p>
              
              {/* ELEMENTOR: Heading (H2) - Font Size: 48px (Desktop), 36px (Mobile) */}
              <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                Un partenaire{" "}
                <span className="font-serif italic text-amber-400">de confiance</span>
              </h2>
              
              {/* ELEMENTOR: Text widget - White 60%, Font Size: 18px */}
              <p className="text-lg text-white/60 leading-relaxed">
                Accompagnement global pour une implantation durable et performante
              </p>
            </div>

            {/* ELEMENTOR: Stats Grid - 3 Columns, Gap: 24px */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-1">
                  {/* ELEMENTOR: Counter widget - Amber 400, Font Size: 36px */}
                  <div className="text-4xl font-light text-amber-400">
                    {stat.value}
                  </div>
                  {/* ELEMENTOR: Text widget - White 60%, Font Size: 14px */}
                  <div className="text-sm text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* ELEMENTOR: Strengths Grid - 2 Columns (Desktop), 1 Column (Mobile), Gap: 24px */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all flex flex-col gap-3"
                >
                  {/* ELEMENTOR: Icon Box - 48x48px, Gradient amber background */}
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl flex items-center justify-center border border-amber-500/20 shrink-0">
                    <strength.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  
                  {/* ELEMENTOR: Text Group - Flexbox Column, Gap: 4px */}
                  <div className="flex flex-col gap-1">
                    {/* ELEMENTOR: Heading (H3) - White, Font Size: 16px */}
                    <h3 className="text-white font-light">
                      {strength.title}
                    </h3>
                    {/* ELEMENTOR: Text widget - White 50%, Font Size: 14px */}
                    <p className="text-sm text-white/50">
                      {strength.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ELEMENTOR: Right Column - Flexbox Column, Gap: 24px */}
          <div className="flex flex-col gap-6">
            
            {/* ELEMENTOR: Image Container - Border Radius: 24px, Overflow: Hidden */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* ELEMENTOR: Image widget - Height: 600px (Desktop), 400px (Mobile), Cover fit */}
              <img
                src={saudiImage}
                alt="Saudi Arabia from space"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              {/* ELEMENTOR: Gradient Overlay - Bottom to top: Black 80% -> 20% -> Transparent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* ELEMENTOR: Vision 2030 Card - Glassmorphic style, Padding: 24px */}
            <div className="bg-gradient-to-br from-neutral-900/95 to-black/95 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              {/* ELEMENTOR: Flexbox Row, Gap: 16px, Align: Center */}
              <div className="flex items-center gap-4">
                {/* ELEMENTOR: Icon Box - 64x64px, Gradient amber-500 to amber-600 */}
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-white">2030</span>
                </div>
                
                {/* ELEMENTOR: Text Group - Flexbox Column, Gap: 4px */}
                <div className="flex flex-col gap-1">
                  {/* ELEMENTOR: Heading - White, Font Size: 18px */}
                  <div className="text-white font-light text-lg">
                    Alignement Vision 2030
                  </div>
                  {/* ELEMENTOR: Text - Amber 400, Font Size: 14px */}
                  <div className="text-amber-400 text-sm">
                    Kingdom of Saudi Arabia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}