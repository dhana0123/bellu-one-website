import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteSidebar } from '@/components/site-sidebar'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
    title: 'Careers | Bellu AI',
    description: 'Explore careers at Bellu AI and help shape the future of autonomous cybersecurity.',
}

export default function CareersPage() {
    return (
        <div className="mx-auto min-h-screen max-w-6xl border-x px-5 font-sans sm:px-8">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[150px_minmax(0,1fr)]">
                <SiteSidebar activeItem="Careers" />
                <main className="min-w-0">
                    <section className="grid gap-8 border-b py-16 sm:py-20 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11 lg:py-28">
                        <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                            01
                        </span>
                        <div className="max-w-2xl">
                            <h1 className="text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                                Help build what comes next in cybersecurity.
                            </h1>
                            <p className="text-muted-foreground mt-5 text-sm leading-relaxed">
                                We&apos;re building connected, intelligent tools to help security
                                teams understand their environments, investigate threats, and act
                                with confidence.
                            </p>
                            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                                Bellu brings together researchers, engineers, and makers working
                                on autonomous security, self-healing systems, and the future of
                                physical AI. If these problems inspire you, we&apos;d like to hear
                                from you.
                            </p>
                        </div>
                    </section>
                    <section className="grid gap-6 py-10 sm:py-12 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11">
                        <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                            02
                        </span>
                        <div className="flex max-w-2xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
                            <div>
                                <h2 className="text-xl font-medium tracking-tight">
                                    Interested in joining Bellu AI?
                                </h2>
                                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                    Reach out to start a conversation with our team.
                                </p>
                            </div>
                            <Link
                                href="/get-demo"
                                className="inline-flex w-fit items-center gap-2 text-sm font-medium underline underline-offset-4 transition-colors hover:text-violet-700"
                            >
                                Contact us <ArrowUpRight aria-hidden="true" className="size-4" />
                            </Link>
                        </div>
                    </section>
                </main>
                <div className="lg:col-span-2">
                    <SiteFooter />
                </div>
            </div>
        </div>
    )
}