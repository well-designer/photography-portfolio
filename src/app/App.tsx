import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Portfolio } from "./components/Portfolio"
import { Services } from "./components/Services"
import { Clients } from "./components/Clients"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}