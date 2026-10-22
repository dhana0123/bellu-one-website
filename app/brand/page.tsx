import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Footer from '@/components/footer-2'
import { HeroHeader } from '@/components/hero-section-9-header'
import { LogoIcon } from '@/components/logo'

export const metadata: Metadata = {
    title: 'Brand guidelines | Bellu AI',
    description: 'Bellu AI logo, color palette, typography, and brand accents.',
}

const brandColors = [
    { name: 'Soft Lavender', value: '#EDE9FE', className: 'bg-[#EDE9FE]' },
    { name: 'Pale Violet', value: '#DDD6FE', className: 'bg-[#DDD6FE]' },
    { name: 'Bellu Violet', value: '#8B5CF6', className: 'bg-[#8B5CF6]' },
    { name: 'Deep Purple', value: '#2E1065', className: 'bg-[#2E1065]' },
    { name: 'Logo Lavender', value: '#9B99FE', className: 'bg-[#9B99FE]' },
    { name: 'Logo Teal', value: '#2BC8B7', className: 'bg-[#2BC8B7]' },
    { name: 'Graphite', value: '#20201E', className: 'bg-[#20201E]' },
    { name: 'White', value: '#FFFFFF', className: 'bg-white' },
    { name: 'Black', value: '#000000', className: 'bg-black' },
]

export default function BrandPage() {
    return (
        <>
            <HeroHeader />
            <main className="flex-1">
                <section className="px-6 pb-16 pt-36 md:pt-44">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-violet-600 text-sm font-semibold dark:text-violet-400">Bellu AI · Brand system</p>
                        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
                            Bellu AI
                        </h1>
                        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
                            The colors, logo, typography, and accents that make Bellu AI recognizable across every surface.
                        </p>
                    </div>
                </section>

                <section className="px-6 pb-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-6 flex items-end justify-between gap-4">
                            <div>
                                <p className="text-muted-foreground text-sm font-medium">01 / Logo</p>
                                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">One mark. Three backdrops.</h2>
                            </div>
                            <LogoIcon className="hidden h-10 w-auto text-violet-600 sm:block" />
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                            <LogoSpecimen
                                name="Light"
                                description="Navbar logo on a white background."
                                className="border-zinc-200 bg-white text-[#20201E]"
                                logoClassName="text-[#20201E]"
                            />
                            <LogoSpecimen
                                name="Dark"
                                description="Navbar logo on a black background."
                                className="border-white/10 bg-black text-white"
                                logoClassName="text-white"
                            />
                            <LogoSpecimen
                                name="Bellu Purple"
                                description="Navbar logo on a purple background."
                                className="border-violet-800 bg-violet-950 text-white"
                                logoClassName="text-white"
                            />
                        </div>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <div className="flex items-center gap-5 rounded-2xl border bg-card p-6">
                                <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-950">
                                    <LogoIcon className="h-9 w-auto" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Standalone mark</h3>
                                    <p className="text-muted-foreground mt-1 text-sm">Use for avatars, app icons, and compact spaces.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 rounded-2xl border bg-card p-6">
                                <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-violet-950 text-white">
                                    <LogoIcon className="h-9 w-auto" uniColor />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Single-color mark</h3>
                                    <p className="text-muted-foreground mt-1 text-sm">Use on dark or high-contrast backgrounds.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#f4f1fa] px-6 py-16 dark:bg-[#21172d] md:py-20">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-muted-foreground text-sm font-medium">02 / Color</p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">A palette with purpose.</h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                            Purple leads the interface, balanced by the original lavender-to-teal logo gradient, clear neutrals, and high-contrast black and white.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                            {brandColors.map((color) => (
                                <div key={color.name} className="overflow-hidden rounded-2xl border bg-card">
                                    <div className={`h-24 border-b border-black/5 ${color.className}`} />
                                    <div className="p-4">
                                        <p className="font-medium">{color.name}</p>
                                        <p className="text-muted-foreground mt-1 font-mono text-xs">{color.value}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="overflow-hidden rounded-2xl border bg-card">
                                <div className="h-24 border-b border-black/5 bg-[linear-gradient(135deg,#ffffff_0%,#f4f1fa_48%,#8b5cf6_100%)]" />
                                <div className="p-4">
                                    <p className="font-medium">White to Bellu Violet</p>
                                    <p className="text-muted-foreground mt-1 font-mono text-xs">#FFFFFF → #8B5CF6</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border bg-card p-5">
                            <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-800 dark:bg-violet-900/60 dark:text-violet-200">
                                <span className="size-2 rounded-full bg-violet-500" />
                                Active accent
                            </span>
                            <span className="text-violet-700 underline decoration-violet-400 underline-offset-4 dark:text-violet-300">
                                Link accent
                            </span>
                            <span className="rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-2 text-sm font-medium text-violet-800 dark:text-violet-200">
                                Soft highlight
                            </span>
                            <span className="inline-flex items-center gap-2 text-sm font-medium">
                                <span className="size-2.5 rounded-full bg-emerald-500" />
                                Status accent
                            </span>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-16 md:py-20">
                    <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.4fr]">
                        <div>
                            <p className="text-muted-foreground text-sm font-medium">03 / Typography</p>
                            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Made to read clearly.</h2>
                            <p className="text-muted-foreground mt-3 leading-relaxed">
                                Geist Sans brings clarity to headlines and body copy. Geist Mono is reserved for technical details and data.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wider">Geist Sans · Display</p>
                                <p className="text-4xl font-semibold tracking-tight sm:text-5xl">Bellu AI</p>
                            </div>
                            <div className="border-t pt-6">
                                <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wider">Geist Mono · Data</p>
                                <p className="font-mono text-sm leading-7">
                                    CVE-2026-1842 <span className="text-violet-600 dark:text-violet-400">→</span> confirmed exploited
                                </p>
                                <p className="text-muted-foreground mt-1 font-mono text-xs">Bellu violet · #8B5CF6</p>
                            </div>
                            <Link
                                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
                                href="/"
                            >
                                Back to Bellu AI <ArrowUpRight className="size-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

function LogoSpecimen({
    name,
    description,
    className,
    logoClassName,
}: {
    name: string
    description: string
    className: string
    logoClassName: string
}) {
    return (
        <div className={`flex min-h-52 flex-col justify-between rounded-2xl border p-6 ${className}`}>
            <div className="flex min-h-24 items-center">
                <div className={`flex items-center gap-2 ${logoClassName}`}>
                    <LogoIcon uniColor />
                    <span className="text-lg font-semibold tracking-tight">Bellu AI</span>
                </div>
            </div>
            <div>
                <p className="font-semibold">{name}</p>
                <p className="mt-1 text-sm opacity-70">{description}</p>
            </div>
        </div>
    )
}
