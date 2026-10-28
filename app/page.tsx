import type { Metadata } from 'next'
import Link from 'next/link'
import { LogoIcon } from '@/components/logo'
import { SiteSidebar } from '@/components/site-sidebar'

export const metadata: Metadata = {
    title: 'Bellu AI | Cybersecurity Research',
    description:
        'Bellu AI is a cybersecurity research company using AI to help discover and understand emerging threats.',
}

export default function Home() {
    return (
        <div className="mx-auto min-h-screen max-w-6xl border-x px-5 font-sans sm:px-8">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[150px_minmax(0,1fr)]">
                <SiteSidebar activeItem="Home" />

                <main className="min-w-0">
                    <section
                        id="home"
                        className="grid gap-8 border-b py-16 sm:py-20 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11 lg:py-28"
                    >
                        <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                            01
                        </span>
                        <div className="max-w-2xl">
                            <h1 className="text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                                Building self-defending systems for the AI era.
                            </h1>
                            <p className="text-muted-foreground mt-5 text-sm leading-relaxed">
                                As AI makes software more capable, it also changes how quickly
                                threats can emerge and spread. Bellu AI is building a new generation
                                of cybersecurity: systems that continuously understand their
                                environment, recognize suspicious change, and respond at the speed
                                modern technology demands.
                            </p>
                            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                                Our approach takes inspiration from biology. Like an immune system,
                                digital infrastructure should be able to detect what is unfamiliar,
                                adapt its defenses, and recover when something goes wrong. We are
                                researching how AI can help systems move beyond alerts and manual
                                response toward continuous, validated self-defense and self-healing.
                            </p>
                            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                                We are also exploring what resilience means for physical AI—from
                                robots to intelligent machines that interact with the real world.
                                Our goal is to help build technology that can protect itself while
                                remaining understandable and under human direction.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <Link
                                    href="/products/bellu-continuous"
                                    className="border border-foreground bg-foreground px-3 py-2 text-xs text-background transition-opacity hover:opacity-80"
                                >
                                    Explore Bellu Continuous
                                </Link>
                                <Link
                                    href="/get-demo"
                                    className="border px-3 py-2 text-xs transition-colors hover:bg-muted"
                                >
                                    Get a demo
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section
                        id="product"
                        className="grid gap-6 border-b py-10 sm:py-12 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11"
                    >
                        <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                            02
                        </span>
                        <div className="max-w-2xl">
                            <h2 className="mt-2 text-xl font-medium tracking-tight">Bellu Continuous</h2>
                            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                Bellu Continuous is our first step toward infrastructure that can
                                defend itself. It continuously studies an organization’s
                                environment, helping security teams find weaknesses—including
                                previously unknown vulnerabilities—before they become incidents.
                            </p>
                            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                AI agents investigate signals across the stack, while knowledge
                                graphs connect code, cloud resources, identities, dependencies, and
                                runtime activity. That shared context helps each investigation
                                understand not just what changed, but how it could affect the wider
                                system—and where a safe, verified response can make a difference.
                            </p>
                            <Link
                                href="/products/bellu-continuous"
                                className="mt-4 inline-flex items-center gap-2 text-xs font-medium underline underline-offset-4"
                            >
                                Learn about Bellu Continuous <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </section>

                    <section className="grid gap-5 py-10 sm:py-12 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11">
                        <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                            03
                        </span>
                        <div>
                            <h2 className="text-xl font-medium tracking-tight">Join the team</h2>
                            <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed">
                                We&apos;re building a new generation of cybersecurity for a world
                                transformed by AI. Bellu brings together curious researchers,
                                engineers, and makers to tackle hard problems in autonomous
                                security, self-healing systems, and the future of physical AI.
                                If you want to help make technology more resilient, come build
                                with us.
                            </p>
                            <Link
                                href="/careers"
                                className="mt-4 inline-flex border border-foreground bg-foreground px-3 py-2 text-xs text-background transition-opacity hover:opacity-80"
                            >
                                Explore careers
                            </Link>
                        </div>
                    </section>

                    <footer className="flex flex-col gap-3 border-t py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
                        <Link href="/" className="inline-flex items-center gap-2 font-medium">
                            <LogoIcon uniColor />
                            Bellu AI
                        </Link>
                        <p className="text-muted-foreground">
                            Cybersecurity research, accelerated by AI.
                        </p>
                        <span className="text-muted-foreground">© Bellu AI 2026</span>
                    </footer>
                </main>
            </div>
        </div>
    )
}
