import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import abdallahImage from "../../assets/ea208604cb4ee5771e12e3685d659e45ecbbb6a7.png";
import abdoulayeImage from "../../assets/8e0771d06b35808432f2cdd628dcd5be58acc206.png";
import teamImage from "../../assets/027b46feb5b9831294bb741e9c38ceee7642765f.png";

/* ELEMENTOR CONVERSION NOTES:
 * - Section: Background White, Padding: 128px 0
 * - Use Elementor Carousel widget or create manual slider with 3 cards
 * - Cards: Clean corporate style with subtle borders
 * - Desktop: 3 cards visible, Tablet: 2 cards, Mobile: 1 card
 * - Navigation: Custom arrow buttons (Deep Blue circles)
 * - Dots: Custom styling with Gold SAG active state
 * - Card Structure: Image (384px height) + Content section with gap
 * - Images: Use figma:asset imports or replace with WordPress media
 * - Color Scheme: Deep Blue (#1A2A3A) and Gold SAG (#C9A96E)
 */

const founders = [
  {
    id: 1,
    name: "Abdallah Ghrab",
    title: "Co-Fondateur",
    description: "Compréhension concrète du marché saoudien et réseau local structuré",
    image: abdallahImage
  },
  {
    id: 2,
    name: "L'équipe Saudi Access Group",
    title: "Basée à Riyadh",
    description: "Accompagnement terrain et mise en œuvre opérationnelle",
    image: teamImage
  },
  {
    id: 3,
    name: "Abdoulaye Koulibaly",
    title: "Co-Fondateur",
    description: "Approche structurée et complémentarité opérationnelle",
    image: abdoulayeImage
  }
];

// ELEMENTOR: Custom Arrow Components - Use HTML widgets or Button widgets with Deep Blue background
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg transition-all group"
      style={{ backgroundColor: '#1A2A3A' }}
    >
      <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg transition-all group"
      style={{ backgroundColor: '#1A2A3A' }}
    >
      <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform" />
    </button>
  );
}

export function FoundersSection() {
  // ELEMENTOR: Carousel Settings - Replicate with Elementor Carousel widget
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    appendDots: (dots: any) => (
      <div className="mt-12">
        <ul className="flex items-center justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 rounded-full bg-black/20 hover:bg-[#C9A96E] transition-all" />
    )
  };

  return (
    <section className="relative bg-white py-32 overflow-hidden">

      {/* ELEMENTOR: Container - Max Width: 1920px, Padding: 0 32px */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 md:px-8">

        {/* ELEMENTOR: Header Section - Text Align Center, Margin Bottom: 64px */}
        <div className="flex flex-col gap-6 items-center text-center mb-16 max-w-4xl mx-auto">
          {/* ELEMENTOR: Text widget - Gold SAG (#C9A96E), Uppercase, Letter Spacing 0.2em */}
          <p className="text-sm tracking-widest uppercase" style={{ color: '#C9A96E' }}>
            Les Fondateurs
          </p>

          {/* ELEMENTOR: Heading (H2) - Font Size: 48px (Desktop), 36px (Mobile), Deep Blue */}
          <h2 className="text-4xl md:text-5xl font-light leading-tight" style={{ color: '#1A2A3A' }}>
            Une approche fondée sur{" "}
            <span className="font-serif italic" style={{ color: '#C9A96E' }}>le réseau</span>{" "}
            et la{" "}
            <span className="font-serif italic" style={{ color: '#C9A96E' }}>complémentarité</span>
          </h2>

          {/* ELEMENTOR: Text Editor - Black 70%, Font Size: 18px */}
          <p className="text-lg leading-relaxed max-w-3xl" style={{ color: 'rgba(0,0,0,0.7)' }}>
            Saudi Access Group a été fondé par Abdoulaye Koulibaly et Abdallah Ghrab, réunissant une compréhension
            concrète du marché saoudien, un réseau local structuré et une forte complémentarité opérationnelle.
            Leur approche repose sur une vision simple : faciliter l'accès au marché, tout en accompagnant des projets
            de manière structurée et réaliste.
          </p>
        </div>

        {/* ELEMENTOR: Carousel Container - Use Posts Carousel or Slides widget */}
        {/* Padding: 0 80px (Desktop), 0 48px (Tablet), 0 16px (Mobile) */}
        <div className="px-4 md:px-12 lg:px-20">
          <Slider {...settings}>
            {founders.map((founder) => (
              <div key={founder.id} className="px-2">
                <div className="group">

                  {/* ELEMENTOR: Card - Background white, Border Gray 10%, Rounded: 16px */}
                  {/* Hover: Border color changes to Deep Blue */}
                  <div
                    className="bg-white border-2 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg"
                    style={{ borderColor: 'rgba(0,0,0,0.1)' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#1A2A3A'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'}
                  >

                    {/* ELEMENTOR: Image Container - Height: 384px, Overflow hidden */}
                    <div className="relative h-96 overflow-hidden">
                      {/* ELEMENTOR: Image widget - Cover fit, Hover: Scale 105% */}
                      {/* Image URL: Replace with WordPress Media Library */}
                      <ImageWithFallback
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* ELEMENTOR: Gradient Overlay - Deep Blue gradient for brand consistency */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(to top, rgba(26,42,58,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
                        }}
                      />
                    </div>

                    {/* ELEMENTOR: Content Section - Padding: 32px, Flexbox Column, Gap: 8px */}
                    <div className="p-8 flex flex-col gap-3">
                      {/* ELEMENTOR: Heading (H3) - Font Size: 24px, Deep Blue */}
                      <h3 className="text-2xl font-light" style={{ color: '#1A2A3A' }}>
                        {founder.name}
                      </h3>
                      {/* ELEMENTOR: Text widget - Gold SAG, Uppercase, Font Size: 14px */}
                      <p className="text-sm uppercase tracking-wider" style={{ color: '#C9A96E' }}>
                        {founder.title}
                      </p>
                      {/* ELEMENTOR: Text widget - Black 60%, Font Size: 14px */}
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
                        {founder.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* ELEMENTOR: Custom CSS for carousel dots styling - Gold SAG active state */}
      <style>{`
        .slick-dots li button:before {
          display: none;
        }
        .slick-dots li.slick-active button {
          background-color: #C9A96E;
          width: 2rem;
        }
      `}</style>
    </section>
  );
}