"use client"

import React from "react"

import { ThemeSwitcher } from "@/components/theme-switcher"
import {
  IconApple,
  IconBrandGithub,
  IconBrandJustd,
  IconCallIncoming,
  IconCallOff,
  IconCallOutgoing,
  IconColors,
  IconContacts,
  IconCube,
  IconDevicePhone,
  IconHome,
  IconTelephone
} from "justd-icons"
import { usePathname } from "next/navigation"
import { buttonStyles, Link, Navbar } from "ui"

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
            <IconHome className="size-4 lg:hidden inline" />
            Home
          </Navbar.Item>
          <Navbar.Item isCurrent={pathname === "/about"} href="/about">
            <IconApple className="size-4 lg:hidden inline" />
            About
          </Navbar.Item>
          <Navbar.Item isCurrent={pathname === "/contact"} href="/contact">
            <IconTelephone className="size-4 lg:hidden inline" />
            Contact
          </Navbar.Item>
          <Navbar.Item target='_blank' href="https://getjustd.com/components">
            <IconCube />
            Components
          </Navbar.Item>
          <Navbar.Item target='_blank' href="https://getjustd.com/icons">
            <IconBrandJustd />
            Icons
          </Navbar.Item>
          <Navbar.Item target='_blank' href="https://getjustd.com/themes">
            <IconColors />
            Themes
          </Navbar.Item>
        </Navbar.Section>
        <Navbar.Section className="sm:ml-auto lg:flex hidden">
          <Navbar.Flex className="gap-1">
            <ThemeSwitcher />
            <Link
              aria-label="Goto GitHub Repository"
              className={buttonStyles({ appearance: "outline", size: "square-petite" })}
              href="https://github.com/irsyadadl/next-starter-kit"
            >
              <IconBrandGithub />
            </Link>
            <Link
              aria-label="Goto getjustd.com"
              className={buttonStyles({ appearance: "outline", size: "square-petite" })}
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
              href="https://github.com/irsyadadl/next-starter-kit"
            >
              <IconBrandGithub />
            </Link>
            <Link
              aria-label="Goto getjustd.com"
              className={buttonStyles({ appearance: "outline", size: "square-petite" })}
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
        </Navbar.Flex>
      </Navbar.Compact>
      {children}
    </Navbar>
  )
}
