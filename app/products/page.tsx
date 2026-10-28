import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroHeader } from '@/components/hero-section-9-header'
import Footer from '@/components/footer-2'
import { productFeatures } from '@/lib/product-features'

export const metadata: Metadata = {
    title: 'Products | Bellu AI',
    description: 'Explore the Bellu AI security platform and its connected capabilities.',
}

export default function ProductsPage() {
    return (
        <>
            <HeroHeader />
            <main className="flex-1">
                <section className="px-6 pb-20 pt-36 md:pb-28 md:pt-44">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-muted-foreground text-sm font-medium">Products</p>
                        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
                            Connected intelligence. Continuous defense.
                        </h1>
                        <p className="text-muted-foreground mt-8 max-w-3xl text-balance text-xl leading-relaxed">
                            Explore the capabilities that connect security context, threat discovery, safe testing, and remediation.
                        </p>

                        <div className="mt-16 grid gap-4 sm:grid-cols-2">
                            <article className="rounded-2xl border border-violet-300/60 bg-violet-50/50 p-6 sm:col-span-2 sm:p-8">
                                <p className="text-muted-foreground text-sm font-medium">Featured product</p>
                                <h2 className="mt-3 text-2xl font-semibold tracking-tight">Bellu Continuous</h2>
                                <p className="text-muted-foreground mt-3 max-w-3xl leading-relaxed">
                                    Continuous security intelligence that connects threat discovery,
                                    infrastructure context, safe testing, and remediation in one platform.
                                </p>
                                <Link
                                    href="/products/bellu-continuous"
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
                                >
                                    Explore Bellu Continuous
                                    <ArrowRight className="size-4" aria-hidden="true" />
                                </Link>
                            </article>
                            {Object.values(productFeatures).map((product) => (
                                <article key={product.id} className="rounded-2xl border p-6 sm:p-8">
                                    <p className="text-muted-foreground text-sm font-medium">{product.label}</p>
                                    <h2 className="mt-3 text-2xl font-semibold tracking-tight">{product.title}</h2>
                                    <p className="text-muted-foreground mt-3 leading-relaxed">
                                        <span className="text-foreground font-medium">{product.lead}</span> {product.description}
                                    </p>
                                    <ul className="mt-6 space-y-3">
                                        {product.highlights.map(({ icon: Icon, label }) => (
                                            <li key={label} className="text-muted-foreground flex items-center gap-3 text-sm">
                                                <Icon className="size-4" aria-hidden="true" />
                                                {label}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={`/products/${product.slug}`}
                                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
                                    >
                                        Explore {product.label}
                                        <ArrowRight className="size-4" aria-hidden="true" />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}