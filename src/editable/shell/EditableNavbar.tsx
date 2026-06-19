'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, LogOut, Menu, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const mediaRoute = SITE_CONFIG.taskViews.mediaDistribution || SITE_CONFIG.tasks.find((item) => item.key === 'mediaDistribution')?.route || '/media-distribution'
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Media Distribution', href: mediaRoute },
    { label: 'Archive', href: '/search' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const handleMobileClick = (label: string) => {
    setOpen(false)
    if (label === 'Logout') logout()
  }

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-[0_1px_0_rgba(0,0,0,.12)] transition-all duration-300">
      <div className="bg-[#444854] text-white">
        <div className="mx-auto flex min-h-9 max-w-[var(--editable-container)] items-center justify-between px-4 text-[11px] font-bold sm:px-6 lg:px-0">
          <div className="hidden gap-6 sm:flex">
            <span>Media distribution desk</span>
            
          </div>
          <div className="ml-auto flex gap-5">
            <Link href="/search" className="hover:text-[var(--slot4-accent)]">Search</Link>
            <Link href="/contact" className="hover:text-[var(--slot4-accent)]">Support</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid min-h-[96px] max-w-[var(--editable-container)] grid-cols-[auto_1fr_auto] items-center gap-5 px-4 sm:px-6 lg:px-0">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-black/25 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link href="/" className="group flex max-w-[50vw] items-center gap-3 sm:max-w-none">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[var(--slot4-accent)] text-[var(--slot4-accent)]">
              <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
            </span>
            <span className="editorial-brand truncate text-3xl font-black leading-none sm:text-5xl">{SITE_CONFIG.name}</span>
          </Link>
        </div>

        <div className="hidden items-center justify-center gap-7 lg:flex">
          {[
            ['Verified pickup', 'Distribution-ready'],
            ['Fast syndication', 'Multi-channel'],
            ['Certified', 'Editorial review'],
          ].map(([title, body]) => (
            <div key={title} className="border-l border-black/10 pl-5">
              <p className="flex items-center gap-1 text-sm font-bold"><CheckCircle2 className="h-4 w-4" /> {title}</p>
              <p className="mt-1 text-xs text-black/55">{body}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-4">
          {session ? (
            <div className="hidden items-center gap-3 sm:flex">
              <Link href="/create" className="bg-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-black">Create</Link>
              <span className="inline-flex max-w-32 items-center gap-2 truncate text-xs font-black uppercase tracking-[.1em]"><UserRound className="h-4 w-4" /> {session.name}</span>
              <button type="button" onClick={logout} className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-[.12em] hover:text-[var(--slot4-accent)]"><LogOut className="h-4 w-4" /> Logout</button>
            </div>
          ) : (
            <div className="hidden items-center gap-3 sm:flex">
              <Link href="/login" className="text-xs font-black uppercase tracking-[.12em] hover:text-[var(--slot4-accent)]">Log in</Link>
              <Link href="/signup" className="bg-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-black sm:px-6">Sign up</Link>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#222222] text-white">
        <div className="mx-auto flex min-h-[60px] max-w-[var(--editable-container)] items-center px-4 sm:px-6 lg:px-0">
          <nav className="hidden items-center lg:flex">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href} className={`editable-nav-link border-l border-white/10 px-5 py-5 text-xs font-black uppercase tracking-[.08em] ${index === 0 ? 'bg-[var(--slot4-accent)] text-black' : 'hover:text-[var(--slot4-accent)]'}`}>
                {item.label}
              </Link>
            ))}
          </nav>
          <form action="/search" className="ml-auto flex min-w-0 flex-1 items-center border-l border-white/20 lg:max-w-[270px] lg:flex-none">
            <Search className="ml-4 h-4 w-4 text-white/65" />
            <input name="q" type="search" placeholder="Search the archive" className="min-w-0 flex-1 bg-transparent px-3 py-4 text-xs font-bold outline-none placeholder:text-white/45" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/15 bg-[var(--slot4-surface-bg)] px-4 py-4 lg:hidden">
          <div className="grid gap-px bg-black/15">
            {[...navItems, ...(session ? [{ label: `Signed in: ${session.name}`, href: '/create' }, { label: 'Logout', href: '#' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => handleMobileClick(item.label)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
