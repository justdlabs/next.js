import { LoginForm } from "@/app/(auth)/login/login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Login",
}

export default function Page() {
	return <LoginForm />
}
