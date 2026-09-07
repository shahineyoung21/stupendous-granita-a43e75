# AGENTS.md

نظرة عامة على بنية المشروع لأي عامل AI يعمل على هذا الكود في جلسات مستقبلية.

## نظرة عامة

صفحة تسويقية/تعريفية واحدة (single landing page) بالعربية واتجاه RTL، لخدمة أمن سيبراني
افتراضية باسم "SAQR". الهدف تسويقي وتوعوي: عرض المميزات، طريقة العمل، خطط التسعير،
والأسئلة الشائعة، مع نموذج لجمع طلبات التواصل. **الصفحة لا تنفّذ أي فحص أو حماية حقيقية** —
كل الأرقام، السجلات (logs)، والإحصاءات في الواجهة هي محتوى توضيحي ثابت وليست بيانات حقيقية
من نظام رصد فعلي.

## المكدّس التقني

| الطبقة | التقنية |
|---|---|
| إطار العمل | TanStack Start |
| الواجهة | React 19، TanStack Router v1 |
| البناء | Vite 7 |
| التنسيق | Tailwind CSS 4 (بدون ملف تهيئة، متغيرات CSS مخصصة في `src/styles.css`) |
| الأيقونات | lucide-react |
| النماذج | Netlify Forms |
| النشر | Netlify |

## بنية المجلدات

```
├── public
│   ├── favicon.ico
│   └── __forms.html        # هيكل HTML ثابت لتسجيل نموذج "lead-request" وقت البناء (لازم لـ Netlify Forms مع SSR)
├── src
│   ├── components
│   │   ├── Header.tsx        # الشريط العلوي: الشعار، التنقل، زر CTA
│   │   ├── Hero.tsx          # القسم الرئيسي + سجل تهديدات متحرك تجريبي (LiveLog)
│   │   ├── ThreatStats.tsx   # شريط إحصاءات توضيحية
│   │   ├── Features.tsx      # شبكة مميزات غير متماثلة (bento grid)
│   │   ├── HowItWorks.tsx    # خطوات آلية العمل (٥ خطوات) على خط زمني
│   │   ├── Trust.tsx         # قسم التوافق مع الأطر المرجعية (NIST/ISO/قانون حماية البيانات)
│   │   ├── Pricing.tsx       # ثلاث خطط تسعير، الخطة الوسطى مميزة بصريًا
│   │   ├── Faq.tsx           # أسئلة شائعة بشكل أكورديون
│   │   ├── ContactSection.tsx # نموذج طلب التواصل (Netlify Forms عبر fetch إلى /__forms.html)
│   │   └── Footer.tsx        # تذييل + تنويه أن الصفحة تعريفية وليست أداة حماية فعلية
│   ├── routes
│   │   ├── __root.tsx        # التخطيط الجذري: lang="ar" dir="rtl"، عناوين head، خطوط Google Fonts
│   │   └── index.tsx         # يجمّع كل الأقسام أعلاه في صفحة واحدة
│   ├── router.tsx
│   └── styles.css            # متغيرات الألوان/الخطوط + تأثيرات بصرية (scanlines، شبكة، رادار)
├── netlify.toml
└── vite.config.ts
```

## مفاهيم أساسية

### التوجيه (TanStack Router)

- `src/routes/__root.tsx` — تخطيط جذري واحد يغلّف كل الصفحات، ويضبط الاتجاه RTL والخطوط
- `src/routes/index.tsx` — المسار الوحيد `/`، يجمّع مكونات `src/components/*`

### النموذج ونماذج Netlify

النموذج في `ContactSection.tsx` يُرسل عبر `fetch('/__forms.html', ...)` بدلاً من `/` — هذا
مطلوب لأن TanStack Start يعالج الطلبات على `/` بواسطة دالة SSR، فتتجاوز معالجة Netlify
للنماذج. أي حقل يُضاف للنموذج في React **يجب** أن يُضاف بنفس الاسم في `public/__forms.html`
حتى يتعرف عليه Netlify وقت البناء.

## اتفاقيات الكود

- الألوان والخطوط معرّفة كمتغيرات CSS في `:root` داخل `styles.css` (`--void`, `--signal`,
  `--ink`...) وتُستخدم عبر `style={{ ... }}` أو Tailwind arbitrary values (`text-[var(--signal)]`)
  بدل تعريف ثيم Tailwind مخصص
- الخط العريض/العناوين: "Noto Kufi Arabic"، النص العادي: "IBM Plex Sans Arabic"، الأرقام
  والسجلات: "IBM Plex Mono" (عبر `style={{ fontFamily: 'var(--font-mono)' }}`)
- الاستيراد عبر alias `@/*` يشير إلى `src/*` (مضبوط في `tsconfig.json`)
- TypeScript في وضع `strict` مع `noUnusedLocals`/`noUnusedParameters`

## قرارات غير بديهية

- تم اختيار لوحة ألوان "غرفة عمليات/رادار" (خلفية شبه سوداء + أصفر إشارة `--signal`) بدل
  التدرجات الأزرق/البنفسجي الشائعة في صفحات SaaS، لتماشي هوية أمن سيبراني
- الإحصاءات والسجل الحي في `Hero.tsx` وهمية بالكامل لغرض العرض، ومكتوب توضيح بذلك في نص
  الصفحة (Hero وFooter) لتجنّب تضليل الزائر بأن الصفحة تراقب جهازه فعليًا
