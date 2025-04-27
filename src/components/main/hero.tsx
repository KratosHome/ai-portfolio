'use client'
import { Button } from '@/components/ui/button'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from '@/constants/paths'

const images = [
  { src: '/main/1.png', alt: 'Ілюстрація AI 1' },
  { src: '/main/2.png', alt: 'Ілюстрація AI 2' },
  { src: '/main/5.png', alt: 'Ілюстрація AI 2' },
  { src: '/main/3.png', alt: 'Ілюстрація AI 3' },
  { src: '/main/6.png', alt: 'Ілюстрація AI 2' },
  { src: '/main/4.png', alt: 'Ілюстрація AI 4' },
]

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 py-12 lg:flex-row">
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="mb-4 text-4xl font-bold">
          AI Конструктор: <br />
          Створюй Розумну Комунікацію
        </h1>
        <p className="text-muted-foreground mb-6">
          Створюйте власні AI-рішення для обробки документів, інтерв&apos;ю та
          кол-центрів. Налаштовуйте скрипти, автоматизуйте діалоги та підвищуйте
          ефективність легко і швидко. <br />
          Отримуйте аналітичні відповіді на запити, які раніше вимагали довгого
          аналізу
          <br />
          <br />
          Завантажте Excel-файл з минулорічними продажами — і отримайте
          сформоване замовлення на вибраний період у вигляді детального списку
          або обґрунтованої аналітичної відповіді.
        </p>
        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
          <Button className="px-6">
            <Link href={ROUTES.SIGN_IN}>Створити AI</Link>
          </Button>
          <Button variant="outline" className="px-6">
            <Link href={ROUTES.SIGN_IN}>
              Тестувати без реєстрації (розробка)
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative w-full max-w-md">
        <Splide
          options={{
            type: 'fade',
            rewind: true,
            autoplay: true,
            interval: 3000,
            speed: 400,
            pauseOnHover: false,
            arrows: false,
            pagination: false,
          }}
        >
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

export default Hero
