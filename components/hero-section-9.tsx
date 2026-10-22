import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { HeroHeader } from '@/components/hero-section-9-header'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />

            <main>
                <section className="pt-24 lg:pt-40">
                    <div className="mx-auto max-w-7xl px-6">
                        <Link
                            href="/"
                            className="mx-auto flex w-fit items-center gap-2 font-medium"
                        >
                            <span>New</span>
                            <span className="text-muted-foreground">Introducing Bellu AI</span>

                            <ArrowRight className="size-3.5" />
                        </Link>

                        <div className="mx-auto mb-12 mt-8 flex max-w-3xl flex-col justify-center gap-6 text-center md:gap-8">
                            <h1 className="text-balance text-4xl font-medium tracking-tight md:text-5xl">Secure Your Critical Infrastructure. At the Speed of AI.</h1>
                            <Button
                                className="mx-auto w-fit"
                                size="lg"
                                nativeButton={false}
                                render={<Link href="/get-demo">Get a demo</Link>}
                            />
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}
