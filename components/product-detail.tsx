import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { productFeatures } from '@/lib/product-features'

export function ProductDetail({ slug }: { slug: string }) {
    const product = Object.values(productFeatures).find((feature) => feature.slug === slug)

    if (!product) {
        notFound()
    }

    return (
        <main className="flex-1">
            <section className="px-6 pb-20 pt-36 md:pb-28 md:pt-44">
                <div className="mx-auto max-w-7xl">
                    <Link
                        href="/products"
                        className="text-muted-foreground inline-flex items-center gap-2 text-sm transition-colors hover:text-foreground"
                    >
                        <ArrowRight className="size-4 rotate-180" aria-hidden="true" />
                        All products
                    </Link>
                    <p className="text-muted-foreground mt-10 text-sm font-medium">Bellu AI platform</p>
                    <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
                        {product.title}
                    </h1>
                    <p className="mt-8 max-w-3xl text-balance text-xl leading-relaxed">
                        <span className="font-medium">{product.lead} </span>
                        <span className="text-muted-foreground">{product.description}</span>
                    </p>

                    <div className="mt-12 grid max-w-3xl gap-0 divide-y border-y">
                        {product.highlights.map(({ icon: Icon, label }) => (
                            <ProductHighlight key={label} icon={Icon} label={label} />
                        ))}
                    </div>

                    <Button
                        className="mt-10"
                        size="lg"
                        nativeButton={false}
                        render={<Link href="/get-demo">Get a demo</Link>}
                    />
                </div>
            </section>
        </main>
    )
}

function ProductHighlight({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
    return (
        <div className="text-muted-foreground flex items-center gap-3 py-4">
            <Icon className="size-4" aria-hidden="true" />
            <span>{label}</span>
        </div>
    )
}