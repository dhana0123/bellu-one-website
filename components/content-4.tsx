'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Bot, GitBranch, Network, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const demoHighlights = [
    {
        icon: Network,
        title: 'Your infrastructure, connected.',
        description:
            'Discover code, cloud resources, AI systems, identities, and runtime signals in one unified security graph.',
    },
    {
        icon: GitBranch,
        title: 'Attack paths, not just alerts.',
        description:
            'Connect vulnerabilities, permissions, exposures, and infrastructure relationships to understand how attackers could reach critical assets.',
    },
    {
        icon: Bot,
        title: 'Autonomous security investigation.',
        description:
            'See how AI agents correlate evidence, investigate findings in context, and help prioritize the risks that matter most.',
    },
    {
        icon: ArrowUpRight,
        title: 'From findings to fixes.',
        description:
            'Generate targeted remediation recommendations and patches, with evidence to help teams understand and review proposed changes.',
    },
    {
        icon: ShieldCheck,
        title: 'Validate before production.',
        description:
            "Explore how Bellu AI's infrastructure digital twin can support isolated attack simulation and remediation validation before deployment.",
    },
]

const fieldClassName = 'mt-2 h-11 bg-background'

export default function DemoRequestSection() {
    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSubmitted(false)
        setError('')
        setIsSubmitting(true)

        const form = event.currentTarget
        const formData = new FormData(form)
        const values = Object.fromEntries(formData.entries())

        try {
            const response = await fetch('/api/demo-requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                if (response.status >= 500) {
                    throw new Error('Unable to save your request. Please try again.')
                }
                const result: { error?: string } = await response.json()
                throw new Error(result.error || 'Unable to submit your request.')
            }

            form.reset()
            setSubmitted(true)
        } catch (submitError) {
            setError(
                submitError instanceof Error
                    ? submitError.message
                    : 'Unable to submit your request. Please try again.'
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="px-6 pb-16 pt-32 md:pb-24 md:pt-40">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
                    <div>
                        <p className="text-muted-foreground text-sm font-medium">Bellu AI platform</p>
                        <h1 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                            See Bellu AI in action
                        </h1>
                        <p className="text-muted-foreground mt-6 max-w-2xl text-balance text-lg">
                            Discover how Bellu AI maps your infrastructure, uncovers hidden attack paths, and helps security teams move from vulnerability discovery to validated remediation—all through one connected security platform.
                        </p>

                        <div className="mt-12">
                            <h2 className="text-2xl font-semibold tracking-tight">What you&apos;ll see</h2>
                            <ul className="mt-6 space-y-6">
                                {demoHighlights.map(({ icon: Icon, title, description }) => (
                                    <li key={title} className="flex gap-4">
                                        <span className="bg-muted mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full">
                                            <Icon aria-hidden="true" className="size-4" />
                                        </span>
                                        <p className="text-muted-foreground text-sm leading-6">
                                            <span className="text-foreground font-semibold">{title}</span>{' '}
                                            {description}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="h-fit rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <Label htmlFor="first-name">First name <span aria-hidden="true">*</span></Label>
                                    <Input className={fieldClassName} id="first-name" name="firstName" autoComplete="given-name" required />
                                </div>
                                <div>
                                    <Label htmlFor="last-name">Last name <span aria-hidden="true">*</span></Label>
                                    <Input className={fieldClassName} id="last-name" name="lastName" autoComplete="family-name" required />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="work-email">Work email <span aria-hidden="true">*</span></Label>
                                <Input className={fieldClassName} id="work-email" name="email" type="email" autoComplete="email" required />
                            </div>

                            <div>
                                <Label htmlFor="job-title">Job title <span aria-hidden="true">*</span></Label>
                                <Input className={fieldClassName} id="job-title" name="jobTitle" autoComplete="organization-title" required />
                            </div>

                            <div>
                                <Label htmlFor="company">Company <span aria-hidden="true">*</span></Label>
                                <Input className={fieldClassName} id="company" name="company" autoComplete="organization" required />
                            </div>

                            <div>
                                <Label htmlFor="secure">What would you like to secure?</Label>
                                <textarea
                                    className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 mt-2 min-h-28 w-full resize-y rounded-lg border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-3"
                                    id="secure"
                                    name="securityGoals"
                                    placeholder="Share your priorities, infrastructure, or questions"
                                />
                            </div>

                            <Button className="h-11 w-full" disabled={isSubmitting} type="submit">
                                {isSubmitting ? 'Submitting…' : 'Get a demo'}
                            </Button>
                            <p className="text-muted-foreground text-xs leading-5">
                                By submitting this form, you agree that Bellu AI may contact you about your request, as described in our Privacy Policy.
                            </p>
                            {submitted && (
                                <p className="text-sm text-green-700" role="status">
                                    Thanks. Your demo request has been submitted.
                                </p>
                            )}
                            {error && (
                                <p className="text-destructive text-sm" role="alert">
                                    {error}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
