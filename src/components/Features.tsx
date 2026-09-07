import type { LucideIcon } from 'lucide-react'
import { Bug, GitFork, Radar, Send, LayoutDashboard, Users2 } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  body: string
  span?: string
}

const FEATURES: Array<Feature> = [
  {
    icon: Bug,
    title: 'رصد البرمجيات الخبيثة',
    body: 'تحليل سلوكي لحظي للملفات والعمليات الجارية، لضبط الفيروسات وأحصنة طروادة وبرمجيات الفدية قبل أن تُنفَّذ فعليًا، لا بعد وقوع الضرر.',
    span: 'lg:col-span-2',
  },
  {
    icon: GitFork,
    title: 'احتواء الدود',
    body: 'عزل تلقائي للأجهزة المصابة فور رصد انتشار ذاتي غير طبيعي عبر الشبكة، لمنع الدودة من التمدد بين الأقسام والفروع.',
  },
  {
    icon: Radar,
    title: 'كشف محاولات الاختراق',
    body: 'رصد الحركة الجانبية ومحاولات الدخول غير المصرح واستغلال الثغرات، بالاعتماد على نموذج يتعلّم سلوك شبكتكم الطبيعي.',
  },
  {
    icon: Send,
    title: 'تبليغ آلي للجهة المسؤولة',
    body: 'عند تأكيد الحادثة، يُرسل تقرير فني موثّق — نوع الهجوم، مصدره، الأجهزة المتأثرة — لمسؤول الأمن الداخلي أو الجهة الرقابية المعتمدة في دقائق.',
    span: 'lg:col-span-2',
  },
  {
    icon: LayoutDashboard,
    title: 'لوحة تحكم مركزية',
    body: 'رؤية موحّدة لكل التنبيهات وسجل الحوادث وحالة كل جهاز على الشبكة، على مدار الساعة.',
  },
  {
    icon: Users2,
    title: 'فريق استجابة بشري',
    body: 'محللون أمنيون يراجعون كل تنبيه حرج قبل التصعيد، لتقليل الإنذارات الكاذبة وضمان قرار دقيق.',
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-[var(--void-line)]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-medium text-[var(--signal)]">المميزات</span>
          <h2 className="mt-2 text-3xl font-bold text-[var(--ink)] lg:text-4xl">
            ثلاث جبهات تهديد، منظومة دفاع واحدة
          </h2>
          <p className="mt-4 text-[var(--ink-dim)]">
            بدل ما تشغّلوا أدوات متفرقة لكل نوع تهديد، SAQR بيجمعهم في مسار واحد: رصد، احتواء، تبليغ.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group rounded-xl border border-[var(--void-line)] bg-[var(--void-raised)] p-6 transition-colors hover:border-[var(--signal-dim)] ${feature.span ?? ''}`}
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--void-line)] text-[var(--signal)] transition-colors group-hover:border-[var(--signal)]">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[var(--ink)]">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--ink-dim)]">{feature.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
