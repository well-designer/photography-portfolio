import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { MessageCircle } from "lucide-react"

export function Contact() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511989355826", "_blank")
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pronto para capturar seus momentos especiais? Fale comigo pelo WhatsApp e vamos
            criar algo incrível juntos.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageCircle className="text-primary" size={24} />
                WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Clique no botão abaixo para iniciar uma conversa diretamente no WhatsApp.
                Respondemos rapidamente!
              </p>
              <Button onClick={handleWhatsApp} className="w-full" size="lg">
                <MessageCircle size={20} className="mr-2" />
                +55 11 98935-5826
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
