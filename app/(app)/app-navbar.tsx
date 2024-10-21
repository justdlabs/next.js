"use client"

import { IconBrandJustd, IconLogin, IconSearch } from "justd-icons"
import { usePathname } from "next/navigation"
import { Button, buttonStyles, Link, Navbar } from "ui"

export function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
  const pathname = usePathname()
  return (
    <Navbar {...props}>
      <Navbar.Nav>
        <Navbar.Logo className="text-fg" href="/">
          <IconBrandJustd />
        </Navbar.Logo>
        <Navbar.Section>
          <Navbar.Item isCurrent={pathname === "/"} href="/">
            Home
          </Navbar.Item>
          <Navbar.Item isCurrent={pathname === "/about"} href="/about">
            About
          </Navbar.Item>
          <Navbar.Item isCurrent={pathname === "/contact"} href="/contact">
            Contact
          </Navbar.Item>
        </Navbar.Section>
        <Navbar.Section className="sm:ml-auto">
          <Navbar.Item isCurrent={pathname === "/login"} href="/login">
            Login
          </Navbar.Item>
        </Navbar.Section>
      </Navbar.Nav>
      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger className="-ml-2" />
        </Navbar.Flex>{" "}
        <Navbar.Flex>
          <Navbar.Flex>
            <Button appearance="plain" size="square-petite" aria-label="Search for products">
              <IconSearch />
            </Button>
            <Link className={buttonStyles({ appearance: "plain", size: "square-petite" })} aria-label="Login">
              <IconLogin />
            </Link>
          </Navbar.Flex>
        </Navbar.Flex>
      </Navbar.Compact>
      {children}
    </Navbar>
  )
}
