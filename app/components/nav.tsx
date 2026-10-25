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
    <aside className="mb-16 tracking-tight">
      <nav className="-ml-2 flex flex-row gap-2" id="nav">
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
                'px-2 py-1',
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
