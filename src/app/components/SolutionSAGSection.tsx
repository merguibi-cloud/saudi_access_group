import { Link } from "react-router";

export function SolutionSAGSection() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col gap-16">

        <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase" style={{ color: '#C9A96E' }}>
            Notre Approche
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1A2A3A' }}>
            Structurer l'accès pour{" "}
            <span className="font-serif italic" style={{ color: '#C9A96E' }}>mieux opérer</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <p className="text-xl leading-relaxed text-center" style={{ color: 'rgba(0,0,0,0.7)' }}>
            Face à ces enjeux, une approche structurée devient essentielle. Saudi Access Group a
            développé le système ISI, un cadre stratégique conçu pour permettre aux entrepreneurs
            et investisseurs d'aborder le marché saoudien de manière progressive, cohérente et
            opérationnelle.
          </p>

          <p className="text-xl leading-relaxed text-center" style={{ color: 'rgba(0,0,0,0.7)' }}>
            Ce système s'articule autour d'un programme structuré, permettant d'accompagner les
            projets depuis leur compréhension initiale jusqu'à leur mise en œuvre concrète.
            L'approche globale constitue un levier déterminant pour inscrire les projets dans une
            logique de développement maîtrisé.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Link
              to="/systeme-isi"
              className="group px-8 py-4 text-white rounded-full transition-all hover:opacity-90 text-center"
              style={{ backgroundColor: '#1A2A3A' }}
            >
              Découvrir le système ISI
            </Link>
            <Link
              to="/#contact"
              className="px-8 py-4 rounded-full border-2 transition-all hover:bg-black/5 text-center"
              style={{ borderColor: '#C9A96E', color: '#1A2A3A' }}
            >
              Soumettre une demande
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
