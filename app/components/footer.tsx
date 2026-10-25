import { ArrowIcon } from './arrow-icon'

const links = [
  { name: 'GitHub', href: 'https://github.com/andresromerodev' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/andresromerodev' },
  { name: 'Twitter (X)', href: 'https://www.x.com/andresromerodev' },
  { name: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/andresromerodev' },
]

export default function Footer() {
  return (
    <footer className="enter mt-16 mb-16 border-t border-neutral-200 pt-8 text-sm text-neutral-500 [--enter-delay:300ms] dark:border-neutral-800 dark:text-neutral-400">
      {/* Two even columns on phones instead of a 3 + 1 wrap */}
      <ul className="grid grid-cols-2 justify-items-start gap-x-5 gap-y-2 sm:flex sm:flex-wrap">
        {links.map(({ name, href }) => (
          <li key={name}>
            <a
              className="group -m-1 flex items-center gap-2 p-1 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={href}
            >
              <ArrowIcon className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px group-focus-visible:-translate-y-px group-focus-visible:translate-x-px" />
              {name}
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6">
        © {new Date().getFullYear()} Andrés Romero, Costa Rica.
      </p>
    </footer>
  )
}
