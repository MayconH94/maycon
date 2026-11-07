import { Cabecalho } from './componentes/Cabecalho'
import { Hero } from './componentes/Hero'
import { Projetos } from './componentes/Projetos'
import { BannerFinal } from './componentes/BannerFinal'
import { Rodape } from './componentes/Rodape'

export default function App() {
  return (
    // "isolate" cria um contexto próprio: sem ele, os fundos com -z-10 ficam
    // escondidos atrás do fundo da div e nunca aparecem.
    <div className="relative isolate min-h-screen overflow-hidden bg-white text-zinc-900 antialiased transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Grade de fundo */}
      <div className="fundo-grade pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]" />

      <Cabecalho />
      <Hero />
      <Projetos />
      <BannerFinal />
      <Rodape />
    </div>
  )
}
