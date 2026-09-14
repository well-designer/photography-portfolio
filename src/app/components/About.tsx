import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Camera, Award, Users } from "lucide-react"
import aboutImage from "../../imports/ChatGPT_Image_14_de_set._de_2026__02_45_40.jpg"

export function About() {
  const stats = [
    {
      icon: Camera,
      value: "200+",
      label: "Projetos Realizados"
    },
    {
      icon: Award,
      value: "5+",
      label: "Anos de Experiência"
    },
    {
      icon: Users,
      value: "150+",
      label: "Clientes Satisfeitos"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Content */}
          <div>
            <h2 className="text-4xl mb-6">Sobre mim</h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Olá, sou o Jeivison mas pode me chamar de Jay! Tenho mais de 5 anos de experiência
                em fotografia profissional, a Jeivison Nunes Fotografia se especializa em capturar
                a essência de cada momento. De retratos pessoais a grandes celebrações, trazemos
                visão artística e expertise técnica a cada projeto.
              </p>
              <p>
                Nossa abordagem combina narrativa criativa com atenção meticulosa aos detalhes,
                garantindo que cada fotografia não apenas documente um evento, mas conte uma história
                envolvente que será apreciada por gerações.
              </p>
              <p>
                Acreditamos que uma ótima fotografia vai além de simplesmente tirar fotos — trata-se
                de compreender a visão de nossos clientes e dar vida a ela através de nossas lentes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-lg mb-2">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-2xl font-semibold text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-full min-h-[400px]">
            <div className="h-full rounded-lg overflow-hidden">
              <ImageWithFallback
                src={aboutImage}
                alt="Jeivison Nunes - Fotógrafo Profissional"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
