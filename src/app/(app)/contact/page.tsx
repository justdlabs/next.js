import { Header } from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Contact Us",
}

export default function Page() {
	return (
		<div className="py-6">
			<Header
				title="Contact Us"
				description="Have any questions or need assistance? Feel free to reach out to us anytime. We’re here to help you with anything you need."
			/>
		</div>
	)
}
