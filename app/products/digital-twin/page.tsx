import type { Metadata } from 'next'
import { ProductDetail } from '@/components/product-detail'
import { HeroHeader } from '@/components/hero-section-9-header'
import Footer from '@/components/footer-2'

export const metadata: Metadata = {
    title: 'Digital Twin | Bellu AI',
    description: 'Simulate attack scenarios and test infrastructure changes safely before production.',
}

export default function DigitalTwinPage() {
    return (
        <>
            <HeroHeader />
            <ProductDetail slug="digital-twin" />
            <Footer />
        </>
    )
}