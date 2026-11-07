import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

export type Tema = 'claro' | 'escuro'

const CHAVE_ARMAZENAMENTO = 'tema'

// Quanto a elipse é mais larga do que alta (1 = círculo perfeito)
const PROPORCAO_OVAL = 1.35
const DURACAO_MS = 800

// O script do index.html já aplicou (ou não) a classe "dark" antes do React iniciar
function temaInicial(): Tema {
  return document.documentElement.classList.contains('dark') ? 'escuro' : 'claro'
}

// Ponto da tela de onde a troca de cor começa (o centro do botão clicado)
function origemDaTroca(elemento?: HTMLElement) {
  if (!elemento) return { x: window.innerWidth / 2, y: 0 }
  const caixa = elemento.getBoundingClientRect()
  return { x: caixa.left + caixa.width / 2, y: caixa.top + caixa.height / 2 }
}

// Tamanho final da elipse: o menor que ainda cobre o canto mais distante da tela
function raiosParaCobrirATela(x: number, y: number) {
  const dx = Math.max(x, window.innerWidth - x)
  const dy = Math.max(y, window.innerHeight - y)
  const raioVertical = Math.sqrt((dx / PROPORCAO_OVAL) ** 2 + dy ** 2)
  return { raioHorizontal: raioVertical * PROPORCAO_OVAL, raioVertical }
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

  // "elemento" é o botão clicado: a elipse nasce dele
  const alternarTema = (elemento?: HTMLElement) => {
    const proximo: Tema = tema === 'escuro' ? 'claro' : 'escuro'

    const aplicar = () => {
      document.documentElement.classList.toggle('dark', proximo === 'escuro')
      flushSync(() => setTema(proximo))
    }

    const preferePoucoMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Navegador sem suporte (ou usuário que evita animações): troca direto
    if (!document.startViewTransition || preferePoucoMovimento) {
      aplicar()
      return
    }

    const { x, y } = origemDaTroca(elemento)
    const { raioHorizontal, raioVertical } = raiosParaCobrirATela(x, y)
    const raiz = document.documentElement

    raiz.classList.add('trocando-tema')
    const transicao = document.startViewTransition(aplicar)

    transicao.ready
      .then(() => {
        raiz.animate(
          {
            clipPath: [
              `ellipse(0px 0px at ${x}px ${y}px)`,
              `ellipse(${raioHorizontal}px ${raioVertical}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: DURACAO_MS,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)',
          },
        )
      })
      .catch(() => {
        // transição cancelada: o tema já foi aplicado, nada a fazer
      })

    transicao.finished.finally(() => raiz.classList.remove('trocando-tema'))
  }

  return { tema, alternarTema }
}
