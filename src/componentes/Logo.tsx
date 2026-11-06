// Logo da marca: o "M" dentro de uma tag de código  <M/>
export function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Logo Maycon"
      className={`inline-flex h-9 items-center rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 font-mono text-sm font-bold tracking-tight text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white ${className}`}
    >
      <span className="text-zinc-400 dark:text-zinc-500">&lt;</span>M
      <span className="text-zinc-400 dark:text-zinc-500">/&gt;</span>
    </span>
  )
}
