import { Image } from '@nextui-org/react'
import Link from 'next/link'
import { Heading } from './Heading'

export function LinkedinPosts() {
  return (
    <div className="justify-self-end">
      <Heading as="h2">Veja no linkedin</Heading>
      <ul className="flex flex-wrap gap-2 max-w-xs mt-5">
        <Link href="#">
          <Image
            width={80}
            height={80}
            src="https://teste.com"
            fallbackSrc="https://via.placeholder.com/80x80"
            alt=""
          />
        </Link>
        <Link href="#">
          <Image
            width={80}
            height={80}
            src="https://teste.com"
            fallbackSrc="https://via.placeholder.com/80x80"
            alt=""
          />
        </Link>
        <Link href="#">
          <Image
            width={80}
            height={80}
            src="https://teste.com"
            fallbackSrc="https://via.placeholder.com/80x80"
            alt=""
          />
        </Link>
        <Link href="#">
          <Image
            width={80}
            height={80}
            src="https://teste.com"
            fallbackSrc="https://via.placeholder.com/80x80"
            alt=""
          />
        </Link>
        <Link href="#">
          <Image
            width={80}
            height={80}
            src="https://teste.com"
            fallbackSrc="https://via.placeholder.com/80x80"
            alt=""
          />
        </Link>
        <Link href="#">
          <Image
            width={80}
            height={80}
            src="https://teste.com"
            fallbackSrc="https://via.placeholder.com/80x80"
            alt=""
          />
        </Link>
      </ul>
    </div>
  )
}
