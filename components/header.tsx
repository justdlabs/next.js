"use client"

import { Container } from "@/components/container"
import { Card } from "ui"

interface HeaderProps {
	title: string
	description: string
}

export function Header({ title, description }: HeaderProps) {
	return (
		<header className="-mt-6 mb-12 border-b py-6 sm:py-12">
			<Container>
				<Card.Header className="max-w-xl p-0">
					<Card.Title level={1} className="text-xl sm:text-2xl">
						{title}
					</Card.Title>
					<Card.Description className="text-sm sm:text-base">{description}</Card.Description>
				</Card.Header>
			</Container>
		</header>
	)
}
