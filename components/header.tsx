'use client'

import { Container } from '@/components/container'
import { CardDescription, CardHeader, CardTitle } from 'ui'

interface HeaderProps {
  title: string
  description: string
}

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="border-b py-6 sm:py-12 mb-12 -mt-6">
      <Container>
        <CardHeader className="p-0 max-w-xl">
          <CardTitle level={1} className="sm:text-2xl text-xl">
            {title}
          </CardTitle>
          <CardDescription className="sm:text-base text-sm">{description}</CardDescription>
        </CardHeader>
      </Container>
    </header>
  )
}
