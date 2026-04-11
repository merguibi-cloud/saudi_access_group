import { Link } from "react-router";

const steps = [
  {
    number: "01",
    title: "Soumettre une demande",
    description: "Remplissez le formulaire de qualification. Présentez brièvement votre projet, votre profil et vos objectifs.",
    duration: "Immédiat",
    side: "right"
  },
  {
    number: "02",
    title: "Analyse du profil",
    description: "Notre équipe étudie votre demande et vérifie la cohérence entre votre projet, votre profil et notre cadre d'intervention.",
    duration: "2 à 5 jours",
    side: "left"
  },
  {
    number: "03",
    title: "Premier échange",
    description: "Un appel de 15 minutes pour qualifier votre projet, comprendre vos objectifs et évaluer la pertinence d'un accompagnement.",
    duration: "15 minutes",
    side: "right"
  },
  {
    number: "04",
    title: "Échange approfondi",
    description: "Si votre projet est pertinent, un second échange structuré permet de définir les conditions d'intervention. Cet échange est facturé et déduit en cas d'engagement.",
    duration: "60 à 90 min",
    side: "left"
  },
  {
    number: "05",
    title: "Accès au programme",
    description: "Les conditions d'intervention sont définies. Vous accédez au système ISI selon la phase adaptée à votre niveau de maturité.",
    duration: "Sous 48h",
    side: "right"
  }
];

export function OnboardingTimeline() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase" style={{ color: '#C9A96E' }}>
            Processus d'accès
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight" style={{ color: '#1A2A3A' }}>
            De la demande à{" "}
            <span className="font-serif italic" style={{ color: '#C9A96E' }}>l'engagement</span>
          </h2>
          <p className="text-xl leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
            Un parcours de qualification structuré, conçu pour garantir la cohérence entre votre
            projet et notre cadre d'intervention.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto w-full">

          {/* Vertical center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: 'rgba(26,42,58,0.12)' }}
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, index) => {
              const isRight = step.side === "right";
              return (
                <div key={index} className="relative flex items-center min-h-[160px]">

                  {/* Center numbered circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-lg"
                      style={{ backgroundColor: '#1A2A3A' }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Left side */}
                  <div className="w-1/2 pr-12 flex justify-end">
                    {!isRight && (
                      <div
                        className="bg-white rounded-xl p-6 border max-w-sm w-full shadow-sm hover:shadow-md transition-all"
                        style={{ borderColor: 'rgba(26,42,58,0.1)' }}
                      >
                        <div
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-3"
                          style={{ backgroundColor: 'rgba(201,169,110,0.12)', color: '#C9A96E' }}
                        >
                          {step.duration}
                        </div>
                        <h3 className="text-lg font-medium mb-2" style={{ color: '#1A2A3A' }}>
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right side */}
                  <div className="w-1/2 pl-12 flex justify-start">
                    {isRight && (
                      <div
                        className="bg-white rounded-xl p-6 border max-w-sm w-full shadow-sm hover:shadow-md transition-all"
                        style={{ borderColor: 'rgba(26,42,58,0.1)' }}
                      >
                        <div
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-3"
                          style={{ backgroundColor: 'rgba(201,169,110,0.12)', color: '#C9A96E' }}
                        >
                          {step.duration}
                        </div>
                        <h3 className="text-lg font-medium mb-2" style={{ color: '#1A2A3A' }}>
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile version — stacked vertical list */}
        <style>{`
          @media (max-width: 768px) {
            .timeline-desktop { display: none !important; }
            .timeline-mobile { display: flex !important; }
          }
          @media (min-width: 769px) {
            .timeline-mobile { display: none !important; }
          }
        `}</style>

        {/* Mobile fallback */}
        <div className="timeline-mobile hidden flex-col gap-6 max-w-xl mx-auto w-full">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-medium shrink-0"
                  style={{ backgroundColor: '#1A2A3A' }}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ backgroundColor: 'rgba(26,42,58,0.12)' }} />
                )}
              </div>
              <div className="pb-6 flex-1">
                <div
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-2"
                  style={{ backgroundColor: 'rgba(201,169,110,0.12)', color: '#C9A96E' }}
                >
                  {step.duration}
                </div>
                <h3 className="text-base font-medium mb-1" style={{ color: '#1A2A3A' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <Link
            to="/#contact"
            className="group px-10 py-4 text-white rounded-full transition-all hover:opacity-90 flex items-center gap-2"
            style={{ backgroundColor: '#1A2A3A' }}
          >
            <span>Soumettre une demande</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <p className="text-sm italic" style={{ color: 'rgba(0,0,0,0.4)' }}>
            Chaque demande est étudiée avec attention. Accès sur sélection.
          </p>
        </div>

      </div>
    </section>
  );
}
