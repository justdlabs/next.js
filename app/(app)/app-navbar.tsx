"use client"

import { useEffect, useState } from "react"

import { ThemeSwitcher } from "@/components/theme-switcher"
import {
	IconApple,
	IconArrowUpRight,
	IconBrandGithub,
	IconBrandJustd,
	IconChevronDown,
	IconColors,
	IconColorSwatch,
	IconCube,
	IconHome,
	IconTelephone,
} from "justd-icons"
import { usePathname } from "next/navigation"
import { buttonStyles, Link, Menu, Navbar } from "ui"

export function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
	const pathname = usePathname()

	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => setIsOpen(false), [pathname])
	return (
		<Navbar isSticky isOpen={isOpen} onOpenChange={setIsOpen} {...props}>
			<Navbar.Nav>
				<Navbar.Logo className="text-fg" href="/">
					<IconBrandJustd />
				</Navbar.Logo>
				<Navbar.Section>
					<Navbar.Item isCurrent={pathname === "/"} href="/">
						<IconHome className="inline size-4 lg:hidden" />
						Home
					</Navbar.Item>
					<Navbar.Item isCurrent={pathname === "/about"} href="/about">
						<IconApple className="inline size-4 lg:hidden" />
						About
					</Navbar.Item>
					<Navbar.Item isCurrent={pathname === "/contact"} href="/contact">
						<IconTelephone className="inline size-4 lg:hidden" />
						Contact
					</Navbar.Item>
					<Menu>
						<Navbar.Item className="group">
							Resources...
							<IconChevronDown className="ml-2 size-4 duration-200 group-data-pressed:rotate-180" />
						</Navbar.Item>
						<Menu.Content className="sm:min-w-48">
							<Menu.Item target="_blank" href="https://getjustd.com/components">
								<IconCube />
								Components
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://getjustd.com/icons">
								<IconBrandJustd />
								Icons
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://getjustd.com/themes">
								<IconColors />
								Themes
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://getjustd.com/colors">
								<IconColorSwatch />
								Colors
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
						</Menu.Content>
					</Menu>
				</Navbar.Section>
				<Navbar.Section className="hidden sm:ml-auto lg:flex">
					<Navbar.Flex className="gap-1 md:gap-1td">
						<ThemeSwitcher />
						<Link
							aria-label="Goto GitHub Repository"
							className={buttonStyles({ appearance: "outline", size: "square-petite" })}
							target="_blank"
							href="https://github.com/justdlabs/next.js"
						>
							<IconBrandGithub />
						</Link>
						<Link
							aria-label="Goto getjustd.com"
							className={buttonStyles({ appearance: "outline", size: "square-petite" })}
							target="_blank"
							href="https://justd.co"
						>
							<IconBrandJustd />
						</Link>
						<Navbar.Item
							className={buttonStyles({ appearance: "outline", size: "small" })}
							isCurrent={pathname === "/login"}
							href="/login"
						>
							Login
						</Navbar.Item>
					</Navbar.Flex>
				</Navbar.Section>
			</Navbar.Nav>
			<Navbar.Compact>
				<Navbar.Flex>
					<Navbar.Trigger className="-ml-2" />
				</Navbar.Flex>
				<Navbar.Flex>
					<Navbar.Flex className="gap-1">
						<ThemeSwitcher />
						<Link
							aria-label="Goto GitHub Repository"
							className={buttonStyles({ appearance: "outline", size: "square-petite" })}
							href="https://github.com/justdlabs/next.js"
						>
							<IconBrandGithub />
						</Link>
						<Link
							aria-label="Goto getjustd.com"
							className={buttonStyles({ appearance: "outline", size: "square-petite" })}
							href="https://getjustd.com"
						>
							<IconBrandJustd />
						</Link>
						<Navbar.Item
							className={buttonStyles({ appearance: "outline", size: "small" })}
							isCurrent={pathname === "/login"}
							href="/login"
						>
							Login
						</Navbar.Item>
					</Navbar.Flex>
				</Navbar.Flex>
			</Navbar.Compact>
			{children}
		</Navbar>
	)
}
