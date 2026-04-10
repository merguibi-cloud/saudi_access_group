import { FileText, Users, Globe } from "lucide-react";

/* ELEMENTOR CONVERSION NOTES:
 * - Section: Background Deep Blue (#1C1C1E), Padding: 128px 0
 * - Layout: Flexbox Column, Gap: 64px
 * - Grid: 3 columns (Desktop), 1 column (Mobile)
 * - Typography: White text on dark blue background
 * - Institutional, corporate tone
 * - Each problem has a personalized icon
 */

const problems = [
  {
    icon: FileText,
    title: "Complexité administrative",
    description: "Les démarches administratives et réglementaires nécessitent une compréhension précise des cadres en vigueur et des procédures locales."
  },
  {
    icon: Users,
    title: "Accès au réseau",
    description: "L'absence de relais locaux et de connexions pertinentes peut limiter la capacité à identifier et activer des opportunités."
  },
  {
    icon: Globe,
    title: "Compréhension du marché",
    description: "Les spécificités culturelles, économiques et business impliquent une adaptation réelle et une lecture ajustée de l'environnement."
  }
];

export function ProblemAccessSection() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#1C1C1E' }}>

      {/* ELEMENTOR: Container - Max Width: 1280px, Padding: 0 32px, Flexbox Column, Gap: 64px */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col gap-16">

        {/* ELEMENTOR: Header Section - Text Align Center, Flexbox Column, Gap: 24px */}
        <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
          {/* ELEMENTOR: Text widget - Gold SAG (#B87333), Uppercase, Font Size: 14px, Letter Spacing: 0.2em */}
          <p className="text-sm tracking-widest uppercase" style={{ color: '#B87333' }}>
            Le Défi
          </p>

          {/* ELEMENTOR: Heading widget (H2) - Font Size: 56px (Desktop), 40px (Mobile), White */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            Un environnement{" "}
            <span className="font-serif italic" style={{ color: '#B87333' }}>exigeant</span>
          </h2>

          <p className="text-xl text-white/70 leading-relaxed">
            L'accès au marché saoudien s'inscrit dans un environnement en transformation, présentant
            des opportunités significatives, mais nécessitant une compréhension fine de ses dynamiques.
          </p>
        </div>

        {/* ELEMENTOR: Problems Grid - 3 Columns (Desktop), 1 Column (Mobile), Gap: 24px */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl transition-all duration-300 hover:bg-white/5"
            >
              {/* ELEMENTOR: Icon - Custom per problem, Gold SAG color, 24x24px */}
              <div className="shrink-0 mt-1">
                <problem.icon className="w-6 h-6" style={{ color: '#B87333' }} />
              </div>

              {/* ELEMENTOR: Content Column - Flexbox Column, Gap: 8px */}
              <div className="flex flex-col gap-2">
                {/* ELEMENTOR: Heading widget (H3) - Font Size: 18px, White */}
                <h3 className="text-lg font-light text-white leading-snug">
                  {problem.title}
                </h3>
                {/* ELEMENTOR: Text widget - White 60%, Font Size: 14px */}
                <p className="text-sm text-white/60 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ELEMENTOR: Conclusion Text - Text Align Center, Max Width: 768px */}
        <div className="max-w-3xl mx-auto text-center">
          {/* ELEMENTOR: Text widget - White 80%, Font Size: 20px, Italic */}
          <p className="text-xl text-white/80 italic leading-relaxed">
            Face à ces enjeux, une approche structurée devient essentielle.
          </p>
        </div>
      </div>
    </section>
  );
}
