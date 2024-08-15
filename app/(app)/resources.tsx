'use client'

import { Container } from '@/components/container'
import { Card, Grid, Link } from 'ui'

export function Resources() {
  return (
    <Container>
      <Grid
        gap={6}
        columns={{
          initial: 1,
          sm: 2,
          lg: 3
        }}
        className="[&_a]:cursor-pointer [&_a]:inset-0 [&_a]:absolute [&_a]:size-full [&_.grid-cell]:relative"
      >
        <Grid.Item>
          <Link target="_blank" href="https://getjustd.com" aria-label="Justd" />
          <Card>
            <Card.Header>
              <Card.Title>Just D.</Card.Title>
              <Card.Description>
                Just D. is a chill set of React components, built on top of React Aria Components, all about keeping the
                web accessible.
              </Card.Description>
            </Card.Header>
          </Card>
        </Grid.Item>

        <Grid.Item>
          <Link target="_blank" href="https://getjustd.com/colors" aria-label="Colors" />
          <Card>
            <Card.Header>
              <Card.Title>Colors</Card.Title>
              <Card.Description>
                A stash of over 154 colors blending TailwindCSS vibes with HTML color names, served up in 8 slick
                formats.
              </Card.Description>
            </Card.Header>
          </Card>
        </Grid.Item>

        <Grid.Item>
          <Link target="_blank" href="https://getjustd.com/icons" aria-label="Icons" />
          <Card>
            <Card.Header>
              <Card.Title>Icons</Card.Title>
              <Card.Description>
                A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user
                experience of your web applications.
              </Card.Description>
            </Card.Header>
          </Card>
        </Grid.Item>
      </Grid>
    </Container>
  )
}
