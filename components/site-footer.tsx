import Link from 'next/link'
import { LogoIcon } from '@/components/logo'

export function SiteFooter() {
    return (
        <footer className="border-t py-10 sm:py-12">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                <div>
                    <Link href="/" className="inline-flex items-center gap-2 font-medium">
                        <LogoIcon uniColor />
                        <span>Bellu AI</span>
                    </Link>
                </div>

                <nav aria-label="Company links">
                    <ul className="text-muted-foreground space-y-1.5 font-mono text-xs">
                        <li><Link className="transition-colors hover:text-foreground" href="/about">About</Link></li>
                        <li><Link className="transition-colors hover:text-foreground" href="/careers">Careers</Link></li>
                        <li><Link className="transition-colors hover:text-foreground" href="/research">Research</Link></li>
                        <li><Link className="transition-colors hover:text-foreground" href="/blog">Blog</Link></li>
                    </ul>
                </nav>

                <nav aria-label="Product links">
                    <ul className="text-muted-foreground space-y-1.5 font-mono text-xs">
                        <li><Link className="transition-colors hover:text-foreground" href="/">Bellu One</Link></li>
                        <li><Link className="transition-colors hover:text-foreground" href="/products">All products</Link></li>
                        <li><Link className="transition-colors hover:text-foreground" href="/get-demo">Get a demo</Link></li>
                    </ul>
                </nav>

                <nav aria-label="Legal links">
                    <ul className="text-muted-foreground space-y-1.5 font-mono text-xs">
                        <li><Link className="transition-colors hover:text-foreground" href="/privacy">Privacy Policy</Link></li>
                        <li><Link className="transition-colors hover:text-foreground" href="/terms">Terms of Service</Link></li>
                        <li className="pt-2">© Bellu AI 2026</li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
