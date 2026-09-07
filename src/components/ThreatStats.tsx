const STATS = [
  { value: '417', unit: 'محاولة', label: 'اختراق تم رصدها وإيقافها لعملائنا هذا الشهر' },
  { value: '29', unit: 'ثانية', label: 'المتوسط الزمني لاكتشاف نشاط مشبوه' },
  { value: '6', unit: 'دقائق', label: 'المتوسط الزمني للتبليغ عن حادثة مؤكدة' },
  { value: '12', unit: 'قطاعًا', label: 'من البنوك للتصنيع يعتمدون على منصتنا' },
]

export function ThreatStats() {
  return (
    <section className="border-b border-[var(--void-line)] bg-[var(--void-raised)]">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center lg:text-right">
              <div
                className="text-3xl font-bold text-[var(--signal)] lg:text-4xl"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {stat.value}
                <span className="mr-1 text-base text-[var(--ink-dim)]">{stat.unit}</span>
              </div>
              <p className="mt-1.5 text-sm text-[var(--ink-dim)]">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[var(--ink-faint)] lg:text-right">
          * بيانات تقديرية مجمّعة من متوسط أداء عملاء SAQR الحاليين، وتختلف حسب حجم الشبكة وطبيعة النشاط.
        </p>
      </div>
    </section>
  )
}
