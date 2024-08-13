'use client'

import { Container } from '@/components/container'
import { Card } from 'ui'

interface HeaderProps {
  title: string
  description: string
}

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="border-b py-6 sm:py-12 mb-12 -mt-6">
      <Container>
        <Card.Header className="p-0 max-w-xl">
          <Card.Title level={1} className="sm:text-2xl text-xl">
            {title}
          </Card.Title>
          <Card.Description className="sm:text-base text-sm">{description}</Card.Description>
        </Card.Header>
      </Container>
    </header>
  )
}
