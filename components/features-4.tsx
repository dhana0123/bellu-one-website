import { Card } from '@/components/ui/card'
import { Activity, Bot, Check, Clock3, GitPullRequest, ShieldCheck } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <Card className="flex flex-col gap-6 overflow-hidden rounded-none bg-muted p-5 sm:p-8">
                    <div className="grid gap-6 sm:grid-cols-3 sm:gap-0">
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

                    <div className="rounded-none border border-border bg-card p-4 shadow-sm sm:p-6">
                        <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wider">Live response</p>
                        <div className="grid gap-x-6 sm:grid-cols-3">
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
                    </div>
                </Card>
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
        <div className="flex flex-col gap-3 border-b border-border pb-5 last:border-b-0 last:pb-0 sm:border-b-0 sm:border-r sm:px-6 sm:pb-0 first:pl-0 last:border-r-0 last:pr-0">
            <div className="flex items-center gap-3">
                <Icon className="size-5 shrink-0 text-violet-600 dark:text-violet-400" aria-hidden="true" />
                <span className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">{value}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
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
                <Icon className="size-3.5 text-violet-600 dark:text-violet-400" aria-hidden="true" />
                {label}
            </div>
            <div className="flex min-w-0 flex-wrap gap-1.5">
                {items.map((item) => (
                    <span key={item} className="rounded-none bg-muted px-2 py-1 text-[10px] leading-tight text-muted-foreground">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}
