import { Text } from './Text'
import { Heading } from './Heading'
import { LinkedinPosts } from './LinkedinPosts'
import { Link } from '@nextui-org/react'

export function Footer() {
  return (
    <footer className="bg-primary mt-[120px]">
      <div className="max-w-[1232px] mx-auto grid grid-cols-[1fr_0.1fr_1fr] py-10">
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

        <div>
          <Heading as="h2">Links</Heading>
          <ul className="mt-5 space-y-1">
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
