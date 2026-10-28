import Link from 'next/link'
import { LogoIcon } from '@/components/logo'

const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Product', href: '/products/bellu-continuous', newTab: true },
    { label: 'Careers', href: '/careers' },
    { label: 'Research', href: '/research' },
    { label: 'Blog', href: '/blog' },
    { label: 'Get a demo', href: '/get-demo' },
]

export function SiteSidebar({ activeItem }: { activeItem: string }) {
    return (
        <aside className="border-b py-6 lg:border-b-0 lg:border-r lg:py-10">
            <div className="lg:sticky lg:top-10 lg:-ml-8">
                <Link href="/" aria-label="Bellu AI home" className="inline-flex items-center gap-2">
                    <LogoIcon uniColor />
                    <span className="text-sm font-semibold">Bellu AI</span>
                </Link>
                <nav aria-label="Main navigation" className="mt-5">
                    <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm lg:flex-col lg:gap-1">
                        {navigation.map(({ label, href, newTab }) => {
                            const isActive = label === activeItem

                            return (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        target={newTab ? '_blank' : undefined}
                                        rel={newTab ? 'noopener noreferrer' : undefined}
                                        aria-current={isActive ? 'page' : undefined}
                                        className={`flex items-center gap-3 py-0.5 transition-colors hover:text-violet-700 ${
                                            isActive ? 'text-violet-700' : 'text-foreground'
                                        }`}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={`h-4 w-0.5 lg:block ${
                                                isActive ? 'bg-violet-700' : 'bg-transparent'
                                            }`}
                                        />
                                        {label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
