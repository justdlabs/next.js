import { Header } from '@/components/header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact'
}

export default function Page() {
  return (
    <div className="py-6">
      <Header title="About" description="About Justd" />
    </div>
  )
}
