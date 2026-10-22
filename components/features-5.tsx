'use client'

import { ArrowRight, Bot, Check, Cloud, Code2, GitBranch, LockKeyhole, Network, Search, ShieldCheck, type LucideIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { productFeatures, type ProductFeatureId } from '@/lib/product-features'

const features = Object.values(productFeatures)
type FeatureId = ProductFeatureId

function FeatureList({ items }: { items: { icon: LucideIcon; label: string }[] }) {
    return (
        <ul className="text-muted-foreground mt-8 divide-y *:flex *:items-center *:gap-3 *:py-3">
            {items.map(({ icon: Icon, label }) => (
                <li key={label}>
                    <Icon className="size-4" />
                    {label}
                </li>
            ))}
        </ul>
    )
}

export default function FeaturesSection() {
    const [activeId, setActiveId] = useState<FeatureId>('workflow-agents')
    const sectionRefs = useRef<Partial<Record<FeatureId, HTMLDivElement | null>>>({})

    const scrollToFeature = (id: FeatureId) => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActiveId(id)
    }

    useEffect(() => {
        const sections = features.map((feature) => sectionRefs.current[feature.id]).filter((section): section is HTMLDivElement => section != null)

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                const nextId = visible[0]?.target.id as FeatureId | undefined
                if (nextId) setActiveId(nextId)
            },
            { rootMargin: '-25% 0px -55% 0px', threshold: [0.15, 0.35, 0.55, 0.75] }
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="platform" className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight">
                    <span className="text-foreground">One system.</span> Intelligent defense at every layer. <br /> Secure with confidence.
                </h2>
                <div className="mt-16 grid gap-6 md:mt-32 lg:grid-cols-[auto_1fr]">
                    <div className="sticky top-24 h-fit w-56 max-lg:hidden">
                        <div className="text-muted-foreground text-sm">Platform</div>
                        <div className="-ml-4 mt-4 flex flex-col *:justify-start">
                            {features.map((feature) => (
                                <Button
                                    key={feature.id}
                                    type="button"
                                    variant="ghost"
                                    data-state={activeId === feature.id ? 'active' : undefined}
                                    onClick={() => scrollToFeature(feature.id)}
                                    className="not-data-[state=active]:text-muted-foreground hover:bg-transparent">
                                    {feature.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 md:gap-32">
                        <div
                            ref={(element) => {
                                sectionRefs.current['workflow-agents'] = element
                            }}
                            id="workflow-agents"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">{productFeatures['workflow-agents'].title}</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">{productFeatures['workflow-agents'].lead}</span> {productFeatures['workflow-agents'].description}
                                    </p>
                                </div>
                                <FeatureList items={productFeatures['workflow-agents'].highlights} />
                            </div>
                            <div className="feature-gradient-card feature-gradient-card--graph relative flex aspect-auto min-h-[24rem] overflow-hidden rounded-3xl border p-3 md:col-span-3 lg:aspect-square lg:min-h-0">
                                <SecurityGraphIllustration />
                            </div>
                        </div>

                        <div
                            ref={(element) => {
                                sectionRefs.current.alerts = element
                            }}
                            id="alerts"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">{productFeatures.alerts.title}</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">{productFeatures.alerts.lead}</span> {productFeatures.alerts.description}
                                    </p>
                                </div>
                                <FeatureList items={productFeatures.alerts.highlights} />
                            </div>
                            <div className="feature-gradient-card feature-gradient-card--threat relative flex aspect-auto min-h-[27rem] overflow-hidden rounded-3xl border p-3 md:col-span-3 lg:aspect-square lg:min-h-0">
                                <ThreatDiscoveryIllustration />
                            </div>
                        </div>

                        <div
                            ref={(element) => {
                                sectionRefs.current.timeline = element
                            }}
                            id="timeline"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">{productFeatures.timeline.title}</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">{productFeatures.timeline.lead}</span> {productFeatures.timeline.description}
                                    </p>
                                </div>
                                <FeatureList items={productFeatures.timeline.highlights} />
                            </div>
                            <div className="feature-gradient-card feature-gradient-card--twin relative flex aspect-auto min-h-[28rem] overflow-hidden rounded-3xl border p-3 md:col-span-3 lg:aspect-square lg:min-h-0">
                                <DigitalTwinIllustration />
                            </div>
                        </div>

                        <div
                            ref={(element) => {
                                sectionRefs.current.integrations = element
                            }}
                            id="integrations"
                            className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12">
                            <div className="flex flex-col justify-between pb-4 md:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h3 className="text-muted-foreground mb-6 text-sm font-medium">{productFeatures.integrations.title}</h3>
                                    <p className="text-muted-foreground text-balance text-lg font-medium">
                                        <span className="text-foreground">{productFeatures.integrations.lead}</span> {productFeatures.integrations.description}
                                    </p>
                                </div>
                                <FeatureList items={productFeatures.integrations.highlights} />
                            </div>
                            <div className="feature-gradient-card feature-gradient-card--remediation relative flex aspect-auto min-h-[33rem] overflow-hidden rounded-3xl border p-3 md:col-span-3 lg:aspect-square lg:min-h-0">
                                <RemediationIllustration />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SecurityGraphIllustration() {
    const nodes = [
        { label: 'Code', icon: Code2, position: 'left-[7%] top-[18%]' },
        { label: 'Cloud', icon: Cloud, position: 'right-[7%] top-[18%]' },
        { label: 'Identity', icon: LockKeyhole, position: 'left-[7%] bottom-[14%]' },
        { label: 'AI agents', icon: Bot, position: 'right-[7%] bottom-[14%]' },
    ]

    return (
        <div aria-hidden="true" className="absolute inset-4 flex items-center justify-center sm:inset-8">
            <div className="relative w-full max-w-lg rounded-2xl border border-blue-500/20 bg-card p-4 sm:p-6">
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <div>
                        <p className="text-sm font-semibold">Infrastructure graph</p>
                        <p className="text-muted-foreground mt-1 text-xs">Connected assets and relationships</p>
                    </div>
                    <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                        Mapped
                    </span>
                </div>
                <div className="relative mt-5 h-56 overflow-hidden rounded-xl bg-muted/50 sm:h-64">
                    <svg className="absolute inset-0 size-full" viewBox="0 0 400 240" fill="none">
                        <path d="M78 54L200 120L322 54M78 186L200 120L322 186M78 54L78 186M322 54L322 186" stroke="currentColor" strokeOpacity=".18" strokeWidth="2" />
                        <path d="M78 54L200 120L322 54M78 186L200 120" stroke="#10b981" strokeOpacity=".55" strokeWidth="2" strokeDasharray="5 6" />
                    </svg>
                    {nodes.map(({ label, icon: Icon, position }) => (
                        <div key={label} className={`absolute ${position} flex items-center gap-2 rounded-lg border bg-card px-2.5 py-2 motion-safe:animate-pulse sm:px-3`}>
                            <Icon className="size-4 text-emerald-600" />
                            <span className="text-[10px] font-medium sm:text-xs">{label}</span>
                        </div>
                    ))}
                    <div className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-zinc-900 text-white ring-4 ring-emerald-500/15 dark:bg-zinc-100 dark:text-zinc-900">
                        <Network className="size-7" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ThreatDiscoveryIllustration() {
    const findings = [
        ['CVE-2026-1842', 'Critical vulnerability', 'text-red-500'],
        ['Public endpoint', 'Exposed cloud service', 'text-amber-500'],
        ['Role permissions', 'Related identity path', 'text-blue-500'],
    ]

    return (
        <div aria-hidden="true" className="absolute inset-4 flex items-center justify-center sm:inset-8">
            <div className="w-full max-w-lg rounded-2xl border border-blue-500/20 bg-card p-4 sm:p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                            <Search className="size-5" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Threat investigation</p>
                            <p className="text-muted-foreground mt-1 text-xs">Security agent working</p>
                        </div>
                    </div>
                    <span className="size-2 rounded-full bg-blue-500 motion-safe:animate-ping" />
                </div>
                <div className="mt-5 space-y-3">
                    {findings.map(([name, detail, color], index) => (
                        <div key={name} className="flex items-center gap-3 rounded-xl border p-3">
                            <span className={`size-2 shrink-0 rounded-full ${color} ${index === 0 ? 'motion-safe:animate-pulse' : ''}`} />
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-xs font-semibold sm:text-sm">{name}</p>
                                <p className="text-muted-foreground mt-1 truncate text-[10px] sm:text-xs">{detail}</p>
                            </div>
                            <Check className="size-4 shrink-0 text-emerald-600" />
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-xl bg-blue-500/5 px-3 py-3 text-xs">
                    <div className="flex -space-x-2">
                        <span className="size-6 rounded-full border-2 border-card bg-blue-500" />
                        <span className="size-6 rounded-full border-2 border-card bg-violet-500" />
                        <span className="size-6 rounded-full border-2 border-card bg-emerald-500" />
                    </div>
                    <span className="text-muted-foreground">Correlating evidence across <span className="text-foreground font-medium">3 signals</span></span>
                </div>
            </div>
        </div>
    )
}

function DigitalTwinIllustration() {
    return (
        <div aria-hidden="true" className="absolute inset-4 flex items-center justify-center sm:inset-8">
            <div className="w-full max-w-lg rounded-2xl border border-indigo-500/20 bg-card p-4 sm:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold">Digital twin simulation</p>
                        <p className="text-muted-foreground mt-1 text-xs">Isolated from production</p>
                    </div>
                    <span className="rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">Test run 08</span>
                </div>
                <div className="mt-6 grid min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-1 sm:gap-2 lg:gap-4">
                    <div className="min-w-0 rounded-xl border p-2 sm:p-4">
                        <div className="flex min-w-0 items-center gap-1 text-[10px] font-medium sm:gap-2 sm:text-xs">
                            <Cloud className="text-muted-foreground hidden size-4 shrink-0 sm:block" />
                            <span className="truncate">Production</span>
                        </div>
                        <div className="mt-5 space-y-2">
                            <div className="h-8 rounded-lg bg-muted" />
                            <div className="ml-2 h-8 rounded-lg bg-muted sm:ml-4" />
                            <div className="h-8 rounded-lg bg-muted" />
                        </div>
                        <p className="text-muted-foreground mt-3 text-[10px]">Live environment</p>
                    </div>
                    <ArrowRight className="size-5 text-violet-500 motion-safe:animate-pulse" />
                    <div className="min-w-0 rounded-xl border border-violet-500/30 bg-violet-500/5 p-2 sm:p-4">
                        <div className="flex min-w-0 items-center gap-1 text-[10px] font-medium sm:gap-2 sm:text-xs">
                            <GitBranch className="hidden size-4 shrink-0 text-violet-600 sm:block" />
                            <span className="truncate">Twin</span>
                        </div>
                        <div className="mt-5 space-y-2">
                            <div className="h-8 rounded-lg border border-dashed border-violet-500/30 bg-card" />
                            <div className="ml-2 h-8 rounded-lg border border-dashed border-violet-500/30 bg-card motion-safe:animate-pulse sm:ml-4" />
                            <div className="h-8 rounded-lg border border-dashed border-violet-500/30 bg-card" />
                        </div>
                        <p className="mt-3 text-[10px] font-medium text-violet-700 dark:text-violet-300">Attack replay running</p>
                    </div>
                </div>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-2/3 rounded-full bg-violet-500 motion-safe:animate-pulse" />
                </div>
            </div>
        </div>
    )
}

function RemediationIllustration() {
    return (
        <div aria-hidden="true" className="absolute inset-4 flex items-center justify-center sm:inset-8">
            <div className="w-full max-w-lg rounded-2xl border border-cyan-500/20 bg-card p-4 sm:p-6">
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <div>
                        <p className="text-sm font-semibold">Recommended patch</p>
                        <p className="text-muted-foreground mt-1 text-xs">api/auth.ts · evidence-backed fix</p>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                        <ShieldCheck className="size-3.5" /> Validated
                    </span>
                </div>
                <div className="mt-5 overflow-hidden rounded-xl border bg-zinc-950 p-3 font-mono text-[10px] leading-6 text-zinc-300 sm:p-4 sm:text-xs">
                    <p className="text-zinc-500">@@ authentication middleware @@</p>
                    <p className="rounded bg-red-500/10 px-2 text-red-300">- allowRequest(user.role)</p>
                    <p className="rounded bg-emerald-500/10 px-2 text-emerald-300">+ verifyIdentity(user)</p>
                    <p className="rounded bg-emerald-500/10 px-2 text-emerald-300">+ enforceLeastPrivilege(user)</p>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-xl bg-emerald-500/5 px-3 py-3">
                    <div className="flex items-center gap-2 text-xs font-medium">
                        <Check className="size-4 text-emerald-600" />
                        Attack replay passed
                    </div>
                    <span className="text-muted-foreground text-[10px]">No regressions</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                    Fix verified in isolated environment
                </div>
            </div>
        </div>
    )
}
