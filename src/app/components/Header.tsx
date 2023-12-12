'use client'

import { Linkedin } from '@/assets/linkedin'
import {
  Button,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { Github, Mail, PhoneCall } from 'lucide-react'
import React from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar
      height={'64px'}
      shouldHideOnScroll
      maxWidth="xl"
      className="bg-bg-primary"
      classNames={{ wrapper: 'px-3' }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="gap-1 max-sm:gap-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-primary"
        />
        <NavbarItem className="max-sm:hidden">
          <Button
            as={Link}
            href="www.linkedin.com/in/anderson-silva-988197151"
            isIconOnly
            isExternal
            variant="light"
            size="sm"
            className="px-1"
          >
            <Linkedin />
          </Button>
        </NavbarItem>
        <NavbarItem className="max-sm:hidden">
          <Button
            as={Link}
            href="https://github.com/andersonwea"
            isExternal
            isIconOnly
            variant="light"
            size="sm"
            className="px-1"
          >
            <Github color="#4DB5FF" size={22} />
          </Button>
        </NavbarItem>
        <NavbarItem className="flex space-x-1 items-center max-sm:hidden">
          <Button
            as={Link}
            href="callto:5511977533040"
            variant="light"
            size="sm"
            startContent={<PhoneCall color="#4DB5FF" size={22} />}
            className="text-white"
          >
            +55 (11) 97753-3040
          </Button>
        </NavbarItem>
        <NavbarItem className="flex space-x-1 items-center md:after:h-[2px] md:after:w-[52px] md:after:block md:after:content-[''] md:after:bg-primary md:after:rounded-xl max-sm:hidden">
          <Button
            as={Link}
            href="mailto:andersonwea14@gmail.com"
            variant="light"
            size="sm"
            startContent={<Mail color="#4DB5FF" size={22} />}
            className="text-white"
          >
            andersonwea14@gmail.com
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-bg-primary">
        <NavbarMenuItem className="flex space-x-1 items-center">
          <Button
            as={Link}
            href="callto:5511977533040"
            variant="light"
            size="sm"
            startContent={<PhoneCall color="#4DB5FF" size={22} />}
            className="text-white px-1"
          >
            +55 (11) 97753-3040
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex space-x-1 items-center">
          <Button
            as={Link}
            href="mailto:andersonwea14@gmail.com"
            variant="light"
            size="sm"
            startContent={<Mail color="#4DB5FF" size={22} />}
            className="text-white px-1"
          >
            andersonwea14@gmail.com
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex space-x-1 items-center">
          <Button
            as={Link}
            href="https://github.com/andersonwea"
            isExternal
            variant="light"
            size="sm"
            startContent={<Github color="#4DB5FF" size={22} />}
            className="px-1 text-white"
          >
            Github
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex space-x-1 items-center">
          <Button
            as={Link}
            href="www.linkedin.com/in/anderson-silva-988197151"
            isExternal
            variant="light"
            size="sm"
            startContent={<Linkedin />}
            className="px-1 text-white"
          >
            Linkedin
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
