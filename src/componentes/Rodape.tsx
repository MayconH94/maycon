import { linkWhatsapp } from '../lib/contato'
import { IconeWhatsapp } from './Icones'
import { Logo } from './Logo'

export function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="font-destaque border-t border-zinc-200 dark:border-zinc-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo />
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">© {ano} Maycon Herbert. Todos os direitos reservados.</p>
        </div>

        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 transition-colors hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white"
        >
          <IconeWhatsapp />
          WhatsApp
        </a>
      </div>
    </footer>
  )
}
