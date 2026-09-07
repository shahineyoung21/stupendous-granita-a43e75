import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'SAQR — دفاع سيبراني استباقي لشركتك',
      },
      {
        name: 'description',
        content:
          'SAQR منصة رصد واستجابة سيبرانية تكتشف البرمجيات الخبيثة والدود ومحاولات الاختراق لحظة حدوثها، تعزل التهديد آليًا، وتُبلّغ فريقكم الأمني أو الجهة المسؤولة بتقرير موثّق فورًا.',
      },
      {
        name: 'theme-color',
        content: '#0a0f0d',
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@500;700;900&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
