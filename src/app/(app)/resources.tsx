"use client"

import { Container } from "@/components/ui/container"
import { Link } from "@/components/ui/link"
import { Card } from "@/components/ui/card"

export function Resources() {
	return (
		<Container>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [&_.grid-cell]:relative [&_a]:absolute [&_a]:inset-0 [&_a]:size-full [&_a]:cursor-pointer">
				<div className="relative">
					<Link target="_blank" href="https://getjustd.com" aria-label="Justd" />
					<Card>
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
					<Link target="_blank" href="https://blocks.getjustd.com" aria-label="Justd" />
					<Card>
						<Card.Header>
							<Card.Title>Build your next idea even faster</Card.Title>
							<Card.Description>
								Effortlessly create stunning, professional-grade layouts that not only save time but
								also elevate the quality of your projects.
							</Card.Description>
						</Card.Header>
					</Card>
				</div>
			</div>
		</Container>
	)
}
