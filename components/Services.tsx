import { services } from '@/content/site'

export function Services() {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {services.map((s) => (
        <div key={s.title} className="glass rounded-xl p-5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-all">
          <div className="flex items-start gap-3">
            <span className="inline-block h-8 w-8 rounded bg-gradient-to-br from-primary to-accent flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-white/80 mt-1">{s.desc}</p>
            </div>
          </div>
          <ul className="mt-4 grid gap-2 text-sm text-white/80 list-disc list-inside">
            {s.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

