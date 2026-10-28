import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteSidebar } from '@/components/site-sidebar'

export const metadata: Metadata = {
    title: 'Blog | Bellu AI',
    description: 'Updates and perspectives from Bellu AI.',
}

export default function BlogPage() {
    return (
        <div className="mx-auto min-h-screen max-w-6xl border-x px-5 font-sans sm:px-8">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[150px_minmax(0,1fr)]">
                <SiteSidebar activeItem="Blog" />
                <main className="min-w-0">
                    <section className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11 lg:py-28">
                        <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                            01
                        </span>
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-medium tracking-tight">Blog</h1>
                            <div className="mt-6 border-t">
                                <article className="grid gap-3 border-b py-6 sm:grid-cols-[84px_minmax(0,1fr)] sm:gap-6">
                                    <time
                                        dateTime="2026-10-28"
                                        className="text-muted-foreground pt-1 font-mono text-xs"
                                    >
                                        2026.10.28
                                    </time>
                                    <div>
                                        <h2 className="text-lg font-medium tracking-tight">
                                            <Link
                                                href="/blog/introducing-bellu-continuous"
                                                className="transition-colors hover:text-violet-700"
                                            >
                                                Introducing Bellu Continuous
                                            </Link>
                                        </h2>
                                        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                            Why we are building continuous security intelligence:
                                            AI agents, connected knowledge graphs, and a path toward
                                            infrastructure that can defend and heal itself.
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
