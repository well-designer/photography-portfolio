import { useEffect, useRef } from "react"
import { Camera, Heart, Users, Shirt, Building, Baby } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Fotografia de Casamento",
    description: "Cobertura completa do casamento, do ensaio à festa, capturando cada momento especial do seu grande dia.",
    features: ["Consulta pré-casamento", "Cobertura dia todo", "Galeria digital", "Opções de impressão"]
  },
  {
    icon: Camera,
    title: "Sessões de Retrato",
    description: "Fotografia de retratos profissional para pessoas, casais e famílias em estúdio ou ao ar livre.",
    features: ["Estúdio ou locação externa", "Troca de figurinos", "Retoque profissional", "Imagens em alta resolução"]
  },
  {
    icon: Users,
    title: "Fotografia de Eventos",
    description: "Eventos corporativos, festas e celebrações registrados com profissionalismo e talento artístico.",
    features: ["Suporte ao planejamento", "Fotos espontâneas e posadas", "Entrega rápida", "Imagens para redes sociais"]
  },
  {
    icon: Shirt,
    title: "Moda",
    description: "Fotografia editorial e de moda que valoriza cada detalhe — do conceito ao clique final, com direção criativa e olhar apurado para tendências.",
    features: ["Editoriais para marcas", "Lookbook e catálogo", "Direção criativa", "Imagens para campanhas"]
  },
  {
    icon: Building,
    title: "Fotografia Comercial",
    description: "Fotografia profissional para empresas, produtos e materiais de marketing.",
    features: ["Fotografia de produtos", "Headshots corporativos", "Materiais de marketing", "Identidade visual"]
  },
  {
    icon: Baby,
    title: "Fotografia de Lifestyle",
    description: "Fotografia natural e espontânea que captura momentos reais e emoções autênticas.",
    features: ["Sessões em família", "Fotografia gestante", "Retratos newborn", "Branding lifestyle"]
  }
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="service-card group bg-white rounded-xl p-6 border border-gray-100 cursor-default"
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <service.icon size={24} />
      </div>
      <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.description}</p>
      <ul className="space-y-1.5">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center text-sm text-gray-500">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Bottom accent line */}
      <div className="mt-5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">O que ofereço</p>
          <h2 className="text-4xl font-light mb-4">Serviços</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Ofereço uma gama completa de serviços fotográficos adaptados às suas necessidades.
            Cada trabalho é entregue com o mais alto nível de profissionalismo e criatividade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .service-card {
          opacity: 0;
          transform: translate3d(0, 32px, 0);
          transition: opacity 0.6s ease, transform 0.6s ease,
                      box-shadow 0.3s ease;
          will-change: opacity, transform;
          backface-visibility: hidden;
        }
        .service-card[data-visible="true"] {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        .service-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.10);
          transform: translate3d(0, -4px, 0) !important;
        }
      `}</style>
    </section>
  )
}
