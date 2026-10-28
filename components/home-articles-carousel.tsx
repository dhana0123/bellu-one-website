'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

const articles = [
    {
        title: 'Introducing Bellu Continuous',
        date: '2026.10.28',
        dateTime: '2026-10-28',
        href: '/blog/introducing-bellu-continuous',
        description:
            'A connected approach to infrastructure security, AI investigation, and verified response.',
    },
]

export function HomeArticlesCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: -1 | 1) => {
        const carousel = carouselRef.current
        if (!carousel) return

        const card = carousel.querySelector<HTMLElement>('[data-article-card]')
        const distance = card ? card.offsetWidth + 16 : carousel.clientWidth
        carousel.scrollBy({ left: direction * distance, behavior: 'smooth' })
    }

    return (
        <section
            aria-labelledby="home-articles-heading"
            className="-mx-5 border-t px-5 py-8 sm:-mx-8 sm:px-8 lg:col-span-2"
        >
            <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span className="text-muted-foreground font-mono text-[10px]">04.</span>
                    <h2 id="home-articles-heading" className="text-sm font-medium">
                        Articles
                    </h2>
                </div>
                <div className="flex gap-1">
                    <button
                        type="button"
                        aria-label="Scroll articles left"
                        onClick={() => scroll(-1)}
                        className="flex size-8 items-center justify-center border transition-colors hover:bg-muted"
                    >
                        <ChevronLeft className="size-4" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        aria-label="Scroll articles right"
                        onClick={() => scroll(1)}
                        className="flex size-8 items-center justify-center border transition-colors hover:bg-muted"
                    >
                        <ChevronRight className="size-4" aria-hidden="true" />
                    </button>
                </div>
            </div>

            <div
                ref={carouselRef}
                aria-label="Latest Bellu AI articles"
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {articles.map((article) => (
                    <Link
                        key={article.href}
                        href={article.href}
                        data-article-card
                        className="group min-w-0 flex-[0_0_88%] snap-start sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
                    >
                        <div className="relative aspect-[1.7] overflow-hidden border bg-muted">
                            <Image
                                src="/feature-gradient-lavender.png"
                                alt=""
                                fill
                                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 48vw, 32vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            />
                        </div>
                        <h3 className="mt-3 text-sm font-medium transition-colors group-hover:text-violet-700">
                            {article.title}
                        </h3>
                        <time
                            dateTime={article.dateTime}
                            className="text-muted-foreground mt-1 block font-mono text-xs"
                        >
                            {article.date}
                        </time>
                        <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                            {article.description}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    )
}
