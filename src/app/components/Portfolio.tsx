import { useEffect, useRef, useState, useCallback } from "react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

import img1 from "../../imports/SaveClip.App_791757607_18048379157805082_6469463151585922982_n.jpg"
import img2 from "../../imports/SaveClip.App_788792810_18048379058805082_4059978955870858348_n.jpg"
import img3 from "../../imports/SaveClip.App_792912242_18048378995805082_455242337830249419_n.jpg"
import img4 from "../../imports/SaveClip.App_791296402_18048378920805082_4503822308913530502_n.jpg"
import img5 from "../../imports/SaveClip.App_789370738_18048378878805082_5426987752283497701_n.jpg"
import img6 from "../../imports/SaveClip.App_758563063_18043119770805082_1655141478271934806_n.jpg"
import img7 from "../../imports/SaveClip.App_759558797_18043119701805082_8095004515545596778_n.jpg"
import img8 from "../../imports/15122024-0U4A1932Covadep_20_07202420-07-24.jpg"
import img9 from "../../imports/15122024-0U4A2078Covadep_20_07202420-07-24-1.jpg"
import img10 from "../../imports/EDITADAS.EM_267.jpg"
import img11 from "../../imports/Vanessa_08_08_2600120.jpg"
import img12 from "../../imports/Vanessa_08_08_2600258_1.jpg"
import img13 from "../../imports/EDITADAS.EM_142.jpg"
import img14 from "../../imports/EDITADAS.EM_4.jpg"
import img15 from "../../imports/EDITADAS.EM_253.jpg"

const images = [
  { src: img1,  rowSpan: 2 },
  { src: img2,  rowSpan: 1 },
  { src: img3,  rowSpan: 1 },
  { src: img4,  rowSpan: 1 },
  { src: img5,  rowSpan: 2 },
  { src: img6,  rowSpan: 1 },
  { src: img7,  rowSpan: 1 },
  { src: img8,  rowSpan: 1 },
  { src: img9,  rowSpan: 2 },
  { src: img10, rowSpan: 1 },
  { src: img11, rowSpan: 1 },
  { src: img12, rowSpan: 2 },
  { src: img13, rowSpan: 1 },
  { src: img14, rowSpan: 1 },
  { src: img15, rowSpan: 1 },
]

function PortfolioItem({
  src,
  index,
  rowSpan,
  onClick,
}: {
  src: string
  index: number
  rowSpan: number
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "true"
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="portfolio-item overflow-hidden bg-gray-100 cursor-pointer group"
      style={{
        gridRow: `span ${rowSpan}`,
        transitionDelay: `${(index % 3) * 100}ms`,
      }}
      onClick={onClick}
    >
      <ImageWithFallback
        src={src}
        alt={`Portfolio ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
    </div>
  )
}

export function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prev = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i - 1 + images.length) % images.length))
  }, [])

  const next = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i + 1) % images.length))
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightboxIndex, prev, next])

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Trabalhos</p>
          <h2 className="text-4xl font-light">Portfolio</h2>
        </div>

        <div className="grid grid-cols-3 gap-2" style={{ gridAutoRows: "300px" }}>
          {images.map((img, i) => (
            <PortfolioItem
              key={i}
              src={img.src}
              index={i}
              rowSpan={img.rowSpan}
              onClick={() => openLightbox(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 p-2"
            onClick={e => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <img
            src={images[lightboxIndex].src}
            alt={`Portfolio ${lightboxIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain select-none"
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 p-2"
            onClick={e => { e.stopPropagation(); next() }}
          >
            <ChevronRight size={40} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}

      <style>{`
        .portfolio-item {
          opacity: 0;
          transform: translate3d(0, 36px, 0);
          transition: opacity 0.75s ease, transform 0.75s ease;
          will-change: opacity, transform;
          backface-visibility: hidden;
        }
        .portfolio-item[data-visible="true"] {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      `}</style>
    </section>
  )
}
