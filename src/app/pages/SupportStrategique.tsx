import { Target, TrendingUp, Users, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const valueBlocks = [
  {
    icon: Target,
    title: "Structuration du projet et du positionnement",
    description: "Affiner le positionnement, clarifier les objectifs et organiser les fondements d'une approche cohérente."
  },
  {
    icon: TrendingUp,
    title: "Organisation des démarches et priorités",
    description: "Identifier et séquencer les actions déterminantes, en lien avec les réalités du marché et les objectifs du projet."
  },
  {
    icon: Users,
    title: "Accès à des interlocuteurs et environnements pertinents",
    description: "Mobilisation du réseau et des environnements adaptés au stade et au profil du projet."
  },
  {
    icon: Globe,
    title: "Préparation aux phases opérationnelles",
    description: "Préparer les conditions d'un développement cohérent, en lien avec les phases d'implantation."
  }
];

export default function SupportStrategique() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col bg-black">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1758873271857-c42a7ef7d692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN0YXJ0dXAlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1MjMzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080')`
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
              Système ISI — Phase 2
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
              Structurer et développer{" "}
              <span className="font-serif italic" style={{ color: '#C9A96E' }}>votre projet</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Le support stratégique constitue la phase de structuration et de développement du
              projet. Il vise à transformer une première approche du marché en une démarche
              cohérente, organisée et orientée vers l'implantation.
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
              Positionnement
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1A2A3A' }}>
              Une phase de{" "}
              <span className="font-serif italic" style={{ color: '#C9A96E' }}>structuration</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Le support stratégique constitue une phase de structuration et de développement du
              projet. Il vise à transformer une première approche du marché en une démarche
              cohérente, organisée et orientée vers l'implantation.
            </p>

            <div className="bg-white border-l-4 rounded-lg p-6" style={{ borderColor: '#C9A96E' }}>
              <p className="text-lg font-medium leading-relaxed" style={{ color: '#1A2A3A' }}>
                Continuité : à l'issue du programme Immersion, un suivi initial est mis en place
                afin de prolonger la dynamique engagée et structurer les premières actions.
              </p>
            </div>

            <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Le support stratégique peut s'inscrire dans une logique de suivi sur plusieurs mois,
              en fonction de l'évolution du projet.
            </p>
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
              Les dimensions du{" "}
              <span className="font-serif italic" style={{ color: '#C9A96E' }}>support</span>
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
              <span className="font-serif italic" style={{ color: '#C9A96E' }}>sur mesure</span>
            </h2>
          </div>

          <div className="rounded-2xl p-12" style={{ backgroundColor: '#F8F9FA' }}>
            <div className="flex flex-col gap-6 text-center">
              <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Chaque projet est traité sur mesure. Aucun tarif n'est affiché publiquement ;
                une estimation peut être proposée lors du second échange qualifié, en fonction
                des besoins et du niveau d'intervention souhaité.
              </p>
              <div className="bg-white border-l-4 rounded-lg p-6" style={{ borderColor: '#C9A96E' }}>
                <p className="text-base italic leading-relaxed" style={{ color: '#1A2A3A' }}>
                  Le support stratégique peut s'inscrire dans une logique de suivi sur plusieurs
                  mois, en fonction de l'évolution du projet.
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
              projet. Chaque projet est étudié avec attention afin de garantir la cohérence entre
              les objectifs et les conditions d'intervention.
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
