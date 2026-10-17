'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/uses': {
    name: 'Uses',
  },
  'https://andresromerodev.notion.site/Andr-s-Romero-1c7e5808a418431b8df0dd4fa63c25ba': {
    name: 'Resume',
  },
  '/blog': {
    name: 'Blog',
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
                'px-2 py-1 transition-colors duration-200',
                active
                  ? 'text-neutral-900 dark:text-neutral-100'
                  : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
              )}
            >
              {name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
