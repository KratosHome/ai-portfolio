import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 py-12 lg:flex-row">
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="mb-4 text-4xl font-bold">
          AI Services: <br />
          Revolutionizing Communication
        </h1>
        <p className="text-muted-foreground mb-6">
          AI Services offer cutting-edge solutions for seamless communication
          and support, enhancing customer experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
          <Button className="px-6">Start AI Experience</Button>
          <Button variant="outline" className="px-6">
            Explore AI Solutions
          </Button>
        </div>
      </div>

      <div className="relative w-full max-w-md">
        <Image
          src="/ai-image.png"
          alt="AI Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default Hero
