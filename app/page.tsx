import CallToAction from '@/components/call-to-action-2'
import FeaturesFour from '@/components/features-4'
import FeaturesFive from '@/components/features-5'
import { ExploitationTimelineSection } from '@/components/exploitation-timeline'
import Footer from '@/components/footer-2'
import HeroSection from '@/components/hero-section-9'
import Stats from '@/components/stats-2'
import Team from '@/components/team-2'

export default function Home() {
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
