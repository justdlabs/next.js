import { Container } from '@/components/container'
import { Header } from '@/components/header'
import { Card, CardDescription, CardHeader, CardTitle, Grid, GridItem } from 'ui'

export default function Home() {
  return (
    <div className="py-6">
      <Header
        title="Starter Kit"
        description="Next.js 14 Starter Kit with Tailwind CSS, TypeScript, React, React Aria Components, Justd Components, Framer Motion, and more."
      />
      <Container>
        <Grid
          gap={6}
          columns={{
            initial: 1,
            sm: 2,
            lg: 3
          }}
          className="[&_.xrkr:hover]:bg-tertiary"
        >
          <GridItem textValue="Justd" href="https://justd.co">
            <Card>
              <CardHeader>
                <CardTitle>Just D.</CardTitle>
                <CardDescription>
                  Just D. is a chill set of React components, built on top of React Aria Components, all about keeping
                  the web accessible.
                </CardDescription>
              </CardHeader>
            </Card>
          </GridItem>

          <GridItem textValue="Colors" href="https://justd.co/colors">
            <Card>
              <CardHeader>
                <CardTitle>Colors</CardTitle>
                <CardDescription>
                  A stash of over 154 colors blending TailwindCSS vibes with HTML color names, served up in 8 slick
                  formats.
                </CardDescription>
              </CardHeader>
            </Card>
          </GridItem>

          <GridItem textValue="Colors" href="https://paranoid.irsyad.co">
            <Card>
              <CardHeader>
                <CardTitle>Paranoid</CardTitle>
                <CardDescription>
                  A library of beautifully crafted react icons, perfect for enhancing the visual appeal and user
                  experience of your web applications.
                </CardDescription>
              </CardHeader>
            </Card>
          </GridItem>
        </Grid>
      </Container>
    </div>
  )
}
