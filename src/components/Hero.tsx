import { useEffect, useState } from 'react'
import { ShieldAlert, PlayCircle } from 'lucide-react'

const LOG_LINES = [
  { t: '02:14:07', tag: 'MALWARE', color: 'var(--danger)', msg: 'ransomware.exe على WKS-114 — تم الحجر آليًا' },
  { t: '02:14:09', tag: 'ACTION', color: 'var(--safe)', msg: 'عزل WKS-114 عن الشبكة الفرعية 10.4.2.0/24' },
  { t: '02:14:31', tag: 'WORM', color: 'var(--danger)', msg: 'نمط انتشار ذاتي عبر SMB من SRV-DB2' },
  { t: '02:14:33', tag: 'ACTION', color: 'var(--safe)', msg: 'إيقاف منفذ 445 مؤقتًا على 6 أجهزة مجاورة' },
  { t: '02:15:02', tag: 'INTRUSION', color: 'var(--danger)', msg: 'محاولات دخول متكررة على VPN من نطاق غير مألوف' },
  { t: '02:15:04', tag: 'REPORT', color: 'var(--signal)', msg: 'تقرير حادثة #4471 أُرسل لمسؤول الأمن الداخلي' },
]

function LiveLog() {
  const [visible, setVisible] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => (v >= LOG_LINES.length ? 1 : v + 1))
    }, 1400)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rounded-xl border border-[var(--void-line)] bg-[var(--void-raised)] p-5 shadow-2xl shadow-black/40">
      <div className="mb-4 flex items-center justify-between border-b border-[var(--void-line)] pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--danger)] animate-blink" />
          <span className="text-xs text-[var(--ink-dim)]" style={{ fontFamily: 'var(--font-mono)' }}>
            SAQR-SENSOR // شبكة العميل: منطقة القاهرة الكبرى
          </span>
        </div>
        <span className="text-xs text-[var(--ink-faint)]" style={{ fontFamily: 'var(--font-mono)' }}>
          مباشر
        </span>
      </div>
      <div className="flex flex-col gap-2.5" dir="ltr">
        {LOG_LINES.slice(0, visible).map((line, i) => (
          <div
            key={line.t + i}
            className="animate-ticker-line flex items-start gap-2 text-xs leading-relaxed"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span className="text-[var(--ink-faint)]">{line.t}</span>
            <span
              className="shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium"
              style={{ color: line.color, backgroundColor: `${line.color}1a` }}
            >
              {line.tag}
            </span>
            <span dir="rtl" className="text-[var(--ink-dim)]">
              {line.msg}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--void-line)]">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full opacity-20"
        style={{
          background:
            'conic-gradient(from 90deg, transparent 0deg, var(--signal) 8deg, transparent 40deg)',
        }}
      >
        <div className="animate-radar h-full w-full" style={{
          background: 'conic-gradient(from 90deg, transparent 0deg, var(--signal) 8deg, transparent 40deg)',
          borderRadius: '9999px',
        }} />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--void-line)] bg-[var(--void-raised)] px-4 py-1.5 text-xs text-[var(--ink-dim)]">
            <ShieldAlert size={14} className="text-[var(--signal)]" />
            منصة رصد واستجابة سيبرانية — RM/XDR
          </div>

          <h1 className="mb-6 text-4xl font-black leading-[1.25] text-[var(--ink)] lg:text-5xl">
            عين رقمية لا تغمض تحرس شبكتك من{' '}
            <span className="text-[var(--signal)]">البرمجيات الخبيثة والدود والاختراق</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--ink-dim)]">
            SAQR يراقب حركة بياناتك لحظة بلحظة، يكتشف التهديد قبل أن ينتشر، يعزله آليًا،
            ثم يبلّغ فريقكم الأمني أو الجهة المسؤولة بتقرير فني موثّق — كله في دقائق، لا أيام.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-[var(--signal)] px-6 py-3 text-sm font-bold text-[var(--void)] transition-transform hover:scale-[1.02]"
            >
              اطلب استشارة أمنية مجانية
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--signal)]"
            >
              <PlayCircle size={18} />
              شاهد كيف تعمل SAQR
            </a>
          </div>

          <p className="mt-6 text-xs text-[var(--ink-faint)]">
            هذه صفحة تعريفية بخدمة SAQR — لا تعمل كبرنامج حماية مثبَّت على هذا الموقع.
          </p>
        </div>

        <div className="animate-rise flex items-center" style={{ animationDelay: '0.15s' }}>
          <LiveLog />
        </div>
      </div>
    </section>
  )
}
