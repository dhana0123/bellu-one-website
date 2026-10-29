import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ExploitationTimeline } from '@/components/exploitation-timeline'
import { SiteSidebar } from '@/components/site-sidebar'

const blogSerif = Lora({
    subsets: ['latin'],
    variable: '--font-blog-serif',
})

export const metadata: Metadata = {
    title: 'Introducing Bellu One | Bellu AI',
    description:
        'Why we are building Bellu One, an open source, connected approach to infrastructure security, threat discovery, safe testing, and remediation.',
}

export default function IntroducingBelluOnePage() {
    return (
        <div className="mx-auto min-h-screen max-w-6xl border-x px-5 font-sans sm:px-8">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[150px_minmax(0,1fr)]">
                <SiteSidebar activeItem="Blog" />
                <main className="min-w-0">
                    <article className={`${blogSerif.className} px-0 py-14 text-sm leading-relaxed sm:py-20 lg:px-11 lg:py-28`}>
                        <div className="mx-auto max-w-2xl">
                            <Link
                                href="/blog"
                                className="text-muted-foreground inline-flex items-center gap-2 text-xs transition-colors hover:text-violet-700"
                            >
                                <ArrowLeft className="size-3.5" aria-hidden="true" />
                                Blog
                            </Link>

                            <header className="mt-8 border-b pb-6">
                                <h1 className="text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                                    Introducing Bellu One
                                </h1>
                                <p className="text-muted-foreground mt-4 text-sm">
                                    An open source, more connected way to understand and defend
                                    modern infrastructure.
                                </p>
                                <div className="text-muted-foreground mt-6 flex items-center justify-between gap-4 font-mono text-xs">
                                    <span>By the Bellu AI Team</span>
                                    <time dateTime="2026-10-28">2026.10.28</time>
                                </div>
                            </header>

                            <figure className="mt-8">
                                <Image
                                    src="/security-dashboard-preview-v2.png"
                                    alt="Bellu One security dashboard with issue severity, security score, and activity trends"
                                    width={1630}
                                    height={900}
                                    priority
                                    className="h-auto w-full border"
                                />
                                <figcaption className="text-muted-foreground mt-2 text-xs">
                                    A view of security posture and issue activity in Bellu One.
                                </figcaption>
                            </figure>

                            <div className="mt-10 space-y-5 text-sm leading-relaxed">
                                <p>
                                    Software is changing faster, and the environments it runs in
                                    are becoming more interconnected. A single application may
                                    depend on cloud services, machine identities, open-source
                                    packages, deployment pipelines, and AI agents. When a
                                    vulnerability or suspicious change appears, understanding
                                    whether it matters requires seeing how those parts relate.
                                </p>

                                <p>
                                    Security tools often present findings as separate alerts.
                                    Teams then have to assemble the surrounding context themselves:
                                    which asset is affected, what can reach it, which identity can
                                    access it, and what the likely impact might be. We are building
                                    Bellu One to help connect that investigation. It brings
                                    infrastructure context, AI-assisted discovery, safe scenario
                                    testing, and remediation into one continuous security workflow.
                                    And because Bellu One is open source, every part of that
                                    workflow is open to inspection, extension, and self-hosting.
                                </p>

                                <h2 className="pt-3 text-xl font-medium leading-tight tracking-tight">
                                    Start with a model of the environment
                                </h2>

                                <p>
                                    At the foundation is a living security graph. It maps code,
                                    cloud resources, identities, AI agents, dependencies, and
                                    runtime activity as connected entities rather than isolated
                                    inventory records. Relationships provide the context to follow
                                    an exposure across layers: from a code component, to a deployed
                                    service, to the identity or resource that service can reach.
                                </p>

                                <p>
                                    That context changes the questions a security investigation
                                    can ask. Instead of only asking whether a vulnerability exists,
                                    a team can investigate where the affected component is running,
                                    what it connects to, and which paths could make the issue
                                    consequential. The graph is intended to help teams prioritize
                                    based on their own environment, not just on a finding in
                                    isolation.
                                </p>

                                <figure className="my-10">
                                    <Image
                                        src="/security-graph-preview-v2.png"
                                        alt="Connected cloud resources, identities, and infrastructure in a security graph"
                                        width={602}
                                        height={617}
                                        className="mx-auto h-auto max-h-[34rem] w-full border object-contain p-4 sm:p-8"
                                    />
                                    <figcaption className="text-muted-foreground mt-2 text-xs">
                                        A connected view of infrastructure assets and their
                                        relationships.
                                    </figcaption>
                                </figure>

                                <h2 className="pt-3 text-xl font-medium leading-tight tracking-tight">
                                    Investigate continuously, with AI agents
                                </h2>

                                <p>
                                    On top of this shared context, specialized agents can help
                                    investigate vulnerabilities, suspicious activity, and possible
                                    attack paths. They can correlate evidence across signals and
                                    examine how findings connect to the infrastructure around
                                    them. The goal is to help security teams move from an alert to
                                    a clearer account of what happened and what may be affected.
                                </p>

                                <p>
                                    This is not a claim that an agent can understand every system
                                    or safely make every decision on its own. Security work
                                    requires evidence, clear boundaries, and human judgment.
                                    Bellu One is being built to make investigation more
                                    continuous and context-rich, while keeping the reasoning and
                                    resulting actions open to review—in both senses, since the
                                    code itself is open source.
                                </p>

                                <h2 className="pt-3 text-xl font-medium leading-tight tracking-tight">
                                    Test changes away from production
                                </h2>

                                <p>
                                    Understanding a risk is only part of the job. A proposed
                                    change can close one exposure and create another. Bellu
                                    One includes an infrastructure digital twin: a model
                                    of relevant environment state where teams can simulate attack
                                    scenarios, assess exposure, and evaluate proposed changes
                                    without experimenting on live systems.
                                </p>

                                <p>
                                    In practice, that gives teams a safer place to ask
                                    “what if?” before acting. They can examine how a scenario
                                    might unfold, consider the impact of a change, and use the
                                    results to make a more informed decision about production.
                                </p>

                                <h2 className="pt-3 text-xl font-medium leading-tight tracking-tight">
                                    Make remediation verifiable
                                </h2>

                                <p>
                                    When a response is warranted, the platform is designed to
                                    support evidence-backed code and infrastructure patches.
                                    Those patches can then be checked through attack replay in an
                                    isolated environment. Replaying the relevant scenario helps
                                    teams verify that a proposed fix addresses the finding and
                                    check for regressions before release.
                                </p>

                                <p>
                                    This creates a practical loop: use the graph to understand
                                    context, investigate a signal, test a response outside
                                    production, and validate the fix. Each step is intended to
                                    give defenders better information before they make a change
                                    that affects a live system.
                                </p>

                                <h2 className="pt-3 text-xl font-medium leading-tight tracking-tight">
                                    Why continuous defense matters
                                </h2>

                                <p>
                                    The time between vulnerability disclosure and known
                                    exploitation has been shrinking. The timeline below, based
                                    on the product page’s CISA KEV and VulnCheck KEV framing,
                                    illustrates why a periodic review can leave important gaps.
                                    It is context for the problem we are working on—not a
                                    prediction of when a specific vulnerability will be exploited,
                                    or a promise that Bellu can prevent every zero-day.
                                </p>
                            </div>

                            <figure className="my-8 border-y py-6">
                                <p className="text-sm font-medium">
                                    From vulnerability disclosure to known exploitation
                                </p>
                                <p className="text-muted-foreground mt-1 text-xs">
                                    Time to first known-exploited listing by CVE publication
                                    year · CISA KEV + VulnCheck KEV
                                </p>
                                <div className="mt-5">
                                    <ExploitationTimeline />
                                </div>
                                <figcaption className="text-muted-foreground mt-2 text-xs">
                                    Historical trend shown for context; it does not imply a
                                    guaranteed detection or response time.
                                </figcaption>
                            </figure>

                            <div className="space-y-5 text-sm leading-relaxed">
                                <h2 className="pt-3 text-xl font-medium leading-tight tracking-tight">
                                    A first step toward systems that heal
                                </h2>

                                <p>
                                    Bellu One is our first product and an early step
                                    toward infrastructure that can better understand its own
                                    security. We are releasing it as open source so that teams,
                                    researchers, and the wider community can study how it works,
                                    contribute improvements, and run it on their own terms. Our
                                    longer-term direction is inspired in part by
                                    biological immune systems: continuously sensing change,
                                    recognizing what is unfamiliar, adapting defenses, and
                                    recovering when something goes wrong.
                                </p>

                                <p>
                                    Translating that idea into software means more than
                                    automating response. Any change should be grounded in
                                    evidence, tested against the system it affects, and
                                    understandable to the people responsible for it. We believe
                                    that is how self-defense and self-healing can become useful
                                    engineering properties rather than opaque promises.
                                </p>

                                <p>
                                    We are also exploring how these principles may apply to
                                    physical AI—robots and intelligent machines that interact
                                    with the real world. Those systems will need security and
                                    resilience across both their software and their physical
                                    behavior. Bellu One is where we begin: connecting
                                    context, making defense a continuous process, and building it
                                    in the open.
                                </p>
                            </div>

                            <p className="mt-10 border-t pt-6 text-sm leading-relaxed">
                                Learn more about the platform on the{' '}
                                <Link
                                    href="/"
                                    className="font-medium underline underline-offset-4 transition-colors hover:text-violet-700"
                                >
                                    Bellu One landing page
                                </Link>
                                .
                            </p>
                        </div>
                    </article>
                </main>
            </div>
        </div>
    )
}
