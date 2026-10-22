import type { Metadata } from 'next'
import { PolicyPage, type PolicySection } from '@/components/policy-page'

export const metadata: Metadata = {
    title: 'Terms of Service | Bellu AI',
    description: 'Draft terms for the Bellu AI website.',
}

const sections: PolicySection[] = [
    {
        heading: 'Website use',
        paragraphs: [
            'These draft terms describe use of the Bellu AI marketing website. Please use the website lawfully and do not interfere with its operation, attempt unauthorized access, or misuse its content or services.',
        ],
    },
    {
        heading: 'Product information',
        paragraphs: [
            'Website descriptions of Bellu AI, its security platform, and planned capabilities are informational and may describe product direction. They are not a guarantee that a feature is available, that a security outcome will be achieved, or that a product is suitable for a particular environment.',
        ],
    },
    {
        heading: 'No security or professional advice',
        paragraphs: [
            'Website content is general information, not security, legal, or other professional advice. Do not rely on it as a substitute for an assessment of your own systems and risks.',
        ],
    },
    {
        heading: 'Intellectual property',
        paragraphs: [
            'Unless otherwise stated, Bellu AI and its licensors retain rights in the website content, branding, and materials. You may access and share public pages for informational purposes, but may not misrepresent ownership or reproduce materials commercially without permission.',
        ],
    },
    {
        heading: 'Changes and availability',
        paragraphs: [
            'The website and its content may change or become unavailable. These draft terms should be completed with the applicable company details, governing law, liability provisions, and other terms before publication.',
        ],
    },
]

export default function TermsPage() {
    return (
        <PolicyPage
            title="Terms of Service"
            intro="These draft terms are intended to describe the basic rules for using the Bellu AI website."
            sections={sections}
        />
    )
}
