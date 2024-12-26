import { IconBrandJustd } from "justd-icons"
import { Link } from "ui"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex min-h-svh items-center justify-center">
			<div className="relative mx-auto w-full max-w-lg">
				<div className="absolute right-0 bottom-0 h-120 w-200 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 opacity-5 blur-3xl" />
				<Link href="/" className="mb-4 flex items-center gap-x-2">
					<IconBrandJustd className="size-6" />
					<strong className="font-semibold text-lg">Justd</strong>
				</Link>
				{children}
			</div>
		</div>
	)
}
