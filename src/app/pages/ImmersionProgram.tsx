import { Target, Users, TrendingUp, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const programBlocks = [
  {
    icon: Globe,
    title: "Comprendre les dynamiques locales",
    description: "Approche des spécificités économiques, culturelles et business afin d'adapter la lecture du marché."
  },
  {
    icon: Target,
    title: "Identifier des opportunités pertinentes",
    description: "Analyse des secteurs porteurs et des opportunités en lien avec le profil et les objectifs du projet."
  },
  {
    icon: Users,
    title: "Initier des échanges structurés",
    description: "Interactions avec des environnements adaptés, permettant d'ancrer la démarche dans une réalité terrain."
  },
  {
    icon: TrendingUp,
    title: "Structurer une première approche",
    description: "Organisation des premières réflexions stratégiques, définition des priorités et orientation des actions."
  },
  {
    icon: ArrowRight,
    title: "Projeter le développement",
    description: "Évaluation des possibilités d'évolution du projet et identification des prochaines étapes potentielles dans le cadre du système ISI."
  }
];

export default function ImmersionProgram() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col bg-black">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwJTIwcHJvZmVzc2lvbmFsJTIwbWVldGluZ3xlbnwxfHx8fDE3NzUyMzM3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080')`
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,51,102,0.85) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.95) 100%)'
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0,51,102,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
            }}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl w-full mx-auto px-8 py-32">
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#C29A3B' }}>
              Programme Immersion
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
              Accéder au marché saoudien à travers une approche{" "}
              <span className="font-serif italic" style={{ color: '#C29A3B' }}>structurée</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Le programme Immersion permet d'aborder le marché saoudien de manière concrète,
              en combinant compréhension des dynamiques, identification d'opportunités et accès
              à des environnements ciblés.
            </p>
            <p className="text-base text-white/50 italic leading-relaxed">
              Une première étape conçue pour transformer une intention en démarche structurée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                to="/#contact"
                className="group px-8 py-4 text-white rounded-full transition-all flex items-center gap-2 justify-center hover:opacity-90"
                style={{ backgroundColor: '#003366' }}
              >
                <span>Soumettre une demande</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="text-sm text-white/40 italic">Programme accessible sur sélection.</p>
          </div>
        </div>
      </section>

      {/* Positioning - White */}
      <section className="relative bg-white py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#C29A3B' }}>
              Positionnement
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#003366' }}>
              Une étape{" "}
              <span className="font-serif italic" style={{ color: '#C29A3B' }}>structurante</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              L'immersion constitue la première étape du système ISI. Elle permet d'aborder le marché
              saoudien à travers une approche structurée, en combinant compréhension du terrain,
              identification d'opportunités et premières interactions ciblées.
            </p>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Cette phase s'inscrit comme un levier stratégique, permettant de poser les bases d'un
              projet cohérent et adapté aux réalités du marché.
            </p>
            <div className="bg-white border-l-4 rounded-lg p-6" style={{ borderColor: '#C29A3B' }}>
              <p className="text-lg italic leading-relaxed" style={{ color: '#003366' }}>
                Cette phase permet d'éviter des approches approximatives et de structurer une
                entrée pertinente sur le marché. Elle constitue également une phase de sélection,
                permettant d'identifier les profils en capacité de s'inscrire dans une logique
                de développement structurée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Content - Light Beige */}
      <section className="relative py-32" style={{ backgroundColor: '#FAF0E6' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#C29A3B' }}>
              Le Programme
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#003366' }}>
              Une approche structurée{" "}
              <span className="font-serif italic" style={{ color: '#C29A3B' }}>du marché</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {programBlocks.map((block, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border border-black/10 hover:border-black/20 transition-all flex gap-4${index === 4 ? ' md:col-span-2' : ''}`}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#003366' }}
                >
                  <block.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium" style={{ color: '#003366' }}>{block.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                    {block.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white border-l-4 rounded-lg p-6" style={{ borderColor: '#C29A3B' }}>
              <p className="text-lg italic leading-relaxed text-center" style={{ color: '#003366' }}>
                Le contenu détaillé du programme est communiqué après validation du profil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - White */}
      <section className="relative bg-white py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#C29A3B' }}>
              Formats & Tarifs
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#003366' }}>
              Deux formats adaptés à votre{" "}
              <span className="font-serif italic" style={{ color: '#C29A3B' }}>niveau d'engagement</span>
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Le programme Immersion est proposé selon deux formats, permettant d'adapter le niveau
              d'approche et de structuration en fonction du projet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard */}
            <div className="bg-white rounded-2xl p-8 border-2 flex flex-col gap-6" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
              <div className="flex flex-col gap-2">
                <p className="text-sm tracking-widest uppercase" style={{ color: '#C29A3B' }}>Format Standard</p>
                <div className="text-4xl font-light" style={{ color: '#003366' }}>à partir de 5 900 €</div>
                <div className="flex gap-4 text-sm mt-2" style={{ color: 'rgba(0,0,0,0.6)' }}>
                  <span>5 jours / 4 nuits</span>
                  <span>·</span>
                  <span>Hébergement 4 étoiles</span>
                </div>
              </div>

              <p className="text-base leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Première approche structurée du marché, permettant de poser les bases d'une
                compréhension cohérente et d'initier une dynamique de projet.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Compréhension des dynamiques du marché",
                  "Identification d'opportunités",
                  "Premières interactions ciblées",
                  "Structuration initiale"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(0,0,0,0.7)' }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#C29A3B' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                <p className="text-sm" style={{ color: 'rgba(0,0,0,0.6)' }}>
                  <span className="font-medium" style={{ color: '#003366' }}>Suivi inclus :</span>{" "}
                  une phase de suivi initiale d'un mois est incluse, permettant de prolonger
                  l'immersion à travers des échanges structurés et des actions concrètes.
                </p>
              </div>
            </div>

            {/* Premium */}
            <div className="rounded-2xl p-8 flex flex-col gap-6 relative" style={{ backgroundColor: '#003366' }}>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#C29A3B', color: 'white' }}>
                Recommandé
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-sm tracking-widest uppercase" style={{ color: '#C29A3B' }}>Format Premium</p>
                <div className="text-4xl font-light text-white">à partir de 9 500 €</div>
                <div className="flex gap-4 text-sm mt-2 text-white/60">
                  <span>6 jours / 5 nuits</span>
                  <span>·</span>
                  <span>Hébergement 5 étoiles</span>
                </div>
              </div>

              <p className="text-base leading-relaxed text-white/80">
                Format conçu pour inscrire l'immersion dans une logique avancée, en lien direct
                avec la structuration du projet et la préparation des phases suivantes.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Approche approfondie du marché et des enjeux",
                  "Accès à des interactions ciblées et qualifiées",
                  "Analyse plus fine des opportunités",
                  "Structuration avancée du projet",
                  "Orientation stratégique vers la suite du programme"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#C29A3B' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                <p className="text-sm text-white/70">
                  <span className="font-medium text-white">Suivi inclus :</span>{" "}
                  une phase de suivi étendue sur deux mois est incluse, permettant d'approfondir
                  le travail engagé et de structurer plus finement le projet.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <div className="bg-white border-l-4 rounded-lg p-6 text-center" style={{ borderColor: '#C29A3B' }}>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Chaque demande fait l'objet d'une étude préalable afin d'adapter le cadre
                d'intervention aux spécificités du projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistical Framework - Light Beige */}
      <section className="relative py-32" style={{ backgroundColor: '#FAF0E6' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#C29A3B' }}>
              Cadre Logistique
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#003366' }}>
              Un cadre entièrement{" "}
              <span className="font-serif italic" style={{ color: '#C29A3B' }}>structuré</span>
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Le programme Immersion s'inscrit dans un cadre organisé et encadré par Saudi Access
              Group, permettant aux participants de se concentrer pleinement sur leur projet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Organisation du séjour et de l'hébergement",
              "Coordination des déplacements et transferts",
              "Encadrement des formalités administratives incluant les visas",
              "Planification des activités et des interactions",
              "Organisation des temps de travail et des échanges",
              "Restauration"
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-5 border border-black/10 flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: '#C29A3B' }} />
                <span className="text-base leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>{item}</span>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10">
            <p className="text-base italic text-center leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
              L'ensemble du programme est structuré dans le respect des cadres réglementaires et
              des conditions en vigueur dans le pays d'accueil.
            </p>
          </div>
        </div>
      </section>

      {/* Selectivity - White */}
      <section className="relative bg-white py-32">
        <div className="max-w-4xl mx-auto px-8">
          <div className="rounded-2xl p-12" style={{ backgroundColor: '#003366' }}>
            <div className="flex flex-col gap-6 text-center">
              <p className="text-sm tracking-widest uppercase" style={{ color: '#C29A3B' }}>
                Accès encadré
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-white">
                Un accès{" "}
                <span className="font-serif italic" style={{ color: '#C29A3B' }}>sélectif</span>
              </h2>
              <p className="text-xl leading-relaxed text-white/80">
                Le programme Immersion s'adresse à des profils souhaitant aborder le marché
                saoudien dans une logique structurée et progressive. Chaque demande fait l'objet
                d'une analyse préalable, afin de garantir la cohérence entre le profil, le projet
                et les conditions d'intervention.
              </p>
              <p className="text-lg leading-relaxed text-white/70 italic">
                Le programme est conçu pour des entrepreneurs et investisseurs inscrivant leur
                démarche dans une logique de développement réelle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                <Link
                  to="/#contact"
                  className="group px-8 py-4 text-white rounded-full transition-all flex items-center gap-2 justify-center hover:opacity-90"
                  style={{ backgroundColor: '#C29A3B' }}
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
        </div>
      </section>

      {/* FAQ - Light Beige */}
      <section className="relative py-32" style={{ backgroundColor: '#FAF0E6' }}>
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#C29A3B' }}>
              Questions Fréquentes
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight" style={{ color: '#003366' }}>
              Vos{" "}
              <span className="font-serif italic" style={{ color: '#C29A3B' }}>questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Les tarifs sont-ils fixes ?",
                a: "Les tarifs indiqués constituent des bases d'intervention et peuvent évoluer selon les spécificités du projet."
              },
              {
                q: "Que comprend le programme Immersion ?",
                a: "Organisation du séjour, hébergement, transports et transferts, encadrement administratif dont visas, activités et interactions, structuration des échanges business."
              },
              {
                q: "Quelle est la durée ?",
                a: "Standard : 5 jours / 4 nuits. Premium : 6 jours / 5 nuits."
              },
              {
                q: "Quel hébergement ?",
                a: "Standard : 4 étoiles. Premium : 5 étoiles."
              },
              {
                q: "Qui peut accéder au programme ?",
                a: "Entrepreneurs et investisseurs, sous analyse préalable du profil."
              },
              {
                q: "Comment se déroule le programme ?",
                a: "Le déroulé détaillé est communiqué après validation du profil."
              },
              {
                q: "Que se passe-t-il après la demande ?",
                a: "Analyse du formulaire, premier échange de 15 minutes, puis second échange plus approfondi si le projet est pertinent. Ce second échange est facturé et déduit en cas d'engagement."
              },
              {
                q: "Saudi Access Group garantit-il l'implantation ?",
                a: "Saudi Access Group structure, coordonne et accompagne les projets ; les décisions finales relèvent des organismes compétents."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg p-6 border border-black/10"
              >
                <summary className="text-lg font-light cursor-pointer list-none flex items-center justify-between" style={{ color: '#003366' }}>
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform" style={{ color: '#C29A3B' }}>▼</span>
                </summary>
                <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
