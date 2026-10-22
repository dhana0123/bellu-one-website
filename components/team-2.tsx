import Image from 'next/image'

export default function TeamSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                    <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight">
                        <span className="text-foreground">Built for the era of autonomous cybersecurity.</span>
                    </h2>
                    <div className="flex flex-col gap-32 md:mx-auto xl:gap-44">
                        <p className="text-muted-foreground text-balance text-lg">
                            We&apos;re building Bellu AI to make cybersecurity fully autonomous—systems that defend themselves, detect threats, and heal vulnerabilities with confidence. Our vision is a new generation of self-defending, self-healing infrastructure that continuously adapts to emerging threats and protects what matters.
                        </p>

                        <div className="grid grid-cols-[auto_1fr] items-center gap-7">
                            <div className="relative size-12 overflow-hidden rounded-full shadow-md ring-1 ring-foreground/10">
                                <Image
                                    src="/santhosh-founder.png"
                                    alt="Santhosh, founder of Bellu AI"
                                    width={100}
                                    height={100}
                                    className="size-full object-cover"
                                />
                            </div>

                            <div>
                                <h3 className="text-sm font-medium">Santhosh</h3>
                                <p className="text-muted-foreground text-sm">Founder of Bellu AI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
