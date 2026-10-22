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

                        <div
                            className="relative isolate overflow-hidden rounded-3xl px-4 pt-4 max-lg:-mx-4 md:px-6 md:pt-6 lg:px-8 lg:pt-8"
                            style={{
                                backgroundImage: 'url(/hero-preview-bg.webp)',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                            }}
                        >
                            <div className="bg-background ring-foreground/6.5 relative z-10 overflow-hidden rounded-t-2xl p-2 shadow-lg ring">
                                <div className="border-border/70 aspect-[1636/768] overflow-hidden rounded-t-xl border">
                                    <Image
                                        src="/security-dashboard-preview-v2.png"
                                        alt="Security dashboard showing open issues, issue severity, average issue age, and security score"
                                        width={1636}
                                        height={768}
                                        priority
                                        className="h-full w-full object-cover object-top"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
