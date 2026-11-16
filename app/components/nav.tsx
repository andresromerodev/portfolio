'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowIcon } from './arrow-icon'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/uses': {
    name: 'Uses',
  },
  '/blog': {
    name: 'Blog',
  },
  'https://andresromerodev.notion.site/Andr-s-Romero-1c7e5808a418431b8df0dd4fa63c25ba': {
    name: 'Resume',
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

function isActive(pathname: string, path: string) {
  if (path === '/') {
    return pathname === '/'
  }
  return pathname === path || pathname.startsWith(`${path}/`)
}

export function Navbar() {
  let pathname = usePathname()

  useEffect(() => {
    // Once the first page has played in, client-side navigations get a short,
    // unstaggered fade instead (see global.css). Must outlast the footer's 300ms + 600ms.
    let timer = setTimeout(() => document.documentElement.setAttribute('data-entered', ''), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <aside className="enter mb-16 flex items-center justify-between border-b border-neutral-200 py-6 tracking-tight sm:mb-24 sm:py-8 dark:border-neutral-800">
      <Link
        href="/"
        aria-label="Home"
        className="hidden font-mono text-sm text-neutral-400 transition-colors duration-200 hover:text-neutral-900 sm:block dark:text-neutral-600 dark:hover:text-neutral-100"
      >
        {'</>'}
      </Link>
      <nav className="-mx-2 flex flex-row gap-1 text-[15px] sm:-mr-3 sm:gap-2 sm:text-base" id="nav">
        {Object.entries(navItems).map(([path, { name }]) => {
          let external = path.startsWith('http')
          let active = !external && isActive(pathname, path)

          return (
            <Link
              key={path}
              href={path}
              aria-current={active ? 'page' : undefined}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className={cx(
                'relative px-2 py-1 sm:px-3',
                // Active page gets a small dot underneath instead of just darker text
                active &&
                  'after:absolute after:-bottom-1 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-current',
                external && 'group inline-flex items-center gap-[3px]',
                // Only inactive links ease, so the new active link snaps on navigation
                active
                  ? 'text-neutral-900 dark:text-neutral-100'
                  : 'text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
              )}
            >
              {name}
              {external && (
                <>
                  <ArrowIcon
                    size={8}
                    className="-translate-y-px transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-px"
                  />
                  <span className="sr-only"> (opens in new tab)</span>
                </>
              )}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
