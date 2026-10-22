import type { Metadata } from 'next'
import { ProductDetail } from '@/components/product-detail'
import { HeroHeader } from '@/components/hero-section-9-header'
import Footer from '@/components/footer-2'

export const metadata: Metadata = {
    title: 'Security Graph | Bellu AI',
    description: 'Connect code, cloud, identities, AI agents, and runtime context in one security graph.',
}

export default function SecurityGraphPage() {
    return (
        <>
            <HeroHeader />
            <ProductDetail slug="security-graph" />
            <Footer />
        </>
    )
}