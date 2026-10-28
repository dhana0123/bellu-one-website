import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteSidebar } from '@/components/site-sidebar'
import { SiteFooter } from '@/components/site-footer'
import { productFeatures } from '@/lib/product-features'

export const metadata: Metadata = {
    title: 'Products | Bellu AI',
    description: 'Explore the Bellu AI security platform and its connected capabilities.',
}

export default function ProductsPage() {
    return (
        <div className="mx-auto min-h-screen max-w-6xl border-x px-5 font-sans sm:px-8">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[150px_minmax(0,1fr)]">
                <SiteSidebar activeItem="Product" />
                <main className="min-w-0">
                    <section className="grid gap-8 border-b py-16 sm:py-20 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11 lg:py-28">
                        <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                            01
                        </span>
                        <div className="max-w-2xl">
                            <h1 className="text-balance text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                                Products
                            </h1>
                            <p className="text-muted-foreground mt-5 text-sm leading-relaxed">
                                Connected security intelligence for understanding infrastructure,
                                investigating threats, testing changes, and validating remediation.
                            </p>
                        </div>
                    </section>

                    <section className="grid gap-6 border-b py-10 sm:py-12 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11">
                        <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                            02
                        </span>
                        <article className="max-w-2xl">
                            <p className="text-muted-foreground text-xs">Platform</p>
                            <h2 className="mt-2 text-xl font-medium tracking-tight">
                                Bellu Continuous
                            </h2>
                            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                Continuous security intelligence that connects threat discovery,
                                infrastructure context, safe testing, and remediation in one
                                platform.
                            </p>
                            <Link
                                href="/products/bellu-continuous"
                                className="mt-4 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 transition-colors hover:text-violet-700"
                            >
                                Explore Bellu Continuous
                                <ArrowRight className="size-4" aria-hidden="true" />
                            </Link>
                        </article>
                    </section>

                    <section className="grid gap-6 py-10 sm:py-12 lg:grid-cols-[34px_minmax(0,1fr)] lg:gap-5 lg:px-11">
                        <span className="text-muted-foreground hidden pt-1 font-mono text-[10px] lg:block">
                            03
                        </span>
                        <div className="max-w-2xl">
                            <h2 className="border-b pb-4 text-xl font-medium tracking-tight">
                                Platform capabilities
                            </h2>
                            <div className="divide-y">
                                {Object.values(productFeatures).map((product) => (
                                    <article key={product.id} className="py-5">
                                        <p className="text-muted-foreground text-xs">
                                            {product.label}
                                        </p>
                                        <h3 className="mt-1 text-lg font-medium tracking-tight">
                                            {product.title}
                                        </h3>
                                        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                            <span className="text-foreground font-medium">
                                                {product.lead}
                                            </span>{' '}
                                            {product.description}
                                        </p>
                                        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                                            {product.highlights.map(({ icon: Icon, label }) => (
                                                <li
                                                    key={label}
                                                    className="text-muted-foreground flex items-center gap-2 text-xs"
                                                >
                                                    <Icon className="size-3.5" aria-hidden="true" />
                                                    {label}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href={`/products/${product.slug}`}
                                            className="mt-3 inline-flex items-center gap-2 text-xs font-medium underline underline-offset-4 transition-colors hover:text-violet-700"
                                        >
                                            Explore {product.label}
                                            <ArrowRight className="size-3.5" aria-hidden="true" />
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
                <div className="lg:col-span-2">
                    <SiteFooter />
                </div>
            </div>
        </div>
    )
}