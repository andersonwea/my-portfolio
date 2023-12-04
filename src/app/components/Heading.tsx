import React from 'react'
import { twMerge } from 'tailwind-merge'

interface HeadingProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function Heading({ children, className, as = 'h1' }: HeadingProps) {
  const styles = 'font-bold text-2xl text-white'

  const elements = {
    h1: <h1 className={twMerge(styles, className)}>{children}</h1>,
    h2: <h2 className={twMerge(styles, className)}>{children}</h2>,
    h3: <h3 className={twMerge(styles, className)}>{children}</h3>,
  }

  return elements[as]
}
