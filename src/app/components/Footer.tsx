import { Camera, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera size={24} />
              <span className="text-xl font-semibold">Jeivison Nunes Fotografia</span>
            </div>
            <p className="text-gray-300 mb-4">
              Capturando os momentos mais preciosos da vida com visão artística e excelência profissional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">Início</a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">Sobre</a>
              <a href="#portfolio" className="block text-gray-300 hover:text-white transition-colors">Portfolio</a>
              <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Serviços</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contato</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5511989355826"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle size={16} />
                +55 11 98935-5826 (WhatsApp)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© 2026 Jeivison Nunes Fotografia. Todos os direitos reservados.</p>
          <p>
            Feito por{" "}
            <a
              href="https://wa.me/5511944012837"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-black hover:text-gray-200 transition-colors"
              style={{ fontWeight: 900 }}
            >
              Well
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
