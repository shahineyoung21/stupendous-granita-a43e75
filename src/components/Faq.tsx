import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'هل SAQR برنامج أنتي فايرس عادي؟',
    a: 'لا. SAQR منصة رصد واستجابة على مستوى الشبكة الكاملة، تعمل جنبًا إلى جنب مع برامج الحماية المثبّتة على الأجهزة، لا كبديل عنها.',
  },
  {
    q: 'مين الجهة المسؤولة اللي بيتم التبليغ لها؟',
    a: 'ممكن يكون مسؤول الأمن السيبراني الداخلي في شركتكم، أو جهة تنظيمية معتمدة مثل فريق الاستجابة الوطني لطوارئ الحاسب، بحسب سياسة التصعيد اللي تحددوها معنا وقت التركيب.',
  },
  {
    q: 'هل التركيب بيوقف شغل الشبكة؟',
    a: 'لا. التركيب بيتم بالتوازي مع تشغيل الشبكة العادي، والحساسات مصممة بحد أدنى من استهلاك الموارد لعدم التأثير على الأداء.',
  },
  {
    q: 'بتتعامل مع الأجهزة القديمة (Legacy)؟',
    a: 'نعم، عن طريق الرصد على مستوى حركة الشبكة نفسها، بدل الاعتماد فقط على وكيل مثبَّت على كل جهاز على حدة.',
  },
  {
    q: 'إمتى نقدر نجرّب النظام قبل أي التزام؟',
    a: 'نقدّم تقييمًا مجانيًا لمدة ١٤ يومًا على شبكتكم الفعلية، مع تقرير مفصّل بالنتائج، قبل أي عقد أو التزام مالي.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-[var(--void-line)]">
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10 text-center">
          <span className="text-xs font-medium text-[var(--signal)]">الأسئلة الشائعة</span>
          <h2 className="mt-2 text-3xl font-bold text-[var(--ink)]">أسئلة بيتكرر سؤالنا فيها</h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.q}
                className="rounded-lg border border-[var(--void-line)] bg-[var(--void-raised)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-[var(--ink)]">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[var(--ink-faint)] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-[var(--ink-dim)]">
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
