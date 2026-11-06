import { useTema } from '../lib/useTema'
import { IconeLua, IconeSol } from './Icones'

export function BotaoTema() {
  const { tema, alternarTema } = useTema()
  const escuro = tema === 'escuro'
  const rotulo = escuro ? 'Ativar modo claro' : 'Ativar modo escuro'

  return (
    <button
      type="button"
      onClick={alternarTema}
      aria-label={rotulo}
      title={rotulo}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 active:scale-95 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
    >
      {escuro ? <IconeSol /> : <IconeLua />}
    </button>
  )
}
