import { leadership } from '@/content/site'

export function Leadership() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
      {leadership.map((m) => (
        <div key={m.name} className="glass rounded-xl p-5 flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" aria-hidden="true" />
          <div>
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-white/80 text-sm mt-1">{m.bio}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

