'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LogoIcon } from '@/components/logo'

const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Careers', href: '/careers' },
    { label: 'Research', href: '/research' },
    { label: 'Blog', href: '/blog' },
]

export function SiteSidebar({ activeItem }: { activeItem: string }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const isProductActive = activeItem === 'Product' || activeItem === 'Bellu One'

    useEffect(() => {
        if (!menuOpen) return

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMenuOpen(false)
        }

        document.documentElement.classList.add('overflow-hidden')
        window.addEventListener('keydown', closeOnEscape)

        return () => {
            document.documentElement.classList.remove('overflow-hidden')
            window.removeEventListener('keydown', closeOnEscape)
        }
    }, [menuOpen])

    return (
        <aside className="border-b py-4 lg:border-b-0 lg:border-r lg:py-10">
            <div className="flex items-center justify-between lg:sticky lg:top-10 lg:-ml-8 lg:block">
                <Link
                    href="/"
                    aria-label="Bellu AI home"
                    className="inline-flex items-center gap-2"
                    onClick={() => setMenuOpen(false)}
                >
                    <LogoIcon uniColor />
                    <span className="text-sm font-semibold">Bellu AI</span>
                </Link>

                <button
                    type="button"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-site-menu"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="flex size-10 items-center justify-center border lg:hidden"
                >
                    {menuOpen ? (
                        <X className="size-5" aria-hidden="true" />
                    ) : (
                        <Menu className="size-5" aria-hidden="true" />
                    )}
                </button>

                <nav aria-label="Main navigation" className="mt-5 hidden lg:block">
                    <ul className="flex flex-col items-start gap-1 text-sm">
                        {navigation.map(({ label, href }) => {
                            const isActive = label === activeItem

                            return (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        aria-current={isActive ? 'page' : undefined}
                                        className={`flex items-center gap-3 py-0.5 transition-colors hover:text-violet-700 ${
                                            isActive ? 'text-violet-700' : 'text-foreground'
                                        }`}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={`h-4 w-0.5 ${
                                                isActive ? 'bg-violet-700' : 'bg-transparent'
                                            }`}
                                        />
                                        {label}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="mt-2">
                            <Link
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-current={isProductActive ? 'page' : undefined}
                                className={`inline-flex border px-2.5 py-1 text-xs transition-colors hover:border-violet-700 hover:text-violet-700 ${
                                    isProductActive
                                        ? 'border-violet-700 text-violet-700'
                                        : 'border-foreground'
                                }`}
                            >
                                Bellu One
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/get-demo"
                                className="flex items-center gap-3 py-0.5 text-foreground transition-colors hover:text-violet-700"
                            >
                                <span aria-hidden="true" className="h-4 w-0.5 bg-transparent" />
                                Get a demo
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {menuOpen && (
                <div
                    id="mobile-site-menu"
                    className="fixed inset-0 z-50 flex flex-col bg-background px-6 pb-8 pt-4 sm:px-8 lg:hidden"
                >
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            aria-label="Bellu AI home"
                            className="inline-flex items-center gap-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            <LogoIcon uniColor />
                            <span className="text-sm font-semibold">Bellu AI</span>
                        </Link>
                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setMenuOpen(false)}
                            className="flex size-10 items-center justify-center border"
                        >
                            <X className="size-5" aria-hidden="true" />
                        </button>
                    </div>

                    <nav aria-label="Mobile navigation" className="mt-12">
                        <ul className="flex flex-col items-start gap-5">
                            {navigation.map(({ label, href }) => {
                                const isActive = label === activeItem

                                return (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            aria-current={isActive ? 'page' : undefined}
                                            onClick={() => setMenuOpen(false)}
                                            className={`flex items-center gap-3 text-xl transition-colors hover:text-violet-700 ${
                                                isActive ? 'text-violet-700' : 'text-foreground'
                                            }`}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={`h-5 w-0.5 ${
                                                    isActive ? 'bg-violet-700' : 'bg-transparent'
                                                }`}
                                            />
                                            {label}
                                        </Link>
                                    </li>
                                )
                            })}
                            <li className="pt-2">
                                <Link
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-current={isProductActive ? 'page' : undefined}
                                    onClick={() => setMenuOpen(false)}
                                    className={`inline-flex border px-3 py-2 text-sm transition-colors hover:border-violet-700 hover:text-violet-700 ${
                                        isProductActive
                                            ? 'border-violet-700 text-violet-700'
                                            : 'border-foreground'
                                    }`}
                                >
                                    Bellu One
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/get-demo"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center gap-3 text-xl transition-colors hover:text-violet-700"
                                >
                                    <span aria-hidden="true" className="h-5 w-0.5 bg-transparent" />
                                    Get a demo
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </aside>
    )
}
