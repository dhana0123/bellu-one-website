import {
    Activity,
    ArrowRightLeft,
    Bell,
    Calendar,
    Clock,
    History,
    Link2,
    ListChecks,
    Mail,
    Plug,
    Users,
    Zap,
    type LucideIcon,
} from 'lucide-react'

export type ProductFeatureId = 'workflow-agents' | 'alerts' | 'timeline' | 'integrations'

export type ProductFeature = {
    id: ProductFeatureId
    slug: string
    label: string
    title: string
    lead: string
    description: string
    highlights: { icon: LucideIcon; label: string }[]
}

export const productFeatures = {
    'workflow-agents': {
        id: 'workflow-agents',
        slug: 'security-graph',
        label: 'Security graph',
        title: 'Living Security Graph',
        lead: 'See how your environment connects.',
        description:
            'Map code, cloud resources, identities, AI agents, dependencies, and runtime activity to understand how exposures can affect your infrastructure.',
        highlights: [
            { icon: ArrowRightLeft, label: 'Code, cloud & runtime map' },
            { icon: ListChecks, label: 'Identity & AI agent context' },
            { icon: Zap, label: 'Exposure impact paths' },
        ],
    },
    alerts: {
        id: 'alerts',
        slug: 'threat-discovery',
        label: 'Threat discovery',
        title: 'Autonomous Threat Discovery',
        lead: 'Investigate threats continuously.',
        description:
            'Specialized agents identify vulnerabilities, examine suspicious activity, correlate evidence, and trace attack paths across your environment.',
        highlights: [
            { icon: Bell, label: 'Vulnerability discovery' },
            { icon: Clock, label: 'Suspicious activity analysis' },
            { icon: Activity, label: 'Cross-environment attack paths' },
        ],
    },
    timeline: {
        id: 'timeline',
        slug: 'digital-twin',
        label: 'Digital twin',
        title: 'Infrastructure Digital Twin',
        lead: 'Test safely before production.',
        description:
            'Model relevant infrastructure state to simulate attack scenarios, assess exposure, and evaluate proposed changes without experimenting on live systems.',
        highlights: [
            { icon: History, label: 'Simulate attack scenarios' },
            { icon: Users, label: 'Model infrastructure state' },
            { icon: Mail, label: 'Test changes outside production' },
        ],
    },
    integrations: {
        id: 'integrations',
        slug: 'remediation',
        label: 'Remediation',
        title: 'Intelligent Remediation',
        lead: 'Fix what matters with confidence.',
        description:
            'Generate targeted code and infrastructure patches from the evidence, then replay attacks in an isolated environment to validate fixes and check for regressions.',
        highlights: [
            { icon: Plug, label: 'Evidence-backed code patches' },
            { icon: Calendar, label: 'Attack replay & fix validation' },
            { icon: Link2, label: 'Regression checks before release' },
        ],
    },
} satisfies Record<ProductFeatureId, ProductFeature>
