import { Linkedin } from '@/assets/linkedin'
import {
  Button,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import { Github, Mail, PhoneCall } from 'lucide-react'

export function Header() {
  return (
    <Navbar
      height={'64px'}
      shouldHideOnScroll
      maxWidth="xl"
      className="bg-bg-primary"
    >
      <NavbarContent className="gap-1">
        <NavbarItem>
          <Button as={Link} isIconOnly variant="light" size="sm">
            <Linkedin />
          </Button>
        </NavbarItem>
        <NavbarItem>
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
        <NavbarItem className="flex space-x-1 items-center">
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
        <NavbarItem className="flex space-x-1 items-center after:h-[2px] after:w-[52px] after:block after:content-[''] after:bg-primary after:rounded-xl">
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
    </Navbar>
  )
}
