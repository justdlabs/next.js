import { Providers } from "@/components/providers"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Toast } from "ui"

import "./globals.css"

const fontSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-sans",
})
const fontMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-mono",
})

export const metadata: Metadata = {
	title: {
		template: "%s / Justd Starter Kit with Next",
		default: "Justd Starter Kit with Next",
	},
	description:
		"Next.js 15 Starter Kit with Tailwind CSS, TypeScript, React, React Aria Components, Justd Components, Framer Motion, and more.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true} className={`${fontSans.variable} ${fontMono.variable}`}>
			<body className="min-h-svh antialiased">
				<Toast />
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
