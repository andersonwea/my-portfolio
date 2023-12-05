import { Heading } from './Heading'
import { Text } from './Text'

interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <Text className="text-light">Saiba mais</Text>
      <Heading className="text-primary font-normal text-5xl">{title}</Heading>
    </div>
  )
}
