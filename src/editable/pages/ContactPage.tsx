'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Release desk', body: 'Send press releases, source notes, corrections, and supporting publication material.' },
  { icon: Megaphone, title: 'Distribution partners', body: 'Discuss syndication, newsroom collaborations, PR campaigns, and media pickup.' },
  { icon: Mail, title: 'Account support', body: 'Reach the team for login, publishing workspace, archive, or submission help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f5f2ec] text-[#111]">
        <section className="border-b border-black bg-white">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-black/45">{pagesContent.contact.eyebrow}</p>
            <h1 className="editorial-brand mt-4 max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.055em] sm:text-8xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl border-l-4 border-[var(--slot4-accent)] pl-5 text-base font-semibold leading-8 text-black/65">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] border-x border-black bg-white lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="border-b border-black bg-[#222222] text-white lg:border-b-0 lg:border-r">
            {desks.map((desk, index) => (
              <div key={desk.title} className="border-b border-white/25 p-7 last:border-b-0 sm:p-9">
                <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[var(--slot4-accent)]" /><span className="text-xs font-black text-white/45">0{index + 1}</span></div>
                <h2 className="editorial-serif mt-6 text-3xl font-black">{desk.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/65">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="p-6 sm:p-10 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-black/45">Send a message</p>
            <h2 className="editorial-serif mt-3 text-4xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
