import { Compass, Users, Target, TrendingUp, Shield } from "lucide-react";

/* ELEMENTOR CONVERSION NOTES:
 * - Section: Background Light Beige (#F8F9FA), Padding: 128px 0
 * - Layout: Flexbox Column, Gap: 64px
 * - Emphasis on selectivity and qualification
 * - Premium, exclusive positioning
 */

const benefits = [
  {
    icon: Target,
    title: "Compréhension concrète du marché saoudien",
    description: "Une lecture terrain des dynamiques locales"
  },
  {
    icon: Users,
    title: "Première lecture des opportunités réellement pertinentes",
    description: "Identifier ce qui est activable pour votre projet"
  },
  {
    icon: TrendingUp,
    title: "Exposition initiale à un écosystème local",
    description: "Premiers accès aux acteurs du marché"
  },
  {
    icon: Shield,
    title: "Montée en crédibilité",
    description: "Meilleure capacité de projection et validation de votre sérieux"
  }
];

const programElements = [
  "Échanges ciblés avec des acteurs locaux, selon les profils",
  "Immersion dans des environnements business sélectionnés",
  "Rencontres préparatoires et rendez-vous contextualisés",
  "Découverte d'écosystèmes ou de secteurs spécifiques selon la cohérence du projet"
];

export function ImmersionProgramSection() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#F8F9FA' }}>

      {/* ELEMENTOR: Container - Max Width: 1280px, Padding: 0 32px, Flexbox Column, Gap: 80px */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col gap-20">

        {/* ELEMENTOR: Hero Header - Text Align Center, Flexbox Column, Gap: 24px */}
        <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
          {/* ELEMENTOR: Text widget - Gold SAG (#C9A96E), Uppercase, Font Size: 14px, Letter Spacing: 0.2em */}
          <p className="text-sm tracking-widest uppercase" style={{ color: '#C9A96E' }}>
            Programme Immersion
          </p>

          {/* ELEMENTOR: Heading widget (H2) - Font Size: 56px (Desktop), 40px (Mobile), Deep Blue */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1A2A3A' }}>
            Le point d'entrée vers le{" "}
            <span className="font-serif italic" style={{ color: '#C9A96E' }}>marché saoudien</span>
          </h2>

          {/* ELEMENTOR: Text Editor widget - Black 70%, Font Size: 20px */}
          <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
            Le programme Immersion permet aux entrepreneurs et entreprises de comprendre concrètement
            le marché saoudien, d'identifier des opportunités réelles et d'initier les premiers accès.
          </p>
        </div>

        {/* ELEMENTOR: Positioning Block - Background White, Rounded, Padding, Border */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border-2" style={{ borderColor: '#1A2A3A' }}>
          <p className="text-lg leading-relaxed text-center" style={{ color: '#1A2A3A' }}>
            L'Immersion n'est pas une finalité. Elle constitue la première étape d'un parcours structuré
            visant à transformer un intérêt en projet business concret.
          </p>
        </div>

        {/* ELEMENTOR: Benefits Grid - 2 Columns (Desktop), 1 Column (Mobile), Gap: 32px */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-black/10 hover:border-black/20 transition-all">
              <div className="flex flex-col gap-4">
                {/* ELEMENTOR: Icon Box - 48x48px, Deep Blue background */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#1A2A3A' }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>

                {/* ELEMENTOR: Content Column */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium" style={{ color: '#1A2A3A' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ELEMENTOR: Program Elements Section */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-light text-center" style={{ color: '#1A2A3A' }}>
            Exemples d'éléments du programme
          </h3>

          <div className="flex flex-col gap-4">
            {programElements.map((element, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-lg p-4">
                <div className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ backgroundColor: '#C9A96E' }} />
                <p className="leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                  {element}
                </p>
              </div>
            ))}
          </div>

          {/* ELEMENTOR: Important Notice - Text widget, Italic, Deep Blue */}
          <div className="bg-white border-l-4 rounded-lg p-6" style={{ borderColor: '#C9A96E' }}>
            <p className="text-lg italic leading-relaxed" style={{ color: '#1A2A3A' }}>
              Le contenu exact du programme est communiqué après validation du profil.
            </p>
          </div>
        </div>

        {/* ELEMENTOR: Selectivity Section - Background Deep Blue, Rounded, Padding */}
        <div className="rounded-2xl p-12 max-w-5xl mx-auto" style={{ backgroundColor: '#1A2A3A' }}>
          <div className="flex flex-col gap-6 text-center">
            <div className="flex justify-center">
              <Compass className="w-12 h-12" style={{ color: '#C9A96E' }} />
            </div>

            <h3 className="text-3xl font-light text-white">
              Un accès{" "}
              <span className="font-serif italic" style={{ color: '#C9A96E' }}>sélectif</span>
            </h3>

            <p className="text-lg leading-relaxed text-white/80">
              L'accès au programme Immersion est volontairement limité afin de garantir la qualité
              des profils, des échanges et des opportunités. Chaque demande fait l'objet d'une analyse
              préalable.
            </p>

            <p className="text-lg leading-relaxed text-white/80">
              Cette démarche implique une volonté réelle d'engagement et de compréhension du marché.
            </p>

            {/* ELEMENTOR: CTA Button - Gold SAG background, Rounded */}
            <div className="flex justify-center mt-4">
              <button
                className="px-8 py-4 text-white rounded-full transition-all hover:opacity-90 font-medium"
                style={{ backgroundColor: '#C9A96E' }}
              >
                Soumettre une demande
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
