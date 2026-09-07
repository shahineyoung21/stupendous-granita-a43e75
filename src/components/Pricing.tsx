import { Check } from 'lucide-react'

interface Plan {
  name: string
  audience: string
  price: string
  period: string
  features: Array<string>
  featured?: boolean
  cta: string
}

const PLANS: Array<Plan> = [
  {
    name: 'الأساسية',
    audience: 'حتى ٥٠ جهازًا',
    price: '٩٬٤٠٠',
    period: 'جنيه / شهريًا',
    features: [
      'مراقبة الشبكة على مدار الساعة',
      'كشف البرمجيات الخبيثة',
      'تنبيهات فورية بالبريد والرسائل',
      'لوحة تحكم أساسية',
    ],
    cta: 'ابدأ بهذه الخطة',
  },
  {
    name: 'المتقدمة',
    audience: 'حتى ٣٠٠ جهاز',
    price: '٢٦٬٨٠٠',
    period: 'جنيه / شهريًا',
    features: [
      'كل مميزات الخطة الأساسية',
      'احتواء آلي للدود والانتشار الذاتي',
      'تحليل سلوكي متقدم للاختراق',
      'تبليغ آلي موثّق للجهة المسؤولة',
      'دعم فني على مدار الساعة',
    ],
    featured: true,
    cta: 'الأكثر طلبًا — تواصل معنا',
  },
  {
    name: 'المؤسسات',
    audience: 'أجهزة غير محدودة',
    price: 'حسب الاحتياج',
    period: 'عرض سعر مخصص',
    features: [
      'كل مميزات الخطة المتقدمة',
      'محللون أمنيون مخصصون لحسابكم',
      'تكامل مع أنظمة SIEM الحالية لديكم',
      'اتفاقية مستوى خدمة (SLA) مخصصة',
    ],
    cta: 'اطلب عرض سعر',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-[var(--void-line)] bg-[var(--void-raised)]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-medium text-[var(--signal)]">الخطط</span>
          <h2 className="mt-2 text-3xl font-bold text-[var(--ink)] lg:text-4xl">
            حماية تتوسّع مع شركتكم
          </h2>
          <p className="mt-4 text-[var(--ink-dim)]">
            الأسعار أرشادية — العرض النهائي يعتمد على حجم الشبكة وعدد الأجهزة ومستوى الاستجابة المطلوب.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl border p-7 ${
                plan.featured
                  ? 'border-[var(--signal)] bg-[var(--void)] lg:-translate-y-3 lg:shadow-2xl lg:shadow-black/50'
                  : 'border-[var(--void-line)] bg-[var(--void)]'
              }`}
            >
              {plan.featured && (
                <span className="mb-3 inline-block w-fit rounded-full bg-[var(--signal)] px-3 py-1 text-[11px] font-bold text-[var(--void)]">
                  الأكثر اختيارًا
                </span>
              )}
              <h3 className="text-xl font-bold text-[var(--ink)]">{plan.name}</h3>
              <p className="mt-1 text-sm text-[var(--ink-dim)]">{plan.audience}</p>

              <div className="mt-5 mb-6">
                <span
                  className="text-3xl font-bold text-[var(--ink)]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {plan.price}
                </span>
                <p className="mt-1 text-xs text-[var(--ink-faint)]">{plan.period}</p>
              </div>

              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--ink-dim)]">
                    <Check size={16} className="mt-0.5 shrink-0 text-[var(--safe)]" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`rounded-md px-4 py-2.5 text-center text-sm font-bold transition-colors ${
                  plan.featured
                    ? 'bg-[var(--signal)] text-[var(--void)] hover:opacity-90'
                    : 'border border-[var(--void-line)] text-[var(--ink)] hover:border-[var(--signal)]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
