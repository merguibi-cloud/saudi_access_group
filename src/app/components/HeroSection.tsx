import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-black">

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

      <div className="relative z-10 flex-1 flex flex-col justify-center items-center max-w-7xl w-full mx-auto px-8 py-32 gap-12">

        <div className="flex flex-col gap-6 max-w-3xl text-center">

          <p className="text-sm tracking-widest uppercase" style={{ color: '#C9A96E' }}>
            Opérateur d'accès au marché saoudien
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
            Structurer votre accès au{" "}
            <span className="font-serif italic" style={{ color: '#C9A96E' }}>marché saoudien</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl leading-relaxed mx-auto">
            Saudi Access Group accompagne entrepreneurs et investisseurs dans la structuration,
            l'approche et la mise en œuvre de leurs projets en Arabie Saoudite, à travers un cadre
            opérationnel cohérent et progressif.
          </p>

          <p className="text-base text-white/50 max-w-2xl leading-relaxed mx-auto italic">
            Accédez à un environnement en transformation à travers une approche structurée, sélective
            et adaptée aux réalités du terrain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="group px-8 py-4 text-white rounded-full transition-all flex items-center gap-2 justify-center hover:opacity-90"
              style={{ backgroundColor: '#1A2A3A' }}
            >
              <span>Soumettre une demande</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/systeme-isi"
              className="group px-8 py-4 bg-transparent text-white rounded-full transition-all flex items-center gap-2 justify-center border-2 hover:bg-white/5"
              style={{ borderColor: '#C9A96E' }}
            >
              <span>Découvrir le système ISI</span>
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full" style={{ backgroundColor: '#C9A96E' }} />
          </div>
        </div>
      </div>

      <div className="relative z-10 backdrop-blur-sm border-t border-white/10 mx-auto" style={{ backgroundColor: 'rgba(26,42,58,0.3)' }}>
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-wrap gap-6 text-xs text-white/50 uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C9A96E' }} />
              Riyadh
            </span>
            <span>Jeddah</span>
            <span>Dubai</span>
            <span>Paris</span>
          </div>
        </div>
      </div>
    </section>
  );
}