import { Button } from "./ui/button"
import heroImage from "../../imports/ChatGPT_Image_14_de_set._de_2026__02_50_10.png"

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Jeivison Nunes Fotografia - Fotógrafo Profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-6">Jeivison Nunes Fotografia</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Capturando os momentos mais preciosos da vida com visão artística e excelência profissional
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToPortfolio}
            className="bg-white text-black hover:bg-gray-100"
          >
            Ver Portfolio
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-white text-white hover:bg-white hover:text-black"
          >
            Entrar em Contato
          </Button>
        </div>
      </div>
    </section>
  )
}
