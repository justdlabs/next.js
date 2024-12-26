"use client"

import { cn } from "@/utils/classes"
import { IconDeviceDesktop, IconMoon, IconSun } from "justd-icons"
import { useTheme } from "next-themes"
import { Button } from "ui"

export function ToggleTheme() {
	const { theme, setTheme } = useTheme()

	return (
		<div className="flex items-center gap-x-1 [&_button>[data-slot=icon]]:text-fg [&_button]:rounded-full [&_svg]:size-4">
			<Button
				size="square-petite"
				appearance="plain"
				className={cn(theme === "light" ? "bg-secondary" : "bg-bg")}
				aria-label="Switch to Light mode"
				onPress={() => setTheme("light")}
			>
				<IconSun />
			</Button>

			<Button
				size="square-petite"
				appearance="plain"
				className={cn(theme === "dark" ? "bg-secondary" : "bg-bg")}
				aria-label="Switch to Dark mode"
				onPress={() => setTheme("dark")}
			>
				<IconMoon />
			</Button>

			<Button
				size="square-petite"
				appearance="plain"
				className={cn(theme === "system" ? "bg-secondary" : "bg-bg")}
				aria-label="Switch to System mode"
				onPress={() => setTheme("system")}
			>
				<IconDeviceDesktop />
			</Button>
		</div>
	)
}
