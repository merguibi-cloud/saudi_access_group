import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-24 h-24 rounded-full border-2 flex items-center justify-center mx-auto mb-8" style={{ borderColor: '#B87333', backgroundColor: 'rgba(194, 154, 59, 0.1)' }}>
          <span className="text-6xl font-light" style={{ color: '#B87333' }}>?</span>
        </div>

        <h1 className="text-8xl font-light mb-4" style={{ color: '#1C1C1E' }}>404</h1>
        <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#1C1C1E' }}>
          Page{" "}
          <span className="font-serif italic" style={{ color: '#B87333' }}>introuvable</span>
        </h2>
        <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(0,0,0,0.7)' }}>
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="group px-8 py-4 text-white rounded-full transition-all flex items-center gap-2 justify-center hover:opacity-90"
            style={{ backgroundColor: '#1C1C1E' }}
          >
            <Home className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 rounded-full border-2 transition-all flex items-center gap-2 justify-center hover:bg-black/5"
            style={{ borderColor: '#B87333', color: '#1C1C1E' }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Page précédente</span>
          </button>
        </div>

        <div className="pt-12 border-t" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
          <p className="text-sm tracking-wider uppercase mb-4" style={{ color: '#B87333' }}>Liens utiles</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/immersion" className="text-lg transition-colors" style={{ color: 'rgba(0,0,0,0.7)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#B87333'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0,0,0,0.7)'}>
              Programme Immersion
            </Link>
            <Link to="/isi" className="text-lg transition-colors" style={{ color: 'rgba(0,0,0,0.7)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#B87333'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0,0,0,0.7)'}>
              Implantation (ISI)
            </Link>
            <Link to="/smap" className="text-lg transition-colors" style={{ color: 'rgba(0,0,0,0.7)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#B87333'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0,0,0,0.7)'}>
              Accompagnement (SMAP)
            </Link>
            <Link to="/about" className="text-lg transition-colors" style={{ color: 'rgba(0,0,0,0.7)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#B87333'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0,0,0,0.7)'}>
              À propos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
