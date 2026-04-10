import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, Scale, Briefcase, Users } from "lucide-react";

/* ELEMENTOR CONVERSION NOTES:
 * - Section: Background Light Beige (#FAFAF8), Padding: 128px 0
 * - Layout: Categorized partner sections with icon headers
 * - Cards: Clean corporate style with subtle borders
 * - Images: All using Unsplash URLs - can be replaced with WordPress media
 * - Hover effect: Border color change to Deep Blue
 * - Color Scheme: Deep Blue (#1C1C1E) and Gold SAG (#B87333)
 * - Institutional, discreet tone - avoid promotional language
 */

const partnerCategories = [
  {
    category: "Institutionnels",
    icon: Building2,
    partners: [
      {
        name: "Ministry of Investment (MISA)",
        type: "Facilitateur d'investissement",
        image: "https://images.unsplash.com/photo-1675855547482-16834b36d4d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGFyYWJpYSUyMG1pbmlzdHJ5JTIwaW52ZXN0bWVudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3NDg5NzIzMXww&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        name: "Ministry of Industry",
        type: "Développement industriel",
        image: "https://images.unsplash.com/photo-1583737097428-af53774819a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMGZhY3RvcnklMjByZXNvdXJjZXN8ZW58MXx8fHwxNzc0ODk3MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    category: "Juridiques & Conformité",
    icon: Scale,
    partners: [
      {
        name: "Experts juridiques",
        type: "Conformité et structuration",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      },
      {
        name: "Cabinets conseil",
        type: "Accompagnement réglementaire",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      }
    ]
  },
  {
    category: "Écosystème Économique",
    icon: Briefcase,
    partners: [
      {
        name: "Chambres de commerce",
        type: "Réseaux professionnels",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      },
      {
        name: "Réseaux d'affaires",
        type: "Corporate partnerships",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      }
    ]
  },
  {
    category: "Associatifs & Impact",
    icon: Users,
    partners: [
      {
        name: "Associations locales",
        type: "Réseaux communautaires",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      },
      {
        name: "Diasporas qualifiées",
        type: "Accompagnement terrain",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      }
    ]
  }
];

export function PartnersSection() {
  return (
    <section id="partenaires" className="relative py-32 overflow-hidden" style={{ backgroundColor: '#FAFAF8' }}>

      {/* ELEMENTOR: Container - Max Width: 1280px, Padding: 0 32px, Flexbox Column, Gap: 64px */}
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-16">

        {/* ELEMENTOR: Header Section - Text Align Center, Flexbox Column, Gap: 24px */}
        <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
          {/* ELEMENTOR: Text widget - Gold SAG (#B87333), Uppercase, Letter Spacing 0.2em */}
          <p className="text-sm tracking-widest uppercase" style={{ color: '#B87333' }}>
            Réseau de Partenaires
          </p>

          {/* ELEMENTOR: Heading (H2) - Font Size: 56px (Desktop), 40px (Mobile), Deep Blue */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1C1C1E' }}>
            Un réseau{" "}
            <span className="font-serif italic" style={{ color: '#B87333' }}>structuré</span>
          </h2>

          {/* ELEMENTOR: Text widget - Black 70%, Font Size: 20px, Max Width: 896px */}
          <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
            Saudi Access Group s'appuie sur un réseau de partenaires, d'acteurs locaux et d'organisations reconnues,
            permettant de faciliter l'accès au marché saoudien et d'accompagner les projets dans des conditions optimales.
          </p>

          {/* ELEMENTOR: Subtext - Italic, Black 60%, Font Size: 16px */}
          <p className="text-base italic leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
            Nous collaborons avec différents profils : entreprises, institutions, experts terrain et réseaux professionnels.
          </p>
        </div>

        {/* ELEMENTOR: Categories Section - Flexbox Column, Gap: 48px */}
        <div className="flex flex-col gap-12">
          {partnerCategories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col gap-6">

              {/* ELEMENTOR: Category Header - Flexbox Row, Gap: 12px, Align Center */}
              <div className="flex items-center gap-3 justify-center">
                {/* ELEMENTOR: Icon Box - 32x32px, Deep Blue background */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#1C1C1E' }}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                {/* ELEMENTOR: Heading (H3) - Deep Blue, Font Size: 20px */}
                <h3 className="text-xl font-medium" style={{ color: '#1C1C1E' }}>
                  {category.category}
                </h3>
              </div>

              {/* ELEMENTOR: Partners Grid - Responsive: 1 column (Mobile), 2 columns (Tablet+), Gap: 24px */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="group">

                    {/* ELEMENTOR: Partner Card - Background white, Border Gray 10%, Rounded: 16px */}
                    {/* Hover: Border changes to Deep Blue */}
                    <div
                      className="bg-white border-2 rounded-2xl overflow-hidden h-full transition-all duration-500 flex flex-col hover:shadow-lg"
                      style={{ borderColor: 'rgba(0,0,0,0.1)' }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#1C1C1E'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'}
                    >

                      {/* ELEMENTOR: Image Container - Aspect Ratio 16:9, Overflow hidden */}
                      <div className="relative w-full aspect-video overflow-hidden">
                        {/* ELEMENTOR: Image widget - Cover fit, Hover: Scale 105% */}
                        <ImageWithFallback
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* ELEMENTOR: Gradient Overlay - Deep Blue gradient */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(to top, rgba(28,28,30,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
                          }}
                        />
                      </div>

                      {/* ELEMENTOR: Content Section - Padding: 20px, Flexbox Column, Gap: 8px */}
                      <div className="flex flex-col gap-2 flex-1 p-5">
                        {/* ELEMENTOR: Heading (H4) - Deep Blue, Font Size: 16px, Text Align Center */}
                        <h4 className="font-medium text-base text-center" style={{ color: '#1C1C1E' }}>
                          {partner.name}
                        </h4>
                        {/* ELEMENTOR: Text widget - Gold SAG, Font Size: 13px, Text Align Center */}
                        <p className="text-xs text-center" style={{ color: '#B87333' }}>
                          {partner.type}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ELEMENTOR: Disclaimer Note - Background White, Border Left Gold, Padding */}
        <div className="border-l-4 rounded-lg p-6 max-w-3xl mx-auto" style={{ backgroundColor: 'white', borderColor: '#B87333' }}>
          <p className="text-sm italic leading-relaxed text-center" style={{ color: 'rgba(0,0,0,0.6)' }}>
            Les partenariats présentés correspondent à des collaborations actives et autorisées.
            La liste n'est pas exhaustive et évolue selon les besoins des projets accompagnés.
          </p>
        </div>
      </div>
    </section>
  );
}