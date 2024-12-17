import { IconBrandJustd } from "justd-icons"
import { Link } from "ui"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative items-center justify-center min-h-svh">
      <div className="max-w-lg mx-auto w-full relative">
        <div className="absolute right-0 bottom-0 w-200 h-120 blur-3xl rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 opacity-5" />
        <Link href="/" className="flex items-center gap-x-2 mb-4">
          <IconBrandJustd className="size-6" />
          <strong className="font-semibold text-lg">Justd</strong>
        </Link>
        {children}
      </div>
    </div>
  )
}
