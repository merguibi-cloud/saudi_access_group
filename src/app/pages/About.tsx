import { Building2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function About() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex flex-col bg-black">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN0YXJ0dXAlMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1MjMzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080')`
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(28,28,30,0.85) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.95) 100%)'
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(28,28,30,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
            }}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl w-full mx-auto px-8 py-32">
          <div className="flex flex-col gap-6 max-w-3xl">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#B87333' }}>
              À Propos
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
              Une structure dédiée à{" "}
              <span className="font-serif italic" style={{ color: '#B87333' }}>l'accès au marché saoudien</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Saudi Access Group accompagne la structuration et l'exécution de projets dans un
              environnement en transformation, à travers un cadre opérationnel maîtrisé.
            </p>
          </div>
        </div>
      </section>

      {/* Story - White Background */}
      <section className="relative bg-white py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#B87333' }}>
              Notre Histoire
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1C1C1E' }}>
              Récit{" "}
              <span className="font-serif italic" style={{ color: '#B87333' }}>fondateur</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Saudi Access Group a été fondé en 2024, dans un contexte de forte croissance de
              l'intérêt pour le marché saoudien.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Face à une demande croissante, de nombreux entrepreneurs et investisseurs exprimaient
              une volonté d'accès au marché, sans en maîtriser les dimensions administratives,
              culturelles et business.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Ce décalage entre opportunité perçue et réalité du terrain a constitué le point de
              départ de Saudi Access Group.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              La structure est née de la complémentarité entre Abdallah G. et Abdoulaye K., tous deux
              régulièrement sollicités sur des problématiques liées à l'accès au marché saoudien.
            </p>
            <div className="bg-white rounded-lg p-8 border-l-4" style={{ borderColor: '#B87333' }}>
              <p className="text-xl font-light leading-relaxed" style={{ color: '#1C1C1E' }}>
                Saudi Access Group s'inscrit dans une logique de structuration de l'accès et de
                création de passerelles entre marchés. L'objectif est de faciliter un accès structuré,
                sécurisé et cohérent au marché saoudien, tout en développant des ponts entre l'Arabie
                Saoudite et d'autres environnements internationaux.
              </p>
            </div>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Cette approche s'adresse à des profils capables d'inscrire leur démarche dans une
              logique de développement structurée.
            </p>
          </div>
        </div>
      </section>

      {/* Founders - Light Beige */}
      <section className="relative py-32" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#B87333' }}>
              Les Fondateurs
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1C1C1E' }}>
              Une expertise{" "}
              <span className="font-serif italic" style={{ color: '#B87333' }}>complémentaire</span>
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Saudi Access Group repose sur l'association de deux expertises complémentaires,
              articulant connaissance terrain et structuration stratégique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-black/10">
              <div className="w-24 h-24 rounded-full mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #B87333 0%, #1C1C1E 100%)' }}>
                <span className="text-white text-3xl font-light">AG</span>
              </div>
              <h3 className="text-2xl font-light mb-2" style={{ color: '#1C1C1E' }}>Abdallah G.</h3>
              <div className="text-sm tracking-wider uppercase mb-4" style={{ color: '#B87333' }}>Expert terrain & Coordinateur local</div>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Présent en Arabie Saoudite depuis plus d'une décennie, il s'appuie sur une connaissance
                approfondie des dynamiques locales et un réseau structuré couvrant des environnements
                institutionnels, juridiques et économiques. Son approche permet d'identifier les leviers
                pertinents et d'orienter les projets dans des conditions adaptées au marché.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-black/10">
              <div className="w-24 h-24 rounded-full mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #B87333 0%, #1C1C1E 100%)' }}>
                <span className="text-white text-3xl font-light">AK</span>
              </div>
              <h3 className="text-2xl font-light mb-2" style={{ color: '#1C1C1E' }}>Abdoulaye K.</h3>
              <div className="text-sm tracking-wider uppercase mb-4" style={{ color: '#B87333' }}>Structuration & Développement</div>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Il intervient sur les dimensions de structuration, de développement et de relationnel.
                Il s'appuie sur une capacité d'analyse, de négociation et d'intégration dans des
                environnements complexes, lui permettant d'accompagner les projets dans leur
                structuration et leur déploiement. Son rôle consiste à articuler les opportunités
                identifiées avec une approche cohérente et opérationnelle.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white border-l-4 rounded-lg p-6" style={{ borderColor: '#B87333' }}>
              <p className="text-lg leading-relaxed text-center" style={{ color: '#1C1C1E' }}>
                Cette complémentarité permet à Saudi Access Group d'articuler vision stratégique,
                compréhension du terrain et capacité d'exécution. Elle constitue le socle d'une
                approche orientée vers le développement structuré de projets et la création de
                passerelles durables entre marchés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Framework - White */}
      <section className="relative bg-white py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#B87333' }}>
              Cadre Légal
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1C1C1E' }}>
              Un cadre{" "}
              <span className="font-serif italic" style={{ color: '#B87333' }}>structuré</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Saudi Access Group s'appuie sur une structure juridique enregistrée en Arabie Saoudite,
              opérant dans un cadre réglementaire conforme aux exigences locales. L'entité est
              immatriculée auprès du Ministry of Investment (MISA) et intervient depuis Riyad dans
              un environnement structuré, en lien avec les autorités compétentes et les acteurs locaux.
            </p>
            <p className="text-lg leading-relaxed mb-12" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Cette structuration permet d'inscrire les projets dans un cadre cohérent, sécurisé et
              conforme aux réalités réglementaires.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Building2, label: "Entité légale", value: "Access Digital Bridge" },
                { icon: Building2, label: "Forme juridique", value: "Société à responsabilité limitée (LLC)" },
                { icon: MapPin, label: "Localisation", value: "Riyad, Arabie Saoudite" },
                { icon: Building2, label: "Autorité d'enregistrement", value: "Ministry of Investment (MISA)" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-lg p-6 border border-black/10">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(194,154,59,0.1)' }}>
                    <item.icon className="w-5 h-5" style={{ color: '#B87333' }} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm uppercase tracking-wider" style={{ color: '#B87333' }}>{item.label}</span>
                    <span className="text-base font-medium" style={{ color: '#1C1C1E' }}>{item.value}</span>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 bg-white rounded-lg p-6 border border-black/10 md:col-span-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(194,154,59,0.1)' }}>
                  <Building2 className="w-5 h-5" style={{ color: '#B87333' }} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm uppercase tracking-wider" style={{ color: '#B87333' }}>Statut</span>
                  <span className="text-base font-medium" style={{ color: '#1C1C1E' }}>Actif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Light Beige */}
      <section className="relative py-32" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center mb-12">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#B87333' }}>
              Une approche structurée
            </p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ color: '#1C1C1E' }}>
              Découvrir le{" "}
              <span className="font-serif italic" style={{ color: '#B87333' }}>système ISI</span>
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Saudi Access Group développe une approche fondée sur la structuration de l'accès au
              marché et la coordination des projets dans des environnements exigeants. À travers le
              système ISI, la structure propose un cadre progressif permettant d'aborder le marché
              saoudien de manière cohérente, de structurer les projets et d'en assurer la mise en
              œuvre.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/systeme-isi"
              className="group px-8 py-4 text-white rounded-full transition-all flex items-center gap-2 justify-center hover:opacity-90"
              style={{ backgroundColor: '#1C1C1E' }}
            >
              <span>Découvrir le système ISI</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/#contact"
              className="px-8 py-4 rounded-full border-2 transition-all flex items-center gap-2 justify-center hover:bg-black/5"
              style={{ borderColor: '#B87333', color: '#1C1C1E' }}
            >
              <span>Soumettre une demande</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
