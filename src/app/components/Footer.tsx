import { Text } from './Text'
import { Heading } from './Heading'
import { LinkedinPosts } from './LinkedinPosts'
import { Link } from '@nextui-org/react'

export function Footer() {
  return (
    <footer className="bg-primary mt-[120px] px-3">
      <div className="max-w-[1232px] mx-auto grid grid-cols-[1fr_0.3fr_0.6fr] max-lg:grid-cols-[3fr_1fr] max-sm:grid-cols-1 py-10">
        <div>
          <Heading>AndersonWea</Heading>
          <div className="mt-5 space-y-1">
            <Text as="p" className="text-white">
              São paulo, São paulo - Brasil
            </Text>
            <Text as="p" className="text-white">
              Tel: +55 (11) 97753-3040
            </Text>
            <Text as="p" className="text-white">
              Email: andersonwea14@gmail.com
            </Text>
            <Text as="p" className="text-white">
              Github: https://github.com/andersonwea
            </Text>
            <Text as="p" className="text-white">
              Linkedin: www.linkedin.com/in/anderson-silva-988197151
            </Text>
          </div>
        </div>

        <div className="max-lg:mt-5">
          <Heading as="h2">Links</Heading>
          <ul className="mt-5 sm:space-y-1 max-sm:flex max-sm:items-center max-sm:space-x-2">
            <Link
              underline="hover"
              className="text-white block max-w-max"
              href="#hero"
            >
              Home
            </Link>
            <Link
              underline="hover"
              className="text-white block max-w-max"
              href="#about"
            >
              Sobre
            </Link>
            <Link
              underline="hover"
              className="text-white block max-w-max"
              href="#studies"
            >
              Estudos
            </Link>
            <Link
              underline="hover"
              className="text-white block max-w-max"
              href="#projets"
            >
              Projetos
            </Link>
            <Link
              underline="hover"
              className="text-white block max-w-max"
              href="#contact"
            >
              Contato
            </Link>
          </ul>
        </div>

        <LinkedinPosts />
      </div>
    </footer>
  )
}
