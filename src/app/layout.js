import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  // title: 'Технологии воплощают идеи: Разработка сайтов и чат-ботов',
  // description: 'Превратите свои идеи в реальность! MPNskDev.tech - ваш надежный партнер в разработке сайтов и чат-ботов. Мы объединяем креативность с передовыми технологиями, чтобы создать впечатляющий след в цифровом мире. Команда профессионалов с офисом в Новосибирске, работаем с клиентами по всей России. Повысьте эффективность вашего бизнеса с нами!',
  title: 'Напишем продающий сайт за 5 дней | M&P NSK DEV',
  description: 'Создаем сайты, привлекающие клиентов и увеличивающие прибыль компаний. Ваш успех – наша цель.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <meta name="keywords" content="Ключевые слова" />
        
        <meta name = "robots" content = "index, follow" />
        <meta name="yandex-verification" content="fa2d4e0a3ba9a121" />
        
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:title" content="Напишем продающий сайт за 5 дней | M&P NSK DEV"/>
        <meta property="og:description" content="Создаем сайты, привлекающие клиентов и увеличивающие прибыль компаний. Ваш успех – наша цель."/>
        <meta property="og:image:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
