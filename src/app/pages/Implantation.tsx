import { Building2, FileText, Shield, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const valueBlocks = [
  {
    icon: Building2,
    title: "Structuration de la création de société",
    description: "Accompagnement dans la définition de la structure juridique adaptée et les démarches d'enregistrement."
  },
  {
    icon: FileText,
    title: "Coordination des démarches administratives",
    description: "Organisation et suivi des procédures auprès des autorités compétentes, dans le respect des cadres institutionnels applicables."
  },
  {
    icon: Shield,
    title: "Organisation des aspects juridiques",
    description: "Structuration des éléments juridiques nécessaires à la mise en conformité du projet avec les exigences locales."
  },
  {
    icon: Users,
    title: "Mise en cohérence globale du projet",
    description: "Alignement des composantes du projet avec les réalités réglementaires et opérationnelles du marché saoudien."
  }
];

export default function Implantation() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col bg-black">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1770836560507-ba33be89e547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYXVkaSUyMEFyYWJpYSUyMG9mZmljZSUyMGJ1aWxkaW5nJTIwY29ycG9yYXRlJTIwYXJjaGl0ZWN0dXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NTIzMzc2MHww&ixlib=rb-4.1.0&q=80&w=1080')`
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(26,42,58,0.85) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.95) 100%)'
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(26,42,58,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
            }}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl w-full mx-auto px-8 py-32">
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#C9A96E' }}>
              Système ISI — Phase 3
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
              Opérer votre{" "}
              <span className="font-serif italic" style={{ color: '#C9A96E' }}>implantation</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              L'implantation constitue la phase de mise en œuvre du projet, visant à structurer
              une présence effective sur le marché saoudien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                to="/#contact"
                className="group px-8 py-4 text-white rounded-full transition-all flex items-center gap-2 justify-center hover:opacity-90"
                style={{ backgroundColor: '#1A2A3A' }}
              >
                <span>Soumettre une demande</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning - White */}
      <section className="relative bg-white py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#C9A96E' }}>
              Phase opérationnelle
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1A2A3A' }}>
              Une mise en œuvre{" "}
              <span className="font-serif italic" style={{ color: '#C9A96E' }}>coordonnée</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              L'implantation constitue la phase opérationnelle du projet, visant à structurer une
              présence effective sur le marché saoudien. Elle peut être engagée à l'issue du
              support stratégique ou, selon les besoins du projet, de manière indépendante.
            </p>

            <div className="bg-white border-l-4 rounded-lg p-6" style={{ borderColor: '#C9A96E' }}>
              <p className="text-lg font-medium leading-relaxed" style={{ color: '#1A2A3A' }}>
                Les phases de support stratégique et d'implantation s'inscrivent principalement
                dans un cadre d'échanges structurés, incluant la coordination, le suivi et
                l'accompagnement à distance. Les interventions opérationnelles spécifiques sur
                le terrain peuvent être envisagées en fonction des besoins du projet.
              </p>
            </div>

            <div className="rounded-lg p-6" style={{ backgroundColor: '#F8F9FA' }}>
              <p className="text-base italic leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Les démarches d'implantation s'inscrivent dans un cadre réglementaire défini par
                les autorités compétentes, les accords en vigueur et les conditions propres à chaque
                projet. Saudi Access Group intervient dans la structuration, la coordination et la
                préparation de ces démarches, dans le respect des cadres institutionnels applicables.
                Les décisions finales relèvent des autorités et organismes compétents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value - Light Beige */}
      <section className="relative py-32" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#C9A96E' }}>
              Ce que cela couvre
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1A2A3A' }}>
              Les dimensions de{" "}
              <span className="font-serif italic" style={{ color: '#C9A96E' }}>l'implantation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {valueBlocks.map((block, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-black/10 hover:border-black/20 transition-all flex gap-4"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#1A2A3A' }}
                >
                  <block.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium" style={{ color: '#1A2A3A' }}>{block.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - White */}
      <section className="relative bg-white py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-12">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#C9A96E' }}>
              Tarification
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1A2A3A' }}>
              Un cadre{" "}
              <span className="font-serif italic" style={{ color: '#C9A96E' }}>adapté au projet</span>
            </h2>
          </div>

          <div className="rounded-2xl p-12" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="flex flex-col gap-6 text-center">
              <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Toute intervention nécessitant une mobilisation spécifique ou des actions
                opérationnelles complémentaires fait l'objet d'une définition préalable et d'une
                tarification adaptée. Aucun tarif n'est affiché publiquement.
              </p>
              <div className="bg-white border-l-4 rounded-lg p-6" style={{ borderColor: '#C9A96E' }}>
                <p className="text-base italic leading-relaxed" style={{ color: '#1A2A3A' }}>
                  Chaque projet est étudié avec attention afin de définir les conditions
                  d'intervention les plus adaptées au profil et aux objectifs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Light Beige */}
      <section className="relative py-32" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-4xl mx-auto px-8">
          <div className="rounded-2xl p-12 text-center" style={{ backgroundColor: '#1A2A3A' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Initier votre{" "}
              <span className="font-serif italic" style={{ color: '#C9A96E' }}>démarche</span>
            </h2>
            <p className="text-xl leading-relaxed mb-8 text-white/80">
              L'accès aux services de Saudi Access Group repose sur une analyse préalable du
              projet. Cette étape permet de définir les conditions d'intervention les plus adaptées
              au profil et aux objectifs du client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="group px-8 py-4 text-white rounded-full transition-all flex items-center gap-2 justify-center hover:opacity-90"
                style={{ backgroundColor: '#C9A96E' }}
              >
                <span>Soumettre une demande</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/#contact"
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white transition-all flex items-center gap-2 justify-center hover:bg-white/5"
              >
                <span>Échanger sur votre projet</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
