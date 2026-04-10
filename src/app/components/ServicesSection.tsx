import { Compass, FileText, Rocket } from "lucide-react";

/* ELEMENTOR CONVERSION NOTES:
 * - Section: Background Light Beige (#F8F9FA), Padding: 128px 0
 * - Layout: Flexbox Column, Gap: 80px
 * - Steps Grid: 3 columns (Desktop), 1 column (Mobile), Gap: 32px
 * - Cards: Clean corporate style with subtle borders
 * - Color Scheme: Deep Blue (#1A2A3A) for titles, Gold SAG (#C9A96E) for accents
 */

const steps = [
  {
    icon: Compass,
    number: "01",
    title: "Immersion",
    duration: "Porte d'entrée du système ISI",
    description: "Une première approche du marché permettant d'en comprendre les dynamiques, d'identifier des opportunités et d'initier une réflexion structurée.",
    features: [
      "Compréhension des dynamiques locales",
      "Identification d'opportunités pertinentes",
      "Premières interactions ciblées"
    ],
    cta: "Découvrir l'Immersion"
  },
  {
    icon: FileText,
    number: "02",
    title: "Support stratégique",
    duration: "Structuration du projet",
    description: "Une phase de structuration du projet, visant à affiner le positionnement, organiser les démarches et préparer les conditions d'un développement cohérent.",
    features: [
      "Structuration du projet et du positionnement",
      "Organisation des démarches et priorités",
      "Préparation à l'implantation"
    ],
    cta: "En savoir plus"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Implantation",
    duration: "Mise en œuvre opérationnelle",
    description: "La mise en œuvre opérationnelle du projet, incluant la coordination des démarches administratives, juridiques et organisationnelles.",
    features: [
      "Structuration de la création de société",
      "Coordination des démarches administratives",
      "Organisation des aspects juridiques"
    ],
    cta: "En savoir plus"
  }
];

export function ServicesSection() {
  return (
    <section id="approche" className="relative py-32 overflow-hidden" style={{ backgroundColor: '#F8F9FA' }}>

      {/* ELEMENTOR: Container - Max Width: 1280px, Padding: 0 32px, Flexbox Column, Gap: 80px */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col gap-20">

        {/* ELEMENTOR: Header Section - Text Align Center, Flexbox Column, Gap: 16px */}
        <div className="flex flex-col gap-4 text-center">
          {/* ELEMENTOR: Text widget - Gold SAG (#C9A96E), Uppercase, Font Size: 14px, Letter Spacing: 0.2em */}
          <p className="text-sm tracking-widest uppercase" style={{ color: '#C9A96E' }}>
            Système ISI
          </p>

          {/* ELEMENTOR: Heading widget (H2) - Font Size: 60px (Desktop), 48px (Mobile), Deep Blue */}
          <h2 className="text-5xl md:text-6xl font-light" style={{ color: '#1A2A3A' }}>
            Le{" "}
            <span className="font-serif italic" style={{ color: '#C9A96E' }}>système ISI</span>
          </h2>

          {/* ELEMENTOR: Text widget - Black 60%, Font Size: 20px, Max Width: 672px */}
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(0,0,0,0.6)' }}>
            Le système ISI repose sur un parcours structuré en trois phases complémentaires. Chaque phase peut être activée indépendamment, en fonction du niveau d'avancement du projet.
          </p>
        </div>

        {/* ELEMENTOR: Steps Grid - 3 Columns (Desktop), 1 Column (Mobile), Gap: 32px */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group">

              {/* ELEMENTOR: Step Card - Background: White, Border: Gray 20%, Rounded: 16px, Padding: 32px */}
              {/* Hover: Border Deep Blue (#1A2A3A) */}
              <div
                className="bg-white border-2 rounded-2xl p-8 h-full transition-all duration-500 flex flex-col gap-6 hover:shadow-lg"
                style={{
                  borderColor: 'rgba(0,0,0,0.1)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#1A2A3A'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'}
              >

                {/* ELEMENTOR: Card Header - Flexbox Row, Justify: Space Between */}
                <div className="flex items-start justify-between">
                  {/* ELEMENTOR: Text widget - Font Size: 64px, Gray 10% */}
                  <span className="text-6xl font-light" style={{ color: 'rgba(0,0,0,0.08)' }}>
                    {step.number}
                  </span>

                  {/* ELEMENTOR: Icon Box - 48x48px, Deep Blue background */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: '#1A2A3A' }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* ELEMENTOR: Content Column - Flexbox Column, Gap: 16px */}
                <div className="flex flex-col gap-4">
                  {/* ELEMENTOR: Title Group - Flexbox Column, Gap: 8px */}
                  <div className="flex flex-col gap-2">
                    {/* ELEMENTOR: Heading widget (H3) - Font Size: 28px, Deep Blue */}
                    <h3 className="text-3xl font-light" style={{ color: '#1A2A3A' }}>
                      {step.title}
                    </h3>
                    {/* ELEMENTOR: Text widget - Gold SAG, Font Size: 14px */}
                    <p className="text-sm tracking-wide" style={{ color: '#C9A96E' }}>
                      {step.duration}
                    </p>
                  </div>

                  {/* ELEMENTOR: Text Editor widget - Black 70% */}
                  <p className="leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                    {step.description}
                  </p>
                </div>

                {/* ELEMENTOR: Features List - Flexbox Column, Gap: 12px */}
                <div className="flex flex-col gap-3">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>
                      {/* ELEMENTOR: Icon - Divider widget or HTML (4px dot, Gold SAG) */}
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: '#C9A96E' }} />
                      {/* ELEMENTOR: Text widget */}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* ELEMENTOR: CTA Button - Text button with arrow, Deep Blue color */}
                <button
                  className="mt-4 text-left text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-2"
                  style={{ color: '#1A2A3A' }}
                >
                  {step.cta}
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ELEMENTOR: Closing phrase - Text Align Center, Max Width: 768px */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed italic" style={{ color: 'rgba(0,0,0,0.6)' }}>
            L'articulation de ces trois phases permet d'inscrire les projets dans une logique structurée,
            de la compréhension initiale à l'exécution.
          </p>
        </div>
      </div>
    </section>
  );
}