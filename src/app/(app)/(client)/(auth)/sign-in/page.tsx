import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <section className="container mx-auto flex min-h-screen items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md border-none bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg">
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold text-white">Вхід</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Увійдіть до свого акаунта
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Пароль
            </Label>
            <Input id="password" type="password" placeholder="Ваш пароль" />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Увійти</Button>
          <p className="text-muted-foreground text-center text-sm">
            Немає акаунта?{' '}
            <Link href="/sign-up" className="hover:text-primary underline">
              Зареєструватися
            </Link>
          </p>
        </CardFooter>
      </Card>
    </section>
  )
}
