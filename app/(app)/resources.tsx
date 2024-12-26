"use client"

import { Container } from "@/components/container"
import { Card, Link } from "ui"

export function Resources() {
	return (
		<Container>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [&_.grid-cell]:relative [&_a]:absolute [&_a]:inset-0 [&_a]:size-full [&_a]:cursor-pointer">
				<div className="relative">
					<Link target="_blank" href="https://getjustd.com" aria-label="Justd" />
					<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/30">
						<Card.Header>
							<Card.Title>Justd</Card.Title>
							<Card.Description>
								Justd is a chill set of React components, built on top of React Aria Components, all
								about keeping the web accessible.
							</Card.Description>
						</Card.Header>
					</Card>
				</div>
				<div className="relative">
					<Link target="_blank" href="https://getjustd.com/colors" aria-label="Colors" />
					<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/30">
						<Card.Header>
							<Card.Title>Colors</Card.Title>
							<Card.Description>
								A stash of over 154 colors blending TailwindCSS vibes with HTML color names, served up
								in 8 slick formats.
							</Card.Description>
						</Card.Header>
					</Card>
				</div>
				<div className="relative">
					<Link target="_blank" href="https://getjustd.com/icons" aria-label="Icons" />
					<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/30">
						<Card.Header>
							<Card.Title>Icons</Card.Title>
							<Card.Description>
								A library of beautifully crafted react icons, perfect for enhancing the visual appeal
								and user experience of your web applications.
							</Card.Description>
						</Card.Header>
					</Card>
				</div>
			</div>
		</Container>
	)
}
