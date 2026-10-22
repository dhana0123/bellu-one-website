import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { HeroHeader } from '@/components/hero-section-9-header'
import Footer from '@/components/footer-2'

export const metadata: Metadata = {
    title: 'Careers | Bellu AI',
    description: 'Explore careers at Bellu AI and help shape the future of autonomous cybersecurity.',
}

export default function CareersPage() {
    return (
        <>
            <HeroHeader />
            <main className="flex-1">
                <section className="px-6 pb-20 pt-36 md:pb-28 md:pt-44">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-muted-foreground text-sm font-medium">Careers</p>
                        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
                            Help build what comes next in cybersecurity.
                        </h1>
                        <p className="text-muted-foreground mt-8 max-w-3xl text-balance text-xl leading-relaxed">
                            We&apos;re building connected, intelligent tools to help security teams understand their environments, investigate threats, and act with confidence.
                        </p>
                        <div className="mt-16 flex flex-col justify-between gap-6 border-t pt-8 sm:flex-row sm:items-center">
                            <div>
                                <h2 className="text-2xl font-semibold tracking-tight">Interested in joining Bellu AI?</h2>
                                <p className="text-muted-foreground mt-2">Reach out to start a conversation with our team.</p>
                            </div>
                            <Link href="/get-demo" className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4">
                                Contact us <ArrowUpRight aria-hidden="true" className="size-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}