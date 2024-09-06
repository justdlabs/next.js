'use client'

import { IconDeviceDesktop, IconMoon, IconSun } from 'justd-icons'
import { useTheme } from 'next-themes'
import { Button, cn } from 'ui'

export function ToggleTheme() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className="flex [&_button>[data-slot=icon]]:text-fg items-center gap-x-1 [&_svg]:size-4 [&_button]:rounded-full">
      <Button
        size="square-petite"
        appearance="plain"
        className={cn(resolvedTheme === 'light' ? 'bg-secondary' : 'bg-bg')}
        aria-label="Switch to Light mode"
        onPress={() => setTheme('light')}
      >
        <IconSun />
      </Button>

      <Button
        size="square-petite"
        appearance="plain"
        className={cn(resolvedTheme === 'dark' ? 'bg-secondary' : 'bg-bg')}
        aria-label="Switch to Dark mode"
        onPress={() => setTheme('dark')}
      >
        <IconMoon />
      </Button>

      <Button
        size="square-petite"
        appearance="plain"
        className={cn(resolvedTheme === 'system' ? 'bg-secondary' : 'bg-bg')}
        aria-label="Switch to System mode"
        onPress={() => setTheme('system')}
      >
        <IconDeviceDesktop />
      </Button>
    </div>
  )
}
