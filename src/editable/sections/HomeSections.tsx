import Link from 'next/link'
import { ArrowRight, RadioTower, Search, Send, ShieldCheck } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableExcerpt, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function TextPostCard({ post, href, index, large = false }: { post: SitePost; href: string; index: number; large?: boolean }) {
  return (
    <Link href={href} className={`editable-card editable-animate group flex min-h-full flex-col border border-black bg-white p-5 ${large ? 'sm:p-7' : ''}`}>
      <div className="flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-[0.18em] text-black/45">
        <span>Dispatch</span>
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className={`mt-5 font-black leading-tight tracking-[-0.03em] group-hover:text-black ${large ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{post.title}</h3>
      <p className="mt-4 line-clamp-4 text-sm leading-7 text-black/62">{getEditableExcerpt(post, large ? 220 : 155)}</p>
      <span className="mt-auto pt-6 text-xs font-black uppercase tracking-[0.16em] text-[var(--slot4-accent)]">Read update</span>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const heroTitle = pagesContent.home.hero.title.join(' ') || `${SITE_CONFIG.name}: media distribution and public updates.`
  const briefs = posts.slice(1, 4)

  return (
    <section className="bg-white">
      <div className="editable-parallax border-b border-black bg-[linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.28)),url('/placeholder.svg?height=900&width=1600')] bg-cover bg-center text-white">
        <div className={`${dc.shell.section} grid min-h-[520px] items-end py-16 lg:grid-cols-[1fr_340px] lg:gap-12`}>
          <div className="editable-reveal pb-4">
            <p className="inline-flex bg-[var(--slot4-accent)] px-3 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-black">{pagesContent.home.hero.badge}</p>
            <h1 className={`${dc.type.heroTitle} mt-6 max-w-3xl`}>{lead?.title || heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">{lead ? getEditableExcerpt(lead, 210) : pagesContent.home.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={lead ? postHref(primaryTask, lead, primaryRoute) : primaryRoute} className={dc.button.accent}>Open lead update <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/search" className="border border-white/45 px-7 py-3.5 text-xs font-black uppercase tracking-[0.12em] hover:bg-white hover:text-black">Search archive</Link>
            </div>
          </div>
          <aside className="editable-animate border border-white/25 bg-black/55 p-6 backdrop-blur">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">Live distribution lane</p>
            <div className="mt-5 grid gap-4">
              {[
                ['Release pickup', 'Source notes and campaign updates stay easy to scan.'],
                ['Audience routing', 'Posts move readers toward archive, search, and contact actions.'],
                ['Real post feed', 'Homepage and archive surfaces use dynamic published content.'],
              ].map(([title, body], index) => (
                <div key={title} className="border-t border-white/20 pt-4">
                  <p className="text-sm font-black">{String(index + 1).padStart(2, '0')} / {title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/62">{body}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
      {briefs.length ? (
        <div className={`${dc.shell.section} grid border-x border-black md:grid-cols-3`}>
          {briefs.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="editable-card editable-animate border-b border-r border-black bg-white p-5 last:border-r-0">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--slot4-accent)]">Priority {index + 1}</p>
              <h2 className="mt-3 line-clamp-2 text-xl font-black leading-tight">{post.title}</h2>
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(4, 10).length ? posts.slice(4, 10) : posts
  if (!railPosts.length) return null
  return (
    <section className="bg-[var(--slot4-page-bg)]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="flex items-end justify-between gap-6 border-b-4 border-black pb-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[.23em] text-[var(--slot4-accent)]">The distribution board</p>
            <h2 className="mt-2 text-4xl font-black tracking-[-.035em]">Latest media updates</h2>
          </div>
          <Link href={primaryRoute} className="hidden text-xs font-black uppercase tracking-[.14em] hover:text-[var(--slot4-accent)] sm:inline-flex">View all <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {railPosts.map((post, index) => <TextPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[10] || posts[0]
  const supporting = posts.slice(11, 15).length ? posts.slice(11, 15) : posts.slice(1, 5)
  if (!feature) return null
  return (
    <section className="bg-[#222222] text-white">
      <div className={`${dc.shell.section} py-14 sm:py-20`}>
        <div className="grid gap-px bg-white/20 lg:grid-cols-[1.15fr_.85fr]">
          <div className="editable-animate bg-[#222222] p-7 sm:p-10">
            <p className="text-[10px] font-black uppercase tracking-[.24em] text-[var(--slot4-accent)]">Campaign focus</p>
            <h2 className="mt-4 max-w-xl text-5xl font-black leading-[.98] tracking-[-.035em]">Distribution notes with room to breathe.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">The homepage keeps post cards text-only for fast scanning, while archive and detail pages still support media-rich layouts.</p>
            <Link href={postHref(primaryTask, feature, primaryRoute)} className="mt-8 inline-flex bg-[var(--slot4-accent)] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-black">Open feature</Link>
          </div>
          <TextPostCard post={feature} href={postHref(primaryTask, feature, primaryRoute)} index={0} large />
        </div>
        <div className="mt-6 grid gap-px bg-white/20 md:grid-cols-2 lg:grid-cols-4">
          {supporting.map((post, index) => <TextPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 1} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts.slice(3)
  const briefs = source.slice(0, 6)
  if (!briefs.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <aside className="editable-animate border border-black bg-[var(--slot4-accent)] p-7 text-black lg:sticky lg:top-44 lg:self-start">
            <RadioTower className="h-10 w-10" />
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-.035em]">Syndication rhythm, without the visual noise.</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-black/70">Cards on the homepage intentionally show titles and summaries only. Visitors can open a post for detail imagery and complete media context.</p>
          </aside>
          <div>
            <div className="border-b-4 border-black pb-4">
              <p className="text-[10px] font-black uppercase tracking-[.23em] text-[var(--slot4-accent)]">Quick reads</p>
              <h2 className="mt-2 text-4xl font-black tracking-[-.035em]">More to discover</h2>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {briefs.map((post, index) => <TextPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </div>
        </div>
        <form action="/search" className="mt-14 grid border-y-4 border-black bg-[var(--slot4-page-bg)] p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
          <div>
            <h3 className="text-3xl font-black tracking-[-.035em]">Search the full media archive</h3>
            <p className="mt-2 text-sm text-black/60">Explore every {taskLabel(primaryTask).toLowerCase()} published by {SITE_CONFIG.name}.</p>
          </div>
          <label className="mt-5 flex border border-black bg-white sm:mt-0 sm:min-w-[420px]">
            <Search className="ml-4 mt-4 h-4 w-4" />
            <input name="q" placeholder="Search media updates" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
            <button className="bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em] text-black">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-black text-white">
      <div className={`${dc.shell.section} grid gap-px bg-white/25 lg:grid-cols-3`}>
        {[
          [ShieldCheck, 'Verified narrative', 'Keep release copy, categories, and summaries clear before readers enter the detail page.'],
          [Send, 'Distribution action', 'Route visitors toward search, contact, signup, or the publishing workspace with functional buttons.'],
          [RadioTower, 'Live media desk', 'Real posts feed the archive and homepage instead of static mock content.'],
        ].map(([Icon, title, body]) => {
          const TypedIcon = Icon as typeof ShieldCheck
          return (
            <div key={title as string} className="editable-card editable-animate bg-black px-6 py-12 sm:px-8">
              <TypedIcon className="h-8 w-8 text-[var(--slot4-accent)]" />
              <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-.035em]">{title as string}</h2>
              <p className="mt-4 text-sm leading-7 text-white/65">{body as string}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
