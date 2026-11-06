import type { CSSProperties } from 'react'
import { linkWhatsapp } from '../lib/contato'
import { IconeCheck, IconeMensagem, IconeSetaBaixo } from './Icones'

const selosDeConfianca = [
  'Design 100% Adaptável para Celulares',
  'Otimizado para o Google (SEO)',
  'Código Rápido e Seguro',
]

// Define o atraso da animação de entrada de cada bloco
const atraso = (ms: number) => ({ '--atraso': `${ms}ms` }) as CSSProperties

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-20 text-center sm:pt-28">
      {/* Etiqueta de disponibilidade */}
      <div
        className="entrada mb-8 inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300"
        style={atraso(0)}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
        </span>
        Disponível para novos projetos freelance
      </div>

      {/* Título principal */}
      <h1
        className="entrada max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white"
        style={atraso(100)}
      >
        Multiplique seus lucros com uma{' '}
        <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent dark:from-white dark:via-zinc-300 dark:to-zinc-500">
          máquina de vendas digital.
        </span>
      </h1>

      {/* Subtítulo */}
      <p
        className="entrada mt-7 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400"
        style={atraso(200)}
      >
        Desenvolvo <strong className="font-medium text-zinc-900 dark:text-zinc-200">Landding Pages</strong> e{' '}
        <strong className="font-medium text-zinc-900 dark:text-zinc-200">sistemas sob medida</strong> para alavancar
        os seus <strong className="font-medium text-zinc-900 dark:text-zinc-200">negócios</strong> e automatizar sua{' '}
        <strong className="font-medium text-zinc-900 dark:text-zinc-200">empresa</strong>.
      </p>

      {/* Botões */}
      <div className="entrada mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row" style={atraso(300)}>
        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-[0.98] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          <IconeMensagem />
          Falar no WhatsApp
        </a>
        <a
          href="#projetos"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          Ver Projetos Realizados
          <IconeSetaBaixo className="text-zinc-400 dark:text-zinc-500" />
        </a>
      </div>

      {/* Selos de confiança */}
      <ul
        className="entrada mt-16 flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-zinc-200 pt-8 dark:border-zinc-900"
        style={atraso(420)}
      >
        {selosDeConfianca.map((texto) => (
          <li key={texto} className="inline-flex items-center gap-2 text-xs text-zinc-500 sm:text-sm dark:text-zinc-400">
            <IconeCheck width={14} height={14} className="text-zinc-400 dark:text-zinc-500" />
            {texto}
          </li>
        ))}
      </ul>
    </section>
  )
}
