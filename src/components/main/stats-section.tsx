'use client'
import { Card, CardContent } from '@/components/ui/card'

export default function StatsSection() {
  const stats = [
    { label: 'AI Solutions Portfolio', value: '$1,234,567' },
    { label: 'Current AI Performance', value: '9,876%' },
    { label: 'Total AI Solutions', value: '500+ projects' },
    { label: '% AI Utilization', value: '95.2%' },
  ]

  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 px-4 py-12 text-center md:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="py-6">
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-muted-foreground mt-2 text-sm">
              {stat.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
