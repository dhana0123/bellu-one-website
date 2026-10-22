import Link from 'next/link'
import { HeroHeader } from '@/components/hero-section-9-header'
import Footer from '@/components/footer-2'

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
        <>
            <HeroHeader />
            <main className="flex-1 px-6 pb-20 pt-36 md:pb-28 md:pt-44">
                <article className="mx-auto max-w-3xl">
                    <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Draft for review</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">{title}</h1>
                    <p className="text-muted-foreground mt-6 text-lg leading-relaxed">{intro}</p>
                    <p className="text-muted-foreground mt-4 text-sm">
                        This draft is for website review and is not legal advice. Have qualified counsel review and adapt it before relying on or publishing it as a binding policy.
                    </p>

                    <div className="mt-12 space-y-10">
                        {sections.map(({ heading, paragraphs }) => (
                            <section key={heading}>
                                <h2 className="text-xl font-semibold tracking-tight">{heading}</h2>
                                {paragraphs.map((paragraph) => (
                                    <p key={paragraph} className="text-muted-foreground mt-3 leading-7">{paragraph}</p>
                                ))}
                            </section>
                        ))}
                    </div>

                    <p className="text-muted-foreground mt-12 border-t pt-6 text-sm">
                        Questions? Visit our <Link href="/get-demo" className="text-foreground underline underline-offset-4">demo request page</Link>. The form is currently a visual prototype and does not transmit submissions.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    )
}
