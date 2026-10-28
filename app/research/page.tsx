import type { Metadata } from 'next'
import { SiteSidebar } from '@/components/site-sidebar'

export const metadata: Metadata = {
    title: 'Research | Bellu AI',
    description:
        'Explore Bellu AI research into cybersecurity, AI-driven threat discovery, and self-healing infrastructure.',
}

export default function ResearchPage() {
    return (
        <div className="mx-auto min-h-screen max-w-6xl border-x px-5 font-sans sm:px-8">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[150px_minmax(0,1fr)]">
                <SiteSidebar activeItem="Research" />
                <main className="min-w-0">
                    <section className="grid gap-8 border-b py-16 sm:py-20 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11 lg:py-28">
                        <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                            01
                        </span>
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-medium tracking-tight">Research</h1>
                            <p className="text-muted-foreground mt-5 text-sm leading-relaxed">
                                We study how AI can help secure increasingly complex digital
                                infrastructure. Our research brings together vulnerability
                                discovery, AI-driven investigation, and knowledge graphs that
                                connect code, cloud, identities, dependencies, and runtime.
                            </p>
                            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                                We are working toward systems that can recognize emerging threats,
                                understand their impact, and support safe, verified responses—with
                                the long-term goal of making infrastructure more resilient and
                                capable of healing itself.
                            </p>
                        </div>
                    </section>
                    <section className="grid gap-6 py-10 sm:py-12 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11">
                        <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                            02
                        </span>
                        <div className="max-w-2xl">
                            <h2 className="border-b pb-4 text-xl font-medium tracking-tight">
                                Articles
                            </h2>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
