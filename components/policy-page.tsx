import Link from 'next/link'
import { SiteSidebar } from '@/components/site-sidebar'
import { SiteFooter } from '@/components/site-footer'

export type PolicySection = {
    heading: string
    paragraphs: string[]
}

export function PolicyPage({
    title,
    intro,
    sections,
}: {
    title: string
    intro: string
    sections: PolicySection[]
}) {
    return (
        <div className="mx-auto min-h-screen max-w-6xl border-x px-5 font-sans sm:px-8">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[150px_minmax(0,1fr)]">
                <SiteSidebar activeItem="" />
                <main className="min-w-0">
                    <article>
                        <section className="grid gap-8 border-b py-16 sm:py-20 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11 lg:py-28">
                            <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                                01
                            </span>
                            <div className="max-w-2xl">
                                <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                                    Draft for review
                                </p>
                                <h1 className="mt-3 text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                                    {title}
                                </h1>
                                <p className="text-muted-foreground mt-5 text-sm leading-relaxed">
                                    {intro}
                                </p>
                                <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                                    This draft is for website review and is not legal advice. Have
                                    qualified counsel review and adapt it before relying on or
                                    publishing it as a binding policy.
                                </p>
                            </div>
                        </section>

                        <div className="divide-y">
                            {sections.map(({ heading, paragraphs }, index) => (
                                <section
                                    key={heading}
                                    className="grid gap-6 py-8 sm:py-10 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11"
                                >
                                    <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                                        {String(index + 2).padStart(2, '0')}
                                    </span>
                                    <div className="max-w-2xl">
                                        <h2 className="text-lg font-medium tracking-tight">
                                            {heading}
                                        </h2>
                                        {paragraphs.map((paragraph) => (
                                            <p
                                                key={paragraph}
                                                className="text-muted-foreground mt-3 text-sm leading-relaxed"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>

                        <p className="text-muted-foreground grid gap-6 border-t py-8 text-sm leading-relaxed sm:py-10 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11">
                            <span className="hidden font-mono text-[10px] lg:block">
                                {String(sections.length + 2).padStart(2, '0')}
                            </span>
                            <span className="max-w-2xl">
                                Questions? Visit our{' '}
                                <Link
                                    href="/get-demo"
                                    className="text-foreground underline underline-offset-4 transition-colors hover:text-violet-700"
                                >
                                    demo request page
                                </Link>
                                . The form is currently a visual prototype and does not transmit
                                submissions.
                            </span>
                        </p>
                    </article>
                </main>
                <div className="lg:col-span-2">
                    <SiteFooter />
                </div>
            </div>
        </div>
    )
}
