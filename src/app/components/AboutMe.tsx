import { Button, Link, Tooltip } from '@nextui-org/react'
import { Heading } from './Heading'
import { Text } from './Text'
import { Title } from './Title'
import Image from 'next/image'
import aboutMeImage from '@/assets/aboutMe.jpg'
import { Mail } from 'lucide-react'
import { WhatsApp } from '@/assets/WhatsApp'
import { Skills } from './Skills'

export function AboutMe() {
  return (
    <section id="about" className="mx-auto">
      <Title title="Sobre mim" />
      <Text as="p" className="text-center mt-2 max-w-[750px] mx-auto">
        Sou desenvolvedor Full stack com foco em desenvolvimento Back-end, tenho
        10 anos de experiência em atendimento ao público como Sub-Gerente de
        comércio e estou fazendo migração de carreira. Sou formado em Banco de
        Dados pela Universidade FIAP e atualmente estou trabalhando em projetos
        pessoais.
      </Text>

      <div className="grid grid-cols-[1fr_322px_230px] max-lg:grid-cols-1 mt-[60px]">
        <div className="space-y-5 px-16 max-sm:px-4 py-12 max-sm:py-8 bg-bg-secondary rounded-l-md">
          <Heading className="text-4xl font-normal">Anderson Silva</Heading>
          <Text className="text-primary font-secondary text-2xl">
            Desenvolvedor Full stack
          </Text>
          <Text as="p">
            Possuo um sólido conhecimento na criação de APIs RESTful utilizando
            tecnologias como Node.js, JavaScript, TypeScript, Prisma, Docker e
            PostgreSQL com código limpo, testes unitários e de integração,
            utilizando principíos SOLID. Também tenho experiência no
            desenvolvimento de websites responsivos e aplicações web utilizando
            React.js, Next.js e Tailwind CSS. Estou interessado em trabalhar
            como desenvolvedor de software Back-End ou Front-End.
          </Text>

          <Button variant="solid" color="primary">
            Vamos conversar
          </Button>
        </div>

        <div>
          <Image
            className="rounded-r-md h-full object-cover object-top max-lg:hidden"
            src={aboutMeImage}
            width={322}
            height={440}
            alt=""
            quality={100}
          />
        </div>

        <div className="pl-7 max-sm:pl-0 flex items-center gap-4 self-end max-lg:mt-4">
          <Tooltip content="Email" color="primary">
            <Button
              as={Link}
              href="mailto:andersonwea14@gmail.com"
              className="w-[64px] h-[64px]"
              isIconOnly
              variant="bordered"
              color="primary"
              radius="full"
            >
              <Mail />
            </Button>
          </Tooltip>

          <Tooltip content="WhatsApp" color="primary">
            <Button
              as={Link}
              isExternal
              href="https://api.whatsapp.com/send?phone=5511977533040&text=Ol%C3%A1,%20vi%20seu%20portfolio%20e%20quero%20bater%20um%20papo."
              className="w-[64px] h-[64px]"
              isIconOnly
              variant="bordered"
              color="primary"
              radius="full"
            >
              <WhatsApp />
            </Button>
          </Tooltip>
        </div>
      </div>

      <div className="flex max-lg:flex-col gap-4 items-center mt-10">
        <Heading
          as="h2"
          className="font-normal flex gap-2 items-center text-primary text-4xl after:h-[2px] after:w-[52px] after:block after:content-[''] after:bg-primary after:rounded-xl"
        >
          Abilidades
        </Heading>
        <Skills />
      </div>
    </section>
  )
}
