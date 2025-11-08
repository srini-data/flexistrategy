export function Footer() {
  return (
    <footer className="mt-24 sm:mt-32 border-t border-white/10/ glass">
      <div className="container-px max-w-screen-c py-10 text-sm text-white/70 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block h-6 w-6 rounded bg-gradient-to-br from-primary to-accent" aria-hidden="true" />
          <span>FlexiStrategy.ai</span>
          <span className="hidden sm:inline">• Future‑ready AI, data & cloud strategy</span>
        </div>
        <div className="flex gap-4">
          <a className="link" href="#services">Services</a>
          <a className="link" href="#how">How we work</a>
          <a className="link" href="#insights">Insights</a>
          <a className="link" href="#contact">Contact</a>
        </div>
        <div className="text-white/50">© {new Date().getFullYear()} FlexiStrategy.ai</div>
      </div>
    </footer>
  )
}

