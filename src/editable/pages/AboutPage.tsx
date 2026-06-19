import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f5f2ec] text-[#111]">
        <section className="editable-parallax border-b border-black bg-[linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.28)),url('/favicon.ico?height=760&width=1500')] bg-cover bg-center text-white">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="inline-flex bg-[var(--slot4-accent)] px-3 py-2 text-xs font-black uppercase tracking-[0.28em] text-black">{pagesContent.about.badge}</p>
            <h1 className="editorial-brand mt-5 max-w-5xl text-6xl font-black leading-[0.92] tracking-[-0.055em] sm:text-8xl">
              Media distribution with an editorial backbone.
            </h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-[var(--editable-container)] border-x border-black bg-white lg:grid-cols-[1.45fr_0.55fr]">
          <article className="border-b border-black p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-16">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-black/45">About {SITE_CONFIG.name}</p>
            <p className="editorial-serif mt-6 text-3xl font-bold leading-[1.25] sm:text-4xl">{pagesContent.about.description}</p>
            <div className="article-content mt-10 space-y-6">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid bg-[#f5f2ec]">
            {pagesContent.about.values.map((value, index) => (
              <div key={value.title} className="editable-card border-b border-black p-7 last:border-b-0 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">0{index + 1}</p>
                <h2 className="editorial-serif mt-4 text-3xl font-black leading-tight">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-black/65">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>

        <section className="border-y border-black bg-[#222222] text-white">
          <div className="mx-auto flex max-w-[var(--editable-container)] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <h2 className="editorial-brand max-w-3xl text-4xl font-black leading-none sm:text-5xl">Explore the releases shaping public attention.</h2>
            <Link href="/search" className="inline-flex w-fit bg-[var(--slot4-accent)] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-black">Explore the archive</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
