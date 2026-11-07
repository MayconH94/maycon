import { linkWhatsapp } from '../lib/contato'
import { BotaoTema } from './BotaoTema'
import { Logo } from './Logo'

export function Cabecalho() {
  return (
    <header className="font-destaque sticky top-0 z-40 border-b border-zinc-200 bg-white/70 backdrop-blur-xl dark:border-zinc-900 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <Logo />
          <span className="text-base font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Maycon
            <span className="hidden font-medium text-zinc-600 sm:inline dark:text-zinc-400"> / Desenvolvedor de Software</span>
          </span>
        </a>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="#projetos"
            className="hidden text-sm font-semibold text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white md:inline-block"
          >
            Ver Portfólio
          </a>
          <BotaoTema />
          <a
            href={linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-zinc-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-zinc-700 active:scale-[0.98] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 md:text-sm"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  )
}
