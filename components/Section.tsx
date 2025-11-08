type Props = {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: React.ReactNode
}

export function Section({ id, eyebrow, title, subtitle, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto">
        {eyebrow && <p className="text-accent font-medium">{eyebrow}</p>}
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-white/80 max-w-3xl">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

