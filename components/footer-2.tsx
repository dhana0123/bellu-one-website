import Link from 'next/link'
import { LogoIcon } from '@/components/logo'
import { Gemini } from '@/components/ui/svgs/gemini'
import { ClaudeAI } from '@/components/ui/svgs/claude-ai'
import { Openai } from '@/components/ui/svgs/openai'
import { Button } from '@/components/ui/button'
import { productFeatures } from '@/lib/product-features'

const footerLinks = [
    {
        name: 'Products',
        links: [
            { href: '/products', label: 'All products' },
            { href: '/products/bellu-continuous', label: 'Bellu Continuous' },
            ...Object.values(productFeatures).map((product) => ({
                href: `/products/${product.slug}`,
                label: product.label,
            })),
        ],
    },
    {
        name: 'Company',
        links: [
            { href: '/about', label: 'About us' },
            { href: '/company', label: 'Company' },
            { href: '/careers', label: 'Careers' },
            { href: '/get-demo', label: 'Contact' },
            { href: '/brand', label: 'Brand guidelines' },
        ],
    },
    {
        name: 'Legal',
        links: [
            { href: '/privacy', label: 'Privacy Policy' },
            { href: '/terms', label: 'Terms of Service' },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="bg-violet-950 text-white [--border:#3b2d50] [--foreground:#fff] [--muted-foreground:#c4b5d0]">
            <div className="mx-auto max-w-7xl space-y-16 px-6 pb-6 pt-32">
                <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-4 lg:grid-cols-6">
                    <div className="col-span-full lg:col-span-3">
                        <Link
                            href="/"
                            aria-label="go home"
                            className="inline-flex items-center gap-2 text-white"
                        >
                            <LogoIcon uniColor />
                            <span className="text-lg font-semibold tracking-tight">Bellu AI</span>
                        </Link>
                    </div>

                    {footerLinks.map((linksGroup, index) => (
                        <div key={index}>
                            <span className="text-foreground text-sm">{linksGroup.name}</span>
                            <ul className="mt-4 list-inside space-y-4">
                                {linksGroup.links.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-white/65 text-sm duration-150 hover:text-violet-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-24 grid gap-x-3 gap-y-6 border-t pt-6 sm:grid-cols-2">
                    <div>
                        <p className="text-white/65 text-sm">Get an AI summary of this page</p>
                        <div className="-ml-2.5 mt-2 flex items-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                nativeButton={false}
                                render={
                                    <Link
                                        href="#"
                                        aria-label="Claude AI"
                                    >
                                        <ClaudeAI />
                                    </Link>
                                }
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                nativeButton={false}
                                render={
                                    <Link
                                        href="#"
                                        aria-label="OpenAI"
                                    >
                                        <Openai />
                                    </Link>
                                }
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                nativeButton={false}
                                render={
                                    <Link
                                        href="#"
                                        aria-label="Gemini"
                                    >
                                        <Gemini />
                                    </Link>
                                }
                            />
                        </div>
                    </div>
                    <span className="block text-sm text-white/65">&copy; Bellu AI 2025 - Present</span>
                </div>
            </div>
        </footer>
    )
}
