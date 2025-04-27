'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, PhoneCall, FileText, Bot } from 'lucide-react'
import Link from 'next/link'
import { ROUTES } from '@/constants/paths'
import { Button } from '@/components/ui/button'

export default function PricingSection() {
  const tariffs = [
    {
      label: 'Безкоштовний план',
      price: '0₴ / місяць',
      tokens: '500 токенів',
      minutes: '10 хвилин дзвінків',
      documents: '5 документів',
      scripts: '2 AI-сценарії',
    },
    {
      label: 'Стартовий план',
      price: '199₴ / місяць',
      tokens: '10 000 токенів',
      minutes: '200 хвилин дзвінків',
      documents: '50 документів',
      scripts: '10 AI-сценаріїв',
    },
    {
      label: 'Професійний план',
      price: '499₴ / місяць',
      tokens: '50 000 токенів',
      minutes: '1000 хвилин дзвінків',
      documents: '200 документів',
      scripts: '50 AI-сценаріїв',
    },
    {
      label: 'Корпоративний план',
      price: 'Індивідуально',
      tokens: 'Під запит',
      minutes: 'Під запит',
      documents: 'Під запит',
      scripts: 'Під запит',
    },
  ]

  return (
    <section className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
      {tariffs.map((tariff, index) => (
        <Link href={ROUTES.PAYMENT} key={index} className="group relative">
          <Card className="hover:border-primary relative flex h-full flex-col items-center rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 text-center transition-all duration-300 hover:shadow-xl">
            <CardContent className="flex flex-1 flex-col items-center justify-between space-y-6">
              <div>
                <div className="text-4xl font-bold text-white">
                  {tariff.price}
                </div>
                <div className="mt-2 text-lg font-semibold text-neutral-400">
                  {tariff.label}
                </div>
              </div>

              <ul className="space-y-3 text-sm text-neutral-500">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-400" />
                  {tariff.tokens}
                </li>
                <li className="flex items-center gap-2">
                  <PhoneCall size={18} className="text-blue-400" />
                  {tariff.minutes}
                </li>
                <li className="flex items-center gap-2">
                  <FileText size={18} className="text-purple-400" />
                  {tariff.documents}
                </li>
                <li className="flex items-center gap-2">
                  <Bot size={18} className="text-pink-400" />
                  {tariff.scripts}
                </li>
              </ul>

              <Button className="mt-6 w-full rounded-full px-6 py-3 text-sm font-bold">
                Обрати план
              </Button>
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  )
}
