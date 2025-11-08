import { differentiators } from '@/content/site'

export function Differentiators() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
      {differentiators.map((d) => (
        <div key={d.title} className="rounded-xl glass p-5">
          <h3 className="font-semibold">{d.title}</h3>
          <p className="text-white/80 mt-2">{d.desc}</p>
        </div>
      ))}
    </div>
  )
}

