import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

interface PropriedadesRevelar {
  children: ReactNode
  atrasoMs?: number
  className?: string
}

// Faz o conteúdo surgir suavemente quando ele entra na tela ao rolar a página
export function Revelar({ children, atrasoMs = 0, className = '' }: PropriedadesRevelar) {
  const referencia = useRef<HTMLDivElement>(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const elemento = referencia.current
    if (!elemento) return

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          observador.disconnect() // anima só na primeira vez
        }
      },
      { threshold: 0.15 },
    )

    observador.observe(elemento)
    return () => observador.disconnect()
  }, [])

  return (
    <div
      ref={referencia}
      className={`revelar ${visivel ? 'visivel' : ''} ${className}`}
      style={{ '--atraso': `${atrasoMs}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
