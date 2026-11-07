import { projetos } from '../dados/projetos'
import { CartaoProjeto } from './CartaoProjeto'
import { Revelar } from './Revelar'

export function Projetos() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <Revelar>
        <div className="mb-12 text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Soluções entregues</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Meus projetos recentes
          </h2>
          <p className="mt-2 max-w-xl text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
            Veja como ajudo clientes a resolver problemas reais através da tecnologia.
          </p>
        </div>
      </Revelar>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projetos.map((projeto, indice) => (
          <Revelar key={projeto.titulo} atrasoMs={indice * 120} className="h-full">
            <CartaoProjeto projeto={projeto} />
          </Revelar>
        ))}
      </div>
    </section>
  )
}
