import { ArrowIcon } from './arrow-icon'

const links = [
  { name: 'GitHub', href: 'https://github.com/andresromerodev' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/andresromerodev' },
  { name: 'Twitter (X)', href: 'https://www.x.com/andresromerodev' },
  { name: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/andresromerodev' },
]

export default function Footer() {
  return (
    <footer className="enter mt-auto border-t border-neutral-200 pt-10 pb-12 [--enter-delay:300ms] sm:pt-12 sm:pb-16 dark:border-neutral-800">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        {/* Two even columns on phones instead of a 3 + 1 wrap */}
        <ul className="grid grid-cols-2 justify-items-start gap-x-6 gap-y-3 text-base text-neutral-600 sm:flex sm:flex-wrap sm:gap-x-8 sm:text-lg dark:text-neutral-400">
          {links.map(({ name, href }) => (
            <li key={name}>
              <a
                className="group -m-1 flex items-center gap-2 p-1 tracking-tight transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href={href}
              >
                {name}
                <ArrowIcon
                  size={10}
                  className="text-neutral-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-current group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 dark:text-neutral-600"
                />
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="font-mono text-xs text-neutral-500 sm:text-sm dark:text-neutral-500">
          © {new Date().getFullYear()} Andrés Romero, Costa Rica.
        </p>
      </div>
    </footer>
  )
}
