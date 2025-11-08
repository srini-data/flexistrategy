"use client"
import Link from 'next/link'
import { contacts } from '@/content/site'

export function ContactCTA() {
  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold">Talk to an expert</h3>
          <p className="text-white/80 mt-2 max-w-2xl">Tell us about your goals. We’ll share practical options and how we’d approach it — from quick assessments to standing up your next‑gen data and AI platform.</p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a className="focus-ring inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-medium text-ink hover:bg-primary-dark transition-colors" href={`mailto:${contacts.email}?subject=Strategy%20Session%20Request`}>Email us</a>
            <Link className="focus-ring inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 font-medium hover:bg-white/10 transition-colors" href="#">Connect on LinkedIn</Link>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 p-4 text-sm bg-white/5">
          <p className="font-medium text-white">No backend form yet</p>
          <p className="text-white/80 mt-1">This static site uses a mailto link. To enable forms later, connect any form service or add a lightweight API route.</p>
          <form className="mt-4 grid gap-3" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 focus-ring" placeholder="Your name" aria-label="Your name" />
            <input className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 focus-ring" placeholder="Email" type="email" aria-label="Email" />
            <textarea className="w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 focus-ring" placeholder="What would you like to achieve?" rows={3} aria-label="Message" />
            <button className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition-colors" type="submit">Preview (no send)</button>
          </form>
        </div>
      </div>
    </div>
  )
}
