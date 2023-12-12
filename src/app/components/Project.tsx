import { Chip, Button, Link } from '@nextui-org/react'
import { Github, ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import { Text } from './Text'
import React from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Heading } from './Heading'
import 'keen-slider/keen-slider.min.css'

type Project = {
  name: string
  description: string
  image: StaticImport
  status: string
  tags: string[]
  link: string
  github: string
}

interface ProjectProps {
  project: Project
  index: number
}

export function Projetc({ project, index }: ProjectProps) {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 mt-16 max-sm:mt-8 keen-slider__slide">
      <div className="rounded-2xl">
        <Image
          src={project.image}
          alt=""
          width={604}
          height={390}
          quality={100}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>

      <div className="sm:pl-10">
        <Text className="text-[rgba(77,181,255,0.2)] font-tertiary text-[150px] max-sm:text-[100px] leading-none -ml-10 max-sm:-ml-1">
          {index.toString().padStart(2, '0')}
        </Text>
        <div className="flex gap-3 items-center -mt-[64px] max-sm:-mt-[50px]">
          <Heading className="text-5xl max-sm:text-4xl leading-none ">
            {project.name}
          </Heading>
          <Chip variant="solid" className="bg-lime-500">
            {project.status}
          </Chip>
        </div>

        <div className="mt-6">
          <div className="flex gap-2 flex-wrap max-w-lg mt-5">
            {project.tags.map((tag, index) => {
              return (
                <Chip key={tag + index} variant="bordered" color="primary">
                  {tag}
                </Chip>
              )
            })}
          </div>
        </div>

        <Text as="p" className="mt-6">
          {project.description}
        </Text>

        <div className="flex items-center gap-5 mt-5">
          <Button
            as={Link}
            href={project.github}
            isExternal
            startContent={<Github />}
            variant="ghost"
            color="secondary"
          >
            Github
          </Button>
          <Button
            as={Link}
            href={project.link}
            isExternal
            startContent={<ExternalLinkIcon />}
            color="primary"
          >
            Acesse o site
          </Button>
        </div>
      </div>
    </div>
  )
}
