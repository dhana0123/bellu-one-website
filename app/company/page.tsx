import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Bot, Network, ShieldCheck } from 'lucide-react'
import { HeroHeader } from '@/components/hero-section-9-header'
import Footer from '@/components/footer-2'

export const metadata: Metadata = {
    title: 'Company | Bellu AI',
    description: 'Learn what Bellu AI is building for connected, autonomous cybersecurity.',
}

const principles = [
    {
        icon: Network,
        title: 'Connect the security picture',
        description: 'Bring code, cloud infrastructure, identities, AI systems, and runtime context into one connected view.',
    },
    {
        icon: Bot,
        title: 'Use intelligence with context',
        description: 'Help security teams investigate findings, correlate evidence, and understand paths to critical assets.',
    },
    {
        icon: ShieldCheck,
        title: 'Validate before acting',
        description: 'Make safe testing and evidence-led remediation part of the vision for autonomous defense.',
    },
]

export default function CompanyPage() {
    return (
        <>
            <HeroHeader />
            <main className="flex-1">
                <section className="px-6 pb-20 pt-36 md:pb-28 md:pt-44">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-muted-foreground text-sm font-medium">Company</p>
                        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
                            One platform. Connected intelligence. Continuous defense.
                        </h1>
                        <p className="text-muted-foreground mt-8 max-w-3xl text-balance text-xl leading-relaxed">
                            Bellu AI is building toward a more connected and autonomous approach to cybersecurity—helping organizations understand their infrastructure, investigate threats, and move toward validated remediation.
                        </p>

                        <div className="mt-16 grid gap-4 md:grid-cols-3">
                            {principles.map(({ icon: Icon, title, description }) => (
                                <article key={title} className="rounded-2xl border bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-transparent p-6 sm:p-8">
                                    <Icon aria-hidden="true" className="size-6 text-blue-600" />
                                    <h2 className="mt-8 text-xl font-semibold tracking-tight">{title}</h2>
                                    <p className="text-muted-foreground mt-3 leading-relaxed">{description}</p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-20 flex flex-col justify-between gap-6 border-t pt-8 sm:flex-row sm:items-center">
                            <div>
                                <h2 className="text-2xl font-semibold tracking-tight">Explore the platform</h2>
                                <p className="text-muted-foreground mt-2">See the product direction and meet the founder.</p>
                            </div>
                            <Link href="/get-demo" className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4">
                                Request a demo <ArrowUpRight aria-hidden="true" className="size-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
