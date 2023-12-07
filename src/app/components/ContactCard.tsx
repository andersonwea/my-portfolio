import { Card, CardBody, CardFooter, Link } from '@nextui-org/react'
import { Text } from './Text'

interface ContactCardProps {
  icon: JSX.Element
  content: string
  type: 'email' | 'phone'
}

export function ContactCard({ icon, content, type }: ContactCardProps) {
  return (
    <Card className="bg-bg-secondary p-5 max-w-[292px] w-full">
      <CardBody>
        <div className="flex flex-col items-center">
          {icon}

          <Text className="text-white">
            {type === 'email' ? 'Email' : 'Telefone'}
          </Text>
          <Text className="mt-1">{content}</Text>
        </div>
      </CardBody>
      <CardFooter>
        <Link
          className="mx-auto"
          isExternal
          href={
            type === 'email'
              ? `mailto:${content}`
              : 'https://api.whatsapp.com/send?phone=5511977533040&text=Ol%C3%A1,%20vi%20seu%20portfolio%20e%20quero%20bater%20um%20papo.'
          }
        >
          Mande uma mensagem
        </Link>
      </CardFooter>
    </Card>
  )
}
