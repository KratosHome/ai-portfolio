'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, PhoneCall, FileText, Bot } from 'lucide-react'
import Link from 'next/link'
import { ROUTES } from '@/constants/paths'

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
    <section className="container mx-auto grid grid-cols-1 gap-8 px-6 py-16 text-center md:grid-cols-4">
      {tariffs.map((tariff, index) => (
        <Link href={ROUTES.PAYMENT} key={index}>
          <Card className="group hover:shadow-3xl relative overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 shadow-2xl transition-all hover:scale-105">
            <CardContent className="flex flex-col items-center justify-center space-y-6 py-8">
              <div className="text-3xl font-bold text-white">
                {tariff.price}
              </div>
              <div className="text-lg font-semibold text-gray-300">
                {tariff.label}
              </div>
              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  {tariff.tokens}
                </li>
                <li className="flex items-center gap-2">
                  <PhoneCall size={16} className="text-blue-400" />
                  {tariff.minutes}
                </li>
                <li className="flex items-center gap-2">
                  <FileText size={16} className="text-purple-400" />
                  {tariff.documents}
                </li>
                <li className="flex items-center gap-2">
                  <Bot size={16} className="text-pink-400" />
                  {tariff.scripts}
                </li>
              </ul>
              <button className="mt-8 rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition hover:bg-gray-200">
                Обрати
              </button>
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  )
}
