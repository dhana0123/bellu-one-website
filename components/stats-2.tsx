export default function StatsSection() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-4xl">
                    <h2 className="text-balance text-4xl font-medium tracking-tight lg:text-5xl">
                        One platform. Connected intelligence. Continuous defense.
                    </h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">
                        Scale with confidence. Handle thousands of transactions per second.
                    </p>
                </div>

                <div className="mt-32 grid gap-12 md:grid-cols-2 xl:mt-44">
                    <div className="space-y-3 border-t pt-6">
                        <div className="text-5xl font-semibold tracking-tight"># 01</div>
                        <p className="font-medium">Unified security graph</p>
                        <p className="text-muted-foreground">Connect code, cloud infrastructure, identities, and AI systems.</p>
                    </div>
                    <div className="space-y-3 border-t pt-6">
                        <div className="text-5xl font-semibold tracking-tight">One</div>
                        <p className="font-medium">Connected security view</p>
                        <p className="text-muted-foreground">Bring fragmented security evidence into one place.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
