import type { Metadata } from 'next'
import { PolicyPage, type PolicySection } from '@/components/policy-page'

export const metadata: Metadata = {
    title: 'Privacy Policy | Bellu AI',
    description: 'Draft privacy information for the Bellu AI website.',
}

const sections: PolicySection[] = [
    {
        heading: 'Information you provide',
        paragraphs: [
            'When you submit the demo request form, the information you provide is stored locally by this demo website and is visible to the site administrator. Do not include sensitive or confidential information. Demo submissions may be removed when the local demo data is cleared.',
        ]
    },
    {
        heading: 'Technical information',
        paragraphs: [
            'When you visit a website, the hosting and delivery providers used to operate it may process technical request information such as IP address, browser details, and requested pages. Confirm the actual providers, information collected, purposes, and retention periods for the deployed site before publishing this policy.',
        ],
    },
    {
        heading: 'Cookies and analytics',
        paragraphs: [
            'This draft does not make claims about cookies, analytics, or other tracking technologies. Update this section to accurately describe any tools enabled on the production website and provide required choices or notices.',
        ],
    },
    {
        heading: 'How information may be used',
        paragraphs: [
            'Information processed to operate, secure, and improve the website should be handled only for clearly stated purposes and in accordance with applicable privacy requirements. The final policy should identify the responsible legal entity and its contact details.',
        ],
    },
    {
        heading: 'Your choices and rights',
        paragraphs: [
            'Privacy rights and choices depend on where you live and how information is processed. Before publication, add the applicable rights request process, contact channel, retention details, and any disclosures required for your users and jurisdictions.',
        ],
    },
]

export default function PrivacyPage() {
    return (
        <PolicyPage
            title="Privacy Policy"
            intro="This draft explains how the demo request form currently stores information and highlights website privacy details that must be confirmed before publication."
            sections={sections}
        />
    )
}
