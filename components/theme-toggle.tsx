'use client'

import { IconDeviceDesktop, IconMoon, IconSun } from 'justd-icons'
import { Button, cn } from 'ui'
import { useTheme } from 'next-themes'

export function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex [&_button>[data-slot=icon]]:text-fg items-center gap-x-1 [&_svg]:size-4 [&_button]:rounded-full">
      <Button
        size="square-petite"
        appearance="plain"
        className={cn(theme === 'light' ? 'bg-secondary' : 'bg-bg')}
        aria-label="Switch to Light mode"
        onPress={() => setTheme('light')}
      >
        <IconSun />
      </Button>

      <Button
        size="square-petite"
        appearance="plain"
        className={cn(theme === 'dark' ? 'bg-secondary' : 'bg-bg')}
        aria-label="Switch to Dark mode"
        onPress={() => setTheme('dark')}
      >
        <IconMoon />
      </Button>

      <Button
        size="square-petite"
        appearance="plain"
        className={cn(theme === 'system' ? 'bg-secondary' : 'bg-bg')}
        aria-label="Switch to System mode"
        onPress={() => setTheme('system')}
      >
        <IconDeviceDesktop />
      </Button>
    </div>
  )
}
