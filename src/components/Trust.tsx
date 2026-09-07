import { ShieldCheck } from 'lucide-react'

const FRAMEWORKS = [
  {
    title: 'إطار NIST لإدارة المخاطر السيبرانية',
    body: 'منهجية الرصد والاستجابة والتعافي في SAQR مبنية على مراحل الإطار الأمريكي المرجعي لإدارة المخاطر السيبرانية.',
  },
  {
    title: 'ISO/IEC 27001',
    body: 'ضوابط إدارة أمن المعلومات الداخلية لدينا — من تشفير البيانات إلى صلاحيات الوصول — تتبع ممارسات هذا المعيار.',
  },
  {
    title: 'قانون حماية البيانات الشخصية المصري ١٥١/٢٠٢٠',
    body: 'بيانات حركة شبكتكم تُعالَج وتُخزَّن وفق قواعد الموافقة والحد من الغرض المنصوص عليها في القانون.',
  },
]

export function Trust() {
  return (
    <section id="trust" className="border-b border-[var(--void-line)]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-medium text-[var(--signal)]">التوافق والامتثال</span>
          <h2 className="mt-2 text-3xl font-bold text-[var(--ink)] lg:text-4xl">
            سلسلة تبليغ واضحة، لا فوضى بعد الحادثة
          </h2>
          <p className="mt-4 text-[var(--ink-dim)]">
            تحددون معنا وقت التركيب: مين يستقبل التنبيه الفوري، ومتى يُصعَّد التقرير لجهة تنظيمية
            معتمدة مثل فريق الاستجابة الوطني لطوارئ الحاسب (CERT). لا تبليغ عشوائي، ولا تأخير.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {FRAMEWORKS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--void-line)] bg-[var(--void-raised)] p-6"
            >
              <ShieldCheck size={22} className="mb-4 text-[var(--safe)]" />
              <h3 className="mb-2 font-bold text-[var(--ink)]">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--ink-dim)]">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-[var(--ink-faint)]">
          نعمل وفق ممارسات متوافقة مع هذه الأطر، وهذا لا يمثّل شهادة اعتماد رسمية صادرة عن أي جهة.
        </p>
      </div>
    </section>
  )
}
