import { Docker } from '@/assets/skills/Docker'
import { ExpressLight } from '@/assets/skills/ExpressLight'
import { JavaScript } from '@/assets/skills/JavaScript'
import { NextLight } from '@/assets/skills/NextLight'
import { NodeLight } from '@/assets/skills/NodeLight'
import { PostgresLight } from '@/assets/skills/PostgreLight'
import { Prisma } from '@/assets/skills/Prisma'
import { ReactLight } from '@/assets/skills/ReactLight'
import { StyledComponents } from '@/assets/skills/StyledComponents'
import { TaillwindLight } from '@/assets/skills/TaillwindLight'
import { TypeScript } from '@/assets/skills/Typescript'
import { Button, Tooltip } from '@nextui-org/react'

const skills = [
  {
    name: 'NodeJs',
    icon: NodeLight,
  },
  {
    name: 'TypeScript',
    icon: TypeScript,
  },
  {
    name: 'JavaScript',
    icon: JavaScript,
  },
  {
    name: 'Express',
    icon: ExpressLight,
  },
  {
    name: 'Prisma',
    icon: Prisma,
  },
  {
    name: 'PostgresSQL',
    icon: PostgresLight,
  },
  {
    name: 'Docker',
    icon: Docker,
  },
  {
    name: 'React',
    icon: ReactLight,
  },
  {
    name: 'Next',
    icon: NextLight,
  },
  {
    name: 'Taillwind',
    icon: TaillwindLight,
  },
  {
    name: 'Styled Component',
    icon: StyledComponents,
  },
]

export function Skills() {
  return (
    <div className="flex gap-3 flex-wrap items-center justify-center">
      {skills.map((skill, index) => (
        <Tooltip key={skill.name + index} content={skill.name} color="primary">
          <Button isIconOnly variant="bordered" color="primary" size="lg">
            <skill.icon />
          </Button>
        </Tooltip>
      ))}
    </div>
  )
}
