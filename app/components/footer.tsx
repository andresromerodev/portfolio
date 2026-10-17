function ArrowIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

const links = [
  { name: 'GitHub', href: 'https://github.com/andresromerodev' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/andresromerodev' },
  { name: 'Twitter (X)', href: 'https://www.x.com/andresromerodev' },
  { name: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/andresromerodev' },
]

export default function Footer() {
  return (
    <footer className="enter mt-16 mb-16 border-t border-neutral-200 pt-8 text-sm text-neutral-500 [--enter-delay:300ms] dark:border-neutral-800 dark:text-neutral-400">
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map(({ name, href }) => (
          <li key={name}>
            <a
              className="group flex items-center gap-2 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={href}
            >
              <ArrowIcon />
              {name}
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
