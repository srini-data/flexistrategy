import { insights } from '@/content/site'

export function Insights() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
      {insights.map((i) => (
        <article key={i.title} className="group rounded-xl glass p-5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition-all">
          <div className="h-28 w-full rounded-md bg-gradient-to-br from-primary/30 to-accent/30 mb-4 group-hover:from-primary/40 group-hover:to-accent/40 transition-colors" aria-hidden="true" />
          <p className="text-accent text-xs font-medium uppercase tracking-wide">{i.tag}</p>
          <h3 className="mt-1 font-semibold">{i.title}</h3>
          <p className="text-white/70 text-sm mt-1">Download the PDF to explore frameworks, templates, and reference architectures. (Placeholder)</p>
          <div className="mt-3 text-sm">
            <a href="#" className="link">Download</a>
          </div>
        </article>
      ))}
    </div>
  )
}

