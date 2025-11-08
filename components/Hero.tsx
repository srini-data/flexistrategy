import Link from 'next/link'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden rounded-2xl hero-gradient border border-white/10 bg-grid">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float" aria-hidden="true" />
      <div className="absolute -bottom-20 -right-28 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-float" aria-hidden="true" />
      <div className="container-px max-w-screen-c py-16 sm:py-24 relative">
        <p className="text-accent/80 font-semibold">FlexiStrategy.ai</p>
        <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
          Flexible, end‑to‑end AI & data strategy. From idea to impact.
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl">
          We cover the full umbrella of cloud, data, and AI — strategy, implementation, and advisory. Start with an assessment or POC and scale with confidence.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href="#contact" className="focus-ring inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-medium text-ink hover:bg-primary-dark transition-colors">
            Book a Strategy Session
          </Link>
          <a href="#insights" className="focus-ring inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 font-medium hover:bg-white/10 transition-colors">
            Download Capability Deck
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/70">
          <div className="glass rounded-lg p-4">
            <p className="font-medium text-white">Cloud • Data • AI</p>
            <p>Unified strategy and delivery across your stack.</p>
          </div>
          <div className="glass rounded-lg p-4">
            <p className="font-medium text-white">Vendor‑neutral</p>
            <p>Advice driven by outcomes, not contracts.</p>
          </div>
          <div className="glass rounded-lg p-4">
            <p className="font-medium text-white">Proven playbooks</p>
            <p>Reference architectures and accelerators to go faster.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

