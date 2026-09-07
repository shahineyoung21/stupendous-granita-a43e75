const STEPS = [
  {
    n: '01',
    title: 'التركيب',
    body: 'نشر حساسات خفيفة على الشبكة والأجهزة، بالتوازي مع تشغيلكم العادي، دون التأثير على الأداء.',
  },
  {
    n: '02',
    title: 'الرصد المستمر',
    body: 'تحليل حركة البيانات والعمليات على مدار الساعة باستخدام نماذج تتعلّم سلوك شبكتكم الطبيعي.',
  },
  {
    n: '03',
    title: 'الاكتشاف والتصنيف',
    body: 'كل نشاط مشبوه يُصنَّف فورًا: برمجية خبيثة، دودة، أو محاولة اختراق، مع تقييم درجة الخطورة.',
  },
  {
    n: '04',
    title: 'الاحتواء الآلي',
    body: 'عزل الجهاز المصاب أو إيقاف العملية الخبيثة فورًا، لمنع التهديد من الانتشار قبل تدخّل بشري.',
  },
  {
    n: '05',
    title: 'التبليغ والتوثيق',
    body: 'تنبيه فوري لمسؤول الأمن الداخلي، وتقرير رسمي للجهة المختصة عند الحاجة، مع سجل جنائي رقمي كامل للحادثة.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-[var(--void-line)] bg-[var(--void-raised)]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-medium text-[var(--signal)]">كيف تعمل SAQR</span>
          <h2 className="mt-2 text-3xl font-bold text-[var(--ink)] lg:text-4xl">
            من أول إشارة مشبوهة، إلى تقرير جاهز للتصعيد
          </h2>
        </div>

        <div className="relative border-r-2 border-[var(--void-line)] pr-8">
          {STEPS.map((step, i) => (
            <div key={step.n} className={`relative pb-12 ${i === STEPS.length - 1 ? 'pb-0' : ''}`}>
              <div className="absolute right-0 top-0 flex h-9 w-9 translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--signal)] bg-[var(--void-raised)] text-xs font-bold text-[var(--signal)]" style={{ fontFamily: 'var(--font-mono)' }}>
                {step.n}
              </div>
              <div className="mr-4">
                <h3 className="mb-1.5 text-xl font-bold text-[var(--ink)]">{step.title}</h3>
                <p className="max-w-lg text-sm leading-relaxed text-[var(--ink-dim)]">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
