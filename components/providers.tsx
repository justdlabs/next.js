"use client"

import { useRouter } from "next/navigation"
import { RouterProvider } from "react-aria-components"

import dynamic from "next/dynamic"

const ThemeProvider = dynamic(() => import("./theme-provider").then((mod) => mod.ThemeProvider), {
  ssr: false,
})

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <RouterProvider navigate={router.push}>
      <ThemeProvider enableSystem attribute="class">
        {children}
      </ThemeProvider>
    </RouterProvider>
  )
}
