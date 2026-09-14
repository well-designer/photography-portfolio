const brands = [
  {
    name: "Vivara",
    svg: (
      <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="50%" y="34" textAnchor="middle" fontFamily="Georgia, serif" fontSize="28" fontWeight="400" letterSpacing="6" fill="currentColor">VIVARA</text>
      </svg>
    )
  },
  {
    name: "Ana Capri",
    svg: (
      <svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="50%" y="34" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fontWeight="300" letterSpacing="5" fill="currentColor">ANA CAPRI</text>
      </svg>
    )
  },
  {
    name: "Delight",
    svg: (
      <svg viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="50%" y="36" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="700" letterSpacing="2" fill="currentColor">delight</text>
      </svg>
    )
  },
  {
    name: "Visual Jeans",
    svg: (
      <svg viewBox="0 0 230 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="50%" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="800" letterSpacing="4" fill="currentColor">VISUAL</text>
        <text x="50%" y="44" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="300" letterSpacing="8" fill="currentColor">JEANS</text>
      </svg>
    )
  },
  {
    name: "A Niemeyer",
    svg: (
      <svg viewBox="0 0 220 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="50%" y="22" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fontWeight="400" letterSpacing="6" fill="currentColor">A</text>
        <text x="50%" y="44" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="400" letterSpacing="4" fill="currentColor">NIEMEYER</text>
      </svg>
    )
  },
  {
    name: "Cor Doce",
    svg: (
      <svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <text x="50%" y="34" textAnchor="middle" fontFamily="Georgia, serif" fontSize="26" fontWeight="300" letterSpacing="5" fill="currentColor">COR DOCE</text>
      </svg>
    )
  },
]

export function Clients() {
  return (
    <section className="py-16 border-t border-b border-gray-100 overflow-hidden bg-white">
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">
          Marcas com quem já trabalhei
        </p>
      </div>

      <div className="relative flex">
        {/* Gradient fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        {/* Gradient fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex marquee-track">
          {/* First set */}
          {brands.map((brand, i) => (
            <div
              key={`a-${i}`}
              className="flex items-center justify-center mx-12 text-gray-800 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              title={brand.name}
            >
              {brand.svg}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {brands.map((brand, i) => (
            <div
              key={`b-${i}`}
              className="flex items-center justify-center mx-12 text-gray-800 opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
              title={brand.name}
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
