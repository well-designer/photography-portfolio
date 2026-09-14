import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo from "../../imports/ChatGPT_Image_14_de_set._de_2026__03_01_19.png"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo Jeivison Nunes Fotografia"
            className="h-9 w-9 object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
          <span className="text-xl font-semibold">Jeivison Nunes Fotografia</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
            Início
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
            Sobre
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">
            Serviços
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
            Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-primary transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left hover:text-primary transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-primary transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors">
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
