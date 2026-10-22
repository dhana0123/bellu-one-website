import type { Metadata } from 'next'
import { ProductDetail } from '@/components/product-detail'
import { HeroHeader } from '@/components/hero-section-9-header'
import Footer from '@/components/footer-2'

export const metadata: Metadata = {
    title: 'Threat Discovery | Bellu AI',
    description: 'Discover vulnerabilities, investigate suspicious activity, and trace attack paths.',
}

export default function ThreatDiscoveryPage() {
    return (
        <>
            <HeroHeader />
            <ProductDetail slug="threat-discovery" />
            <Footer />
        </>
    )
}