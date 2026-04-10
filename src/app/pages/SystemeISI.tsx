import { ArrowRight, Compass, Lightbulb, Building2 } from "lucide-react";
import { Link } from "react-router";

export default function SystemeISI() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col bg-black">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1674386491555-5b92161e4d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxTYXVkaSUyMEFyYWJpYSUyMG1vZGVybiUyMGJ1c2luZXNzJTIwYXJjaGl0ZWN0dXJlJTIwUml5YWRoJTIwY29ycG9yYXRlJTIwc2t5bGluZXxlbnwxfHx8fDE3NzUyMTg4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080')`
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
          <div className="flex flex-col gap-6 max-w-4xl">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#B87333' }}>
              Notre Approche
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
              Le{" "}
              <span className="font-serif italic" style={{ color: '#B87333' }}>système ISI</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Saudi Access Group opère à travers le système ISI, un parcours structuré permettant
              un accès progressif, sélectif et maîtrisé au marché saoudien.
            </p>
          </div>
        </div>
      </section>

      {/* The System Explained - White */}
      <section className="relative bg-white py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#B87333' }}>
              Un Parcours Structuré
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1C1C1E' }}>
              Trois phases{" "}
              <span className="font-serif italic" style={{ color: '#B87333' }}>complémentaires</span>
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
              Le système ISI n'est pas une offre catalogue. C'est un parcours structuré en trois phases
              permettant de transformer une intention en trajectoire lisible et exécutable.
            </p>
          </div>

          {/* Visual Flow */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Phase 1 */}
              <Link
                to="/immersion"
                className="group bg-white rounded-lg p-8 border-2 transition-all hover:shadow-lg"
                style={{ borderColor: '#B87333' }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all group-hover:scale-110" style={{ backgroundColor: 'rgba(194, 154, 59, 0.1)' }}>
                  <Compass className="w-8 h-8" style={{ color: '#B87333' }} />
                </div>
                <div className="text-sm tracking-wider uppercase mb-2" style={{ color: '#B87333' }}>Phase 1</div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#1C1C1E' }}>Immersion</h3>
                <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                  Programme d'entrée permettant une première lecture terrain du marché saoudien
                </p>
              </Link>

              {/* Phase 2 */}
              <Link
                to="/support-strategique"
                className="group bg-white rounded-lg p-8 border-2 transition-all hover:shadow-lg"
                style={{ borderColor: '#1C1C1E' }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all group-hover:scale-110" style={{ backgroundColor: 'rgba(28,28,30,0.1)' }}>
                  <Lightbulb className="w-8 h-8" style={{ color: '#1C1C1E' }} />
                </div>
                <div className="text-sm tracking-wider uppercase mb-2" style={{ color: '#1C1C1E' }}>Phase 2</div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#1C1C1E' }}>Support stratégique</h3>
                <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                  Accompagnement structurant pour définir une trajectoire d'accès au marché
                </p>
              </Link>

              {/* Phase 3 */}
              <Link
                to="/implantation"
                className="group bg-white rounded-lg p-8 border-2 transition-all hover:shadow-lg"
                style={{ borderColor: 'rgba(0,0,0,0.1)' }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all group-hover:scale-110" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
                  <Building2 className="w-8 h-8" style={{ color: '#1C1C1E' }} />
                </div>
                <div className="text-sm tracking-wider uppercase mb-2" style={{ color: 'rgba(0,0,0,0.6)' }}>Phase 3</div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#1C1C1E' }}>Implantation</h3>
                <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                  Coordination premium pour l'établissement d'une présence juridique et opérationnelle
                </p>
              </Link>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 border-l-4" style={{ borderColor: '#B87333' }}>
            <p className="text-xl font-light leading-relaxed" style={{ color: '#1C1C1E' }}>
              Notre rôle n'est pas de vendre une vision ; il est de transformer une intention en trajectoire lisible.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works - Light Beige */}
      <section className="relative py-32" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#B87333' }}>
              Fonctionnement
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1C1C1E' }}>
              Un parcours{" "}
              <span className="font-serif italic" style={{ color: '#B87333' }}>progressif</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-light mb-4" style={{ color: '#1C1C1E' }}>
                Accès sélectif
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                L'entrée dans le système ISI se fait après qualification. Nous priorisons les projets
                avec une réelle volonté de compréhension du marché et une démarche proactive.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-light mb-4" style={{ color: '#1C1C1E' }}>
                Progression modulaire
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Vous pouvez entrer à la phase correspondant à votre niveau de maturité. Il n'est pas
                obligatoire de commencer par l'Immersion si votre projet est déjà structuré.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-light mb-4" style={{ color: '#1C1C1E' }}>
                Coordination continue
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Chaque phase inclut un point de validation avant passage à la suivante. L'objectif
                n'est pas de vous faire avancer rapidement, mais de structurer l'accès avant d'activer le projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For - White */}
      <section className="relative bg-white py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm tracking-widest uppercase" style={{ color: '#B87333' }}>
              Pour Qui
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1C1C1E' }}>
              À qui s'adresse le{" "}
              <span className="font-serif italic" style={{ color: '#B87333' }}>système ISI ?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-light mb-4" style={{ color: '#1C1C1E' }}>Entrepreneurs et dirigeants</h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Qui souhaitent accéder au marché saoudien avec une approche structurée et crédible
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4" style={{ color: '#1C1C1E' }}>Investisseurs et family offices</h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Qui recherchent une lecture opérationnelle du marché avant toute décision d'allocation
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4" style={{ color: '#1C1C1E' }}>Entreprises en expansion</h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Qui nécessitent un accompagnement de bout en bout pour leur développement international
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4" style={{ color: '#1C1C1E' }}>Acteurs du Moyen-Orient</h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(0,0,0,0.7)' }}>
                Qui souhaitent accéder à des marchés partenaires (France, Suisse, Maroc) de manière sélective
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Light Beige */}
      <section className="relative py-32" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white rounded-lg p-12 border-l-4 text-center" style={{ borderColor: '#B87333' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#1C1C1E' }}>
              Présentez votre{" "}
              <span className="font-serif italic" style={{ color: '#B87333' }}>projet</span>
            </h2>
            <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(0,0,0,0.7)' }}>
              L'accès à nos programmes se fait après qualification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="group px-8 py-4 text-white rounded-full transition-all flex items-center gap-2 justify-center hover:opacity-90"
                style={{ backgroundColor: '#1C1C1E' }}
              >
                <span>Soumettre une demande</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/"
                className="px-8 py-4 rounded-full border-2 transition-all flex items-center gap-2 justify-center hover:bg-black/5"
                style={{ borderColor: '#B87333', color: '#1C1C1E' }}
              >
                <span>Retour à l'accueil</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
