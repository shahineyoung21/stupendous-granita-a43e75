import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#features', label: 'المميزات' },
  { href: '#how-it-works', label: 'كيف تعمل' },
  { href: '#trust', label: 'التوافق والامتثال' },
  { href: '#pricing', label: 'الخطط' },
  { href: '#faq', label: 'الأسئلة الشائعة' },
]

function FalconMark() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-8 w-8"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="19" stroke="var(--signal)" strokeWidth="1.5" />
      <path
        d="M20 6 L31 20 L20 34 L9 20 Z"
        stroke="var(--signal)"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M20 12 L20 28 M14 20 L26 20" stroke="var(--signal)" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2.5" fill="var(--signal)" />
    </svg>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--void-line)] bg-[var(--void)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <FalconMark />
          <span
            className="text-xl font-bold tracking-wide text-[var(--ink)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            SAQR<span className="text-[var(--signal)]">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--ink-dim)] transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-md border border-[var(--signal)] px-4 py-2 text-sm font-medium text-[var(--signal)] transition-colors hover:bg-[var(--signal)] hover:text-[var(--void)] lg:inline-block"
        >
          اطلب عرضًا تجريبيًا
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-[var(--void-line)] p-2 text-[var(--ink)] lg:hidden"
          aria-label="فتح القائمة"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--void-line)] bg-[var(--void)] px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--ink-dim)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md border border-[var(--signal)] px-4 py-2 text-center text-sm font-medium text-[var(--signal)]"
            >
              اطلب عرضًا تجريبيًا
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
