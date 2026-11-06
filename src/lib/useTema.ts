import { useEffect, useState } from 'react'

export type Tema = 'claro' | 'escuro'

const CHAVE_ARMAZENAMENTO = 'tema'

// O script do index.html já aplicou (ou não) a classe "dark" antes do React iniciar
function temaInicial(): Tema {
  return document.documentElement.classList.contains('dark') ? 'escuro' : 'claro'
}

export function useTema() {
  const [tema, setTema] = useState<Tema>(temaInicial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', tema === 'escuro')
    try {
      localStorage.setItem(CHAVE_ARMAZENAMENTO, tema)
    } catch {
      // armazenamento indisponível (modo privado, por exemplo): ignora
    }
  }, [tema])

  const alternarTema = () => setTema((atual) => (atual === 'escuro' ? 'claro' : 'escuro'))

  return { tema, alternarTema }
}
