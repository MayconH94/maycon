import { Cabecalho } from './componentes/Cabecalho'
import { Hero } from './componentes/Hero'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 antialiased">
      {/* Brilho de fundo */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[350px] w-[700px] -translate-x-1/2 bg-gradient-to-tr from-blue-600/20 to-indigo-600/10 blur-[130px]" />

      <Cabecalho />
      <Hero />
    </div>
  )
}