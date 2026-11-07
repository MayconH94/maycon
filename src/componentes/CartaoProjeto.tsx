import type { Projeto } from '../dados/projetos'
import { IconeCheck, IconeSetaDiagonal } from './Icones'

export function CartaoProjeto({ projeto }: { projeto: Projeto }) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:shadow-black/30">
      <div>
        {/* Imagem do projeto */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <img
            src={projeto.imagem}
            alt={`Prévia do projeto ${projeto.titulo}`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5 dark:ring-white/10" />
        </div>

        <div className="px-2 pt-4">
          {/* Benefícios */}
          <ul className="flex flex-wrap gap-1.5">
            {projeto.beneficios.map((beneficio) => (
              <li
                key={beneficio}
                className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
              >
                <span className=''>
                <IconeCheck width={11} height={11} strokeWidth={2.5} className="text-emerald-600 dark:text-emerald-400" />
                </span>
                {beneficio}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs font-medium text-zinc-500">{projeto.categoria}</p>
          <h3 className="mt-1 text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-white">
            {projeto.titulo}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{projeto.descricao}</p>
        </div>
      </div>

      {/* Ação */}
      <div className="mt-6 border-t border-zinc-200 px-2 pb-1 pt-4 dark:border-zinc-800">
        {projeto.linkDemo ? (
          <a
            href={projeto.linkDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
          >
            Ver demonstração online
            <IconeSetaDiagonal width={14} height={14} />
          </a>
        ) : (
          <span className="text-sm text-zinc-400 dark:text-zinc-500">Demonstração em breve</span>
        )}
      </div>
    </article>
  )
}
