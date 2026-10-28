import type { Metadata } from 'next'
import CallToAction from '@/components/call-to-action-2'
import FeaturesFour from '@/components/features-4'
import FeaturesFive from '@/components/features-5'
import { ExploitationTimelineSection } from '@/components/exploitation-timeline'
import Footer from '@/components/footer-2'
import HeroSection from '@/components/hero-section-9'
import Stats from '@/components/stats-2'
import Team from '@/components/team-2'

export const metadata: Metadata = {
    title: 'Bellu Continuous | Bellu AI',
    description:
        'Discover Bellu Continuous: connected security intelligence for threat discovery, infrastructure context, safe testing, and remediation.',
}

export default function BelluContinuousPage() {
    return (
        <>
            <HeroSection />
            <FeaturesFour />
            <FeaturesFive />
            <ExploitationTimelineSection />
            <Stats />
            <Team />
            <CallToAction />
            <Footer />
        </>
    )
}
