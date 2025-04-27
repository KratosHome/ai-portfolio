import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { ROUTES } from '@/constants/paths'
import Image from 'next/image'

const navLinks = [
  { href: ROUTES.ABOUT, label: 'Про нас' },
  { href: ROUTES.SERVICES, label: 'Сервіси' },
  { href: ROUTES.PAYMENT, label: 'Оплата' },
]

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm dark:bg-black">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href={ROUTES.HOME} className="text-2xl font-bold">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className="text-sm font-medium hover:underline"
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link href={ROUTES.SIGN_IN}>Вхід</Link>
          </Button>
          <Button asChild>
            <Link href={ROUTES.SIGN_UP}>Реєстрація</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
