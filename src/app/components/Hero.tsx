import { Button, Link } from '@nextui-org/react'
import { Heading } from './Heading'
import { Text } from './Text'
import heroPhoto from '@/assets/hero.png'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="hero" className="mt-11 space-y-11 flex flex-col items-center">
      <div className="text-center">
        <Text as="p" className="text-white text-2xl">
          Olá, eu sou
        </Text>
        <Heading className="text-5xl">Anderson</Heading>
        <Text as="p" className="text-light">
          Desenvolvedor Full stack
        </Text>
      </div>

      <div className="flex space-x-4">
        <Button
          as={Link}
          isExternal
          href="Anderson-Silva-cv.pdf"
          variant="ghost"
          color="secondary"
        >
          Download CV
        </Button>
        <Button as={Link} href="#contact" variant="solid" color="primary">
          Vamos conversar
        </Button>
      </div>

      <div>
        <Image src={heroPhoto} alt="" width={387} height={372} quality={100} />
      </div>
    </section>
  )
}
