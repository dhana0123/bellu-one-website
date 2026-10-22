import { Card } from '@/components/ui/card'
import { Activity, Bot, Check, Clock3, GitPullRequest, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

export default function Features() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-6 md:mt-16 md:grid-cols-2 md:gap-3 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <Card className="aspect-3/2 after:border-foreground/5 relative overflow-hidden ring-0 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:border">
                            <h2 className="relative z-10 max-w-4xl p-8 text-balance text-4xl font-medium tracking-tight text-white">
                                Security agents for every layer of your infrastructure.
                            </h2>
                            <Image
                                src="/handoffs-feature.jpg"
                                alt="Cloudy sky above a building with telecommunications antennas"
                                width={800}
                                height={800}
                                className="absolute inset-0 z-0 size-full object-cover object-[50%_85%]"
                            />
                            <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
                        </Card>
                    </div>

                    <Card className="flex h-full min-h-96 flex-col gap-5 overflow-hidden bg-muted p-5 sm:p-6">
                        <div className="space-y-3">
                            <Metric
                                value="1.5 days"
                                description="Attackers run AI agents that weaponize vulnerabilities in 1.5 days."
                                icon={Clock3}
                            />
                            <Metric
                                value="14 days"
                                description="Most security teams respond in weeks."
                                icon={Activity}
                            />
                            <Metric
                                value="0-day clock"
                                description="Detected and resolved in minutes."
                                icon={ShieldCheck}
                            />
                        </div>

                        <div className="mt-auto rounded-xl border border-border bg-card p-4 shadow-sm">
                            <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wider">Live response</p>
                            <ResponseStage
                                icon={GitPullRequest}
                                label="Events"
                                items={['Pull request #482', 'Deploy to prod', 'Datadog alert']}
                            />
                            <ResponseStage
                                icon={Bot}
                                label="Agents"
                                items={['Pentester', 'Cloud config', 'Sec monitor']}
                            />
                            <ResponseStage
                                icon={Check}
                                label="Resolved"
                                items={['Fix verified', 'Grant revoked', 'Alert closed']}
                                isLast
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}

function Metric({
    value,
    description,
    icon: Icon,
}: {
    value: string
    description: string
    icon: typeof Clock3
}) {
    return (
        <div className="grid grid-cols-[7rem_1fr] items-center gap-3 border-b border-border pb-3 last:border-b-0 last:pb-0">
            <div className="flex items-center gap-2">
                <Icon className="size-4 shrink-0 text-blue-600" aria-hidden="true" />
                <span className="text-foreground text-lg font-semibold tracking-tight">{value}</span>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
        </div>
    )
}

function ResponseStage({
    icon: Icon,
    label,
    items,
    isLast = false,
}: {
    icon: typeof GitPullRequest
    label: string
    items: string[]
    isLast?: boolean
}) {
    return (
        <div className={`flex gap-3 ${isLast ? '' : 'border-b border-border py-3'} ${isLast ? 'pt-3' : ''}`}>
            <div className="text-muted-foreground flex w-16 shrink-0 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide">
                <Icon className="size-3.5" aria-hidden="true" />
                {label}
            </div>
            <div className="flex min-w-0 flex-wrap gap-1.5">
                {items.map((item) => (
                    <span key={item} className="rounded-md bg-muted px-2 py-1 text-[10px] leading-tight text-muted-foreground">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}
