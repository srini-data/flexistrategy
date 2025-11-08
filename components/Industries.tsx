import { industries } from '@/content/site'

export function Industries() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      {industries.map((ind) => (
        <div key={ind.name} className="glass rounded-xl p-5">
          <h3 className="font-semibold">{ind.name}</h3>
          <ul className="mt-2 text-sm text-white/80 list-disc list-inside">
            {ind.uses.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

