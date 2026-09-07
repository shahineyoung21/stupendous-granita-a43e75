import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const DEVICE_OPTIONS = ['أقل من 50', '50 – 300', '300 – 1000', 'أكثر من 1000']

export function ContactSection() {
  const [fields, setFields] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    devices: DEVICE_OPTIONS[0],
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'lead-request', ...fields }),
      })
      if (!res.ok) throw new Error('submit failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[var(--void-raised)]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-xs font-medium text-[var(--signal)]">تواصل معنا</span>
            <h2 className="mt-2 text-3xl font-bold text-[var(--ink)] lg:text-4xl">
              جاهز تحمي شركتك؟
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-[var(--ink-dim)]">
              اكتب لنا تفاصيل شبكتكم، وفريق SAQR هيرجع لكم بخطة تقييم مجانية لمدة ١٤ يومًا.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-sm text-[var(--ink-dim)]">
              <a href="mailto:contact@saqr-security.example" className="flex items-center gap-2 hover:text-[var(--ink)]">
                <Mail size={16} className="text-[var(--signal)]" />
                contact@saqr-security.example
              </a>
              <a href="tel:+201000000000" className="flex items-center gap-2 hover:text-[var(--ink)]">
                <Phone size={16} className="text-[var(--signal)]" />
                +20 100 000 0000
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--void-line)] bg-[var(--void)] p-7">
            {status === 'sent' ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                <h3 className="mb-2 text-xl font-bold text-[var(--ink)]">استلمنا طلبكم</h3>
                <p className="text-sm text-[var(--ink-dim)]">
                  فريقنا هيتواصل معكم خلال يوم عمل واحد لترتيب التقييم المجاني.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="hidden" name="form-name" value="lead-request" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-sm text-[var(--ink-dim)]">
                    الاسم
                    <input
                      name="name"
                      required
                      value={fields.name}
                      onChange={handleChange}
                      className="rounded-md border border-[var(--void-line)] bg-[var(--void-raised)] px-3 py-2.5 text-[var(--ink)] outline-none focus:border-[var(--signal)]"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm text-[var(--ink-dim)]">
                    اسم الشركة
                    <input
                      name="company"
                      required
                      value={fields.company}
                      onChange={handleChange}
                      className="rounded-md border border-[var(--void-line)] bg-[var(--void-raised)] px-3 py-2.5 text-[var(--ink)] outline-none focus:border-[var(--signal)]"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-sm text-[var(--ink-dim)]">
                    البريد الإلكتروني
                    <input
                      type="email"
                      name="email"
                      required
                      value={fields.email}
                      onChange={handleChange}
                      className="rounded-md border border-[var(--void-line)] bg-[var(--void-raised)] px-3 py-2.5 text-[var(--ink)] outline-none focus:border-[var(--signal)]"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm text-[var(--ink-dim)]">
                    رقم الهاتف
                    <input
                      type="tel"
                      name="phone"
                      value={fields.phone}
                      onChange={handleChange}
                      className="rounded-md border border-[var(--void-line)] bg-[var(--void-raised)] px-3 py-2.5 text-[var(--ink)] outline-none focus:border-[var(--signal)]"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5 text-sm text-[var(--ink-dim)]">
                  عدد الأجهزة على الشبكة
                  <select
                    name="devices"
                    value={fields.devices}
                    onChange={handleChange}
                    className="rounded-md border border-[var(--void-line)] bg-[var(--void-raised)] px-3 py-2.5 text-[var(--ink)] outline-none focus:border-[var(--signal)]"
                  >
                    {DEVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-1.5 text-sm text-[var(--ink-dim)]">
                  تفاصيل إضافية
                  <textarea
                    name="message"
                    rows={3}
                    value={fields.message}
                    onChange={handleChange}
                    className="rounded-md border border-[var(--void-line)] bg-[var(--void-raised)] px-3 py-2.5 text-[var(--ink)] outline-none focus:border-[var(--signal)]"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-2 rounded-md bg-[var(--signal)] px-6 py-3 text-sm font-bold text-[var(--void)] transition-opacity disabled:opacity-60"
                >
                  {status === 'submitting' ? 'جاري الإرسال...' : 'اطلب التقييم المجاني'}
                </button>

                {status === 'error' && (
                  <p className="text-sm text-[var(--danger)]">
                    حصل خطأ في الإرسال. جرّب تاني أو تواصل معنا مباشرة على البريد الإلكتروني.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
