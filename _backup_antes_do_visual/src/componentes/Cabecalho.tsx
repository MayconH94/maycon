import { linkWhatsapp } from '../lib/contato'

export function Cabecalho() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white shadow-lg shadow-blue-500/30">
            MM
          </div>
          <span className="text-base font-extrabold tracking-wide text-white">MAYCON / DESENVOLVEDOR DE SOFTWARE</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#projetos"
            className="hidden text-sm font-medium text-slate-300 transition-colors hover:text-white md:inline-block"
          >
            Ver Portfólio
          </a>
          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-500 md:text-sm"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  )
}