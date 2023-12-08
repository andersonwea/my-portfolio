import Image from 'next/image'
import { Title } from './Title'
import CryptoFolio from '@/assets/projects/dashboard-edited.png'
import { Text } from './Text'
import { Heading } from './Heading'
import { Button, Chip, Link } from '@nextui-org/react'
import { ExternalLinkIcon, Github } from 'lucide-react'

const projects = [
  {
    name: 'Crypto Folio',
    description:
      'Um aplicativo web para gerenciar sua carteira de cryptomoedas e acompanhar dados como preços, volumes de negociação e capitalização de mercado em criptomoedas.',
    image: CryptoFolio,
    tags: [
      'NextJS',
      'TailwindCSS',
      'TypeScript',
      'ReactJs',
      'NextAuth',
      'NextUi',
      'NodeJs',
      'Prisma',
      'PostgreSQL',
    ],
    link: 'https://crypto-folio-beta.vercel.app/',
    github: 'https://github.com/andersonwea/crypto-folio',
  },
]

export function Projects() {
  return (
    <section id="projets">
      <Title title="Meus projetos" />

      <div className="grid grid-cols-2 mt-16">
        <div>
          <Image src={CryptoFolio} alt="" quality={100} />
        </div>

        <div className="pl-10">
          <Text className="text-[rgba(77,181,255,0.2)] font-tertiary text-[150px] leading-none -ml-10">
            01
          </Text>
          <Heading className="text-5xl leading-none -mt-[64px]">
            Crypto Folio
          </Heading>

          <div className="mt-6">
            <div className="flex gap-2 flex-wrap max-w-lg mt-5">
              {projects.map((project, index) => {
                return project.tags.map((tag) => (
                  <Chip key={index} variant="bordered" color="primary">
                    {tag}
                  </Chip>
                ))
              })}
            </div>
          </div>

          <Text as="p" className="mt-6">
            {projects[0].description}
          </Text>

          <div className="flex items-center gap-5 mt-5">
            <Button
              as={Link}
              href={projects[0].github}
              isExternal
              startContent={<Github />}
              variant="ghost"
              color="secondary"
            >
              Github
            </Button>
            <Button
              as={Link}
              href={projects[0].link}
              isExternal
              startContent={<ExternalLinkIcon />}
              color="primary"
            >
              Acesse o site
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
