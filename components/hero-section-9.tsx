import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
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
                            <span>Open source</span>
                            <span className="text-muted-foreground">Bellu One</span>

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

                        <div className="relative isolate mx-auto mt-16 max-w-6xl overflow-hidden border border-violet-300/60 bg-violet-950 shadow-2xl shadow-violet-950/20">
                            <Image
                                src="/hero-purple-dashboard-bg.jpg"
                                alt=""
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 1152px"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-violet-950/10" aria-hidden="true" />
                            <div className="relative px-4 py-10 sm:px-8 sm:py-14 md:px-14 md:py-20">
                                <Image
                                    src="/security-dashboard-preview-v2.png"
                                    alt="Bellu AI security dashboard preview with issue severity, security score, and activity trends"
                                    width={1630}
                                    height={900}
                                    priority
                                    className="h-auto w-full border border-white/40 shadow-2xl shadow-black/30"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
