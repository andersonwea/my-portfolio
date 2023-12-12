'use client'

import { Title } from './Title'
import { Projetc } from './Project'
import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button, Spinner } from '@nextui-org/react'
import { Text } from './Text'

const projects = [
  {
    name: 'Crypto Folio',
    description:
      'Um aplicativo web para gerenciar sua carteira de cryptomoedas e acompanhar dados como preços, volumes de negociação e capitalização de mercado em criptomoedas.',
    image:
      'https://andersonwea-portfolio.s3.us-east-2.amazonaws.com/projects/crypto-folio.png',
    status: 'Concluído',
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
  {
    name: 'Play ai',
    description:
      'O projeto consiste em um player de músicas que reflete de forma visual tudo que está tocando no momento, você pode pesquisar por qualquer música que esteja disponível no youtube.',
    image:
      'https://andersonwea-portfolio.s3.us-east-2.amazonaws.com/projects/plai-ai.png',
    status: 'Concluído',
    tags: [
      'ReactJs',
      'TypeScript',
      'TailwindCSS',
      'p5.js',
      'NodeJs',
      'express',
    ],
    link: 'https://play-ai.vercel.app',
    github: 'https://github.com/andersonwea/play-ai',
  },
  {
    name: 'Mine it',
    description:
      'O Mine-It é um jogo simples onde o objetivo é encontrar os 8 diamantes sem encontrar a bomba. O jogo é jogado em um tabuleiro de 9x9 quadrados, e cada quadrado é uma mina que pode conter um diamante ou uma bomba.',
    image:
      'https://andersonwea-portfolio.s3.us-east-2.amazonaws.com/projects/mine-it.png',
    status: 'Concluído',
    tags: ['ReactJs', 'Vite'],
    link: 'https://andersonwea.github.io/mine-it/',
    github: 'https://github.com/andersonwea/mine-it',
  },
  {
    name: 'Port Dev',
    description:
      'O projeto consiste em ser uma plataforma em que desenvolvedores poderão se cadastrar e exibir suas habilidades, projetos, experiência para outros desenvolvedores ou possíveis recruiters que acessarem a plataforma.',
    image:
      'https://andersonwea-portfolio.s3.us-east-2.amazonaws.com/projects/port-dev.png',
    status: 'Em Desenvolvimento',
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
    link: 'https://port-dev-web-andersonwea.vercel.app/',
    github: 'https://github.com/andersonwea/port-dev-web',
  },
]

export function Projects() {
  const [currentSlider, setCurrentSlider] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlider(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function handleNext() {
    instanceRef.current?.next()
  }

  function handlePrev() {
    instanceRef.current?.prev()
  }

  return (
    <section id="projets">
      <Title title="Meus projetos" />
      <div
        ref={sliderRef}
        data-slider={loaded}
        className="keen-slider data-[slider=false]:h-0"
      >
        {projects.map((project, index) => (
          <Projetc
            key={project.name + index}
            index={index + 1}
            project={project}
          />
        ))}
      </div>

      {loaded && instanceRef.current ? (
        <div className="mx-auto max-w-max">
          <div className="flex gap-2 items-center mt-6">
            <Button
              color="primary"
              isIconOnly
              variant="light"
              onClick={handlePrev}
              disabled={currentSlider === 0}
            >
              <ChevronLeft />
            </Button>

            <div className="space-x-1">
              <Text className="text-2xl text-white">
                {(currentSlider + 1).toString()}
              </Text>
              <Text className="text-secondary font-bold">/</Text>
              <Text className="text-secondary font-bold">
                {projects.length.toString()}
              </Text>
            </div>

            <Button
              color="primary"
              isIconOnly
              variant="light"
              onClick={handleNext}
              disabled={
                currentSlider ===
                instanceRef.current.track.details.slides.length - 1
              }
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      ) : (
        <Spinner color="primary" className="mx-auto w-full mt-8 text-center" />
      )}
    </section>
  )
}
