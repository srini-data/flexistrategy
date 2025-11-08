import { process } from '@/content/site'

export function Process() {
  return (
    <ol className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
      {process.map((p, idx) => (
        <li key={p.step} className="glass rounded-xl p-5">
          <div className="text-accent font-semibold">{String(idx + 1).padStart(2, '0')}</div>
          <h3 className="font-semibold mt-1">{p.step}</h3>
          <p className="text-white/80 mt-1 text-sm">{p.desc}</p>
          <div className="mt-4 h-1 w-full bg-white/10 rounded">
            <div className="h-1 bg-gradient-to-r from-primary to-accent rounded" style={{ width: `${((idx + 1) / process.length) * 100}%` }} />
          </div>
        </li>
      ))}
    </ol>
  )
}

