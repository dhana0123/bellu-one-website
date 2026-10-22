import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HeroHeader } from '@/components/hero-section-9-header'
import Footer from '@/components/footer-2'

export const metadata: Metadata = {
    title: 'About Bellu AI',
    description: 'Learn about Bellu AI and our vision for autonomous cybersecurity.',
}

export default function AboutPage() {
    return (
        <>
            <HeroHeader />
            <main className="flex-1">
                <section className="px-6 pb-20 pt-36 md:pb-28 md:pt-44">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-muted-foreground text-sm font-medium">About Bellu AI</p>
                        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
                            Built for the era of autonomous cybersecurity.
                        </h1>
                        <p className="text-muted-foreground mt-8 max-w-3xl text-balance text-xl leading-relaxed">
                            We&apos;re building Bellu AI to make cybersecurity more autonomous: systems that help teams defend, detect threats, and remediate vulnerabilities with confidence.
                        </p>

                        <div className="mt-20 grid gap-12 border-t pt-10 md:grid-cols-[1fr_2fr] md:gap-20">
                            <h2 className="text-2xl font-semibold tracking-tight">Our vision</h2>
                            <div className="space-y-6">
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Modern infrastructure spans code, cloud services, identities, AI systems, and runtime activity. Security teams need more than isolated alerts: they need context that connects exposures to the systems and assets that matter.
                                </p>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Bellu AI is being built around that connected view. Our vision is a new generation of self-defending, self-healing infrastructure that can adapt to emerging threats and help protect what matters.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-8 rounded-3xl border bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-transparent p-8 sm:p-12 md:grid-cols-[auto_1fr] md:items-center">
                            <Image
                                src="/santhosh-founder.png"
                                alt="Santhosh, founder of Bellu AI"
                                width={100}
                                height={100}
                                className="size-20 rounded-full object-cover ring-1 ring-border"
                            />
                            <div>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    &ldquo;We&apos;re building Bellu AI to help organizations move from fragmented security signals to connected understanding and confident action.&rdquo;
                                </p>
                                <p className="mt-4 text-sm font-semibold">Santhosh</p>
                                <p className="text-muted-foreground text-sm">Founder of Bellu AI</p>
                            </div>
                        </div>

                        <Link className="mt-10 inline-flex text-sm font-medium underline underline-offset-4" href="/get-demo">
                            See Bellu AI in action
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
