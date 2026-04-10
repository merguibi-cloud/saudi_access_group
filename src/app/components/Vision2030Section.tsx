import { TrendingUp, Building2, Landmark, Globe } from "lucide-react";

/* ELEMENTOR CONVERSION NOTES:
 * - Section: Background White, Padding: 128px 0
 * - Layout: Flexbox Column, Gap: 64px
 * - No Motion animations - static, institutional design
 * - Color Scheme: Deep Blue (#1A2A3A) for titles, Gold SAG (#C9A96E) for accents
 * - Data-driven, sourced content approach
 */

const marketFactors = [
  {
    icon: TrendingUp,
    title: "Transformation économique majeure",
    description: "Vision 2030 engage des investissements massifs pour diversifier l'économie"
  },
  {
    icon: Building2,
    title: "Écosystème entrepreneurial en pleine évolution",
    description: "154 638 nouvelles immatriculations commerciales au T1 2025 (Monsha'at SME Monitor)"
  },
  {
    icon: Landmark,
    title: "Environnement favorable aux investisseurs",
    description: "Création d'un écosystème business-friendly et de parcours structurés (MISA)"
  },
  {
    icon: Globe,
    title: "Riyadh parmi les écosystèmes émergents",
    description: "23e position mondiale dans le Global Startup Ecosystem Report 2025"
  }
];

export function Vision2030Section() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      {/* ELEMENTOR: Container - Max Width: 1280px, Padding: 0 32px, Flexbox Column, Gap: 64px */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col gap-16">

        {/* ELEMENTOR: Header Section - Text Align Center, Flexbox Column, Gap: 24px */}
        <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
          {/* ELEMENTOR: Text widget - Gold SAG (#C9A96E), Uppercase, Font Size: 14px, Letter Spacing: 0.2em */}
          <p className="text-sm tracking-widest uppercase" style={{ color: '#C9A96E' }}>
            Le Marché
          </p>

          {/* ELEMENTOR: Heading widget (H2) - Font Size: 56px (Desktop), 40px (Mobile), Deep Blue */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1A2A3A' }}>
            Pourquoi{" "}
            <span className="font-serif italic" style={{ color: '#C9A96E' }}>l'Arabie Saoudite ?</span>
          </h2>

          {/* ELEMENTOR: Text Editor widget - Black 70%, Font Size: 20px, Max Width: 896px */}
          <p className="text-xl leading-relaxed max-w-4xl" style={{ color: 'rgba(0,0,0,0.7)' }}>
            L'Arabie Saoudite connaît aujourd'hui une transformation économique majeure portée par la Vision 2030.
            Le Royaume engage des investissements massifs dans de nombreux secteurs afin de diversifier son économie
            et d'attirer des acteurs internationaux.
          </p>
        </div>

        {/* ELEMENTOR: Content Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ELEMENTOR: Left Column - Text Content */}
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Cette dynamique crée un environnement particulièrement favorable au développement d'activités
              et à l'émergence de nouvelles opportunités business.
            </p>

            <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              De nombreux projets structurants voient le jour, accompagnés d'un écosystème en pleine évolution,
              notamment dans les domaines de l'innovation et des startups.
            </p>

            {/* ELEMENTOR: Key Insight Box - Background Light Beige, Border Left Gold, Padding */}
            <div className="border-l-4 rounded-lg p-6" style={{ backgroundColor: '#F8F9FA', borderColor: '#C9A96E' }}>
              <p className="text-lg font-medium leading-relaxed" style={{ color: '#1A2A3A' }}>
                Le défi n'est plus d'identifier le potentiel, mais de savoir y accéder efficacement.
              </p>
            </div>

            {/* ELEMENTOR: Filtering Statement - Italic text */}
            <p className="text-lg italic leading-relaxed" style={{ color: '#1A2A3A' }}>
              Ce positionnement nécessite une réelle volonté de compréhension du marché et une démarche proactive.
            </p>

            {/* ELEMENTOR: CTA Button - Deep Blue background */}
            <div className="mt-4">
              <button
                className="px-8 py-4 text-white rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: '#1A2A3A' }}
              >
                Discuter de votre projet
              </button>
            </div>
          </div>

          {/* ELEMENTOR: Right Column - Market Factors Grid */}
          <div className="flex flex-col gap-6">
            {marketFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-white border border-black/10 rounded-xl p-6 hover:border-black/20 transition-all"
              >
                <div className="flex gap-4">
                  {/* ELEMENTOR: Icon Box - 48x48px, Deep Blue background */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: '#1A2A3A' }}
                  >
                    <factor.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* ELEMENTOR: Content Column */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium" style={{ color: '#1A2A3A' }}>
                      {factor.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                      {factor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}