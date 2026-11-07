import { linkWhatsapp } from '../lib/contato'

const selosDeConfianca = [
  'Design 100% Adaptável para Celulares',
  'Otimizado para o Google (SEO)',
  'Código Rápido e Seguro',
]

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 pt-20 text-center">
      {/* Etiqueta de disponibilidade */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-400">
        <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
        Disponível para novos projetos freelance
      </div>

      {/* Título principal */}
      <h1 className="max-w-4xl text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-6xl">
            Multiplique seus lucros com uma{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(99,102,241,0.3)]">
            máquina de vendas digital.
            </span>
        </h1>

      {/* Subtítulo */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Desenvolvo <strong className="text-slate-200">Landing Pages</strong> e{' '}
            <strong className="text-slate-200">sistemas sob medida</strong> para alavancar os seus{' '}
            <strong className="text-slate-200">negócios</strong> e automatizar sua{' '}
            <strong className="text-slate-200">empresa</strong>.
        </p>

      {/* Botões */}
      <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="botao-pulsante inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-600/25 transition-all hover:bg-emerald-500"
        >
          <span>💬</span> Falar com Maycon no WhatsApp
        </a>
        <a
          href="#projetos"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-bold text-slate-200 transition-all hover:bg-slate-800"
        >
          Conhecer Projetos Realizados ↓
        </a>
      </div>

      {/* Selos de confiança */}
      <div className="mt-14 grid w-full grid-cols-1 gap-6 border-t border-slate-900 pt-8 text-xs text-slate-400 sm:grid-cols-3 sm:text-sm">
        {selosDeConfianca.map((texto) => (
          <div key={texto} className="flex items-center justify-center gap-2">
            <span className="font-bold text-emerald-400">✓</span> {texto}
          </div>
        ))}
      </div>
    </section>
  )
}