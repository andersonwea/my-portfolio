import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TextProps {
  children: string | undefined
  className?: string
  as?: 'p' | 'span'
}

export function Text({ children, className, as = 'span' }: TextProps) {
  const styles = 'text-base text-light'

  const elements = {
    span: <span className={twMerge(styles, className)}>{children}</span>,
    p: <p className={twMerge(styles, className)}>{children}</p>,
  }

  return elements[as]
}
