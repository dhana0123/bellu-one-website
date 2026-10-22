import type { Metadata } from 'next'
import { ProductDetail } from '@/components/product-detail'
import { HeroHeader } from '@/components/hero-section-9-header'
import Footer from '@/components/footer-2'

export const metadata: Metadata = {
    title: 'Remediation | Bellu AI',
    description: 'Validate code and infrastructure fixes with evidence, attack replay, and regression checks.',
}

export default function RemediationPage() {
    return (
        <>
            <HeroHeader />
            <ProductDetail slug="remediation" />
            <Footer />
        </>
    )
}