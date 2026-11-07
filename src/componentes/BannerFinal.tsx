import { linkWhatsapp } from '../lib/contato'
import { IconeWhatsapp } from './Icones'
import { Revelar } from './Revelar'

export function BannerFinal() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-8">
      <Revelar>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-14 text-center sm:px-12 dark:border-zinc-800 dark:bg-zinc-900/50">
          {/* Brilho sutil no topo */}
          <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-zinc-900/5 blur-3xl dark:bg-white/5" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-
            bold text-emerald-700 dark:border-emerald-400/20 dark:text-emerald-400">
              Orçamento sem compromisso
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Tem uma ideia de app ou precisa de um site que realmente venda?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
              Conte o que você precisa e receba uma proposta feita sob medida para o seu negócio, direto com o
              desenvolvedor.
            </p>

            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-700 active:scale-[0.98] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <IconeWhatsapp />
              Iniciar conversa no WhatsApp
            </a>

            <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-zinc-500">
              Cada projeto é único. Por isso, o valor é definido depois de entender a sua necessidade.
            </p>
          </div>
        </div>
      </Revelar>
    </section>
  )
}
