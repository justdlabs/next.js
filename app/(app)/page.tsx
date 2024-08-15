import { Header } from '@/components/header'

import { Resources } from './resources'

export default function Home() {
  return (
    <div className="py-6">
      <Header
        title="Just D. Starter Kit"
        description="Next.js 14 Starter Kit with Tailwind CSS, TypeScript, React, React Aria Components, Justd Components, Framer Motion, and more."
      />
      <Resources />
    </div>
  )
}
