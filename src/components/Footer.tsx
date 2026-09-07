const FOOTER_LINKS = [
  { label: 'المميزات', href: '#features' },
  { label: 'كيف تعمل', href: '#how-it-works' },
  { label: 'الخطط', href: '#pricing' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
]

export function Footer() {
  return (
    <footer className="bg-[var(--void)]">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 border-b border-[var(--void-line)] pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <span
              className="text-lg font-bold text-[var(--ink)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              SAQR<span className="text-[var(--signal)]">.</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-faint)]">
              منصة رصد واستجابة سيبرانية تحمي شركتكم من البرمجيات الخبيثة والدود ومحاولات
              الاختراق، وتُبلّغ الجهة المسؤولة بتقرير موثّق عند كل حادثة.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--ink-dim)] hover:text-[var(--ink)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-[var(--ink-faint)]">
          <p>
            هذه صفحة تعريفية وتسويقية لخدمة SAQR للأمن السيبراني، مُعدّة لعرض الخدمة وجمع طلبات
            التواصل. الصفحة نفسها لا تفحص أو تحمي أي جهاز يزورها، والأرقام والإحصاءات المذكورة
            توضيحية لغرض العرض.
          </p>
          <p>© {new Date().getFullYear()} SAQR. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
