import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { Services } from '@/components/Services'
import { Differentiators } from '@/components/Differentiators'
import { Process } from '@/components/Process'
import { Industries } from '@/components/Industries'
import { Insights } from '@/components/Insights'
import { Leadership } from '@/components/Leadership'
import { ContactCTA } from '@/components/ContactCTA'

export const dynamic = 'force-static'

export default function Page() {
  return (
    <div className="space-y-24 sm:space-y-32 py-12 sm:py-16">
      <Hero />

      <Section id="services" title="Offerings" eyebrow="What we do" subtitle="End‑to‑end coverage across AI, data, and cloud — from strategy to implementation and ongoing optimization.">
        <Services />
      </Section>

      <Section id="why" title="Why FlexiStrategy.ai" eyebrow="Differentiators" subtitle="Vendor‑neutral advisory, proven playbooks, and a pragmatic path from POC to scale.">
        <Differentiators />
      </Section>

      <Section id="how" title="How We Work" eyebrow="Engagement models" subtitle="A simple, outcome‑oriented approach that meets you where you are.">
        <Process />
      </Section>

      <Section id="industries" title="Industries & Use Cases" eyebrow="Where we help" subtitle="We partner across sectors to unlock value with modern data and AI.">
        <Industries />
      </Section>

      <Section id="insights" title="Insights & Resources" eyebrow="Thought leadership" subtitle="Practical guides and blueprints to accelerate your journey.">
        <Insights />
      </Section>

      <Section id="about" title="About" eyebrow="Leadership" subtitle="Experienced leaders in data platforms, AI solutions, and cloud transformations.">
        <Leadership />
      </Section>

      <Section id="contact" title="Let’s Talk" eyebrow="Contact" subtitle="Book a strategy session or drop us a note—no pressure, just practical guidance.">
        <ContactCTA />
      </Section>
    </div>
  )
}

