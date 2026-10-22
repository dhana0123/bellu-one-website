'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function AdminLoginForm() {
    const router = useRouter()
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError('')
        setIsSubmitting(true)

        const formData = new FormData(event.currentTarget)
        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: formData.get('username'),
                    password: formData.get('password'),
                }),
            })
            const result: { error?: string } = await response.json()
            if (!response.ok) throw new Error(result.error || 'Unable to sign in.')
            router.refresh()
        } catch (loginError) {
            setError(loginError instanceof Error ? loginError.message : 'Unable to sign in.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form className="w-full max-w-sm space-y-5" onSubmit={handleSubmit}>
            <div>
                <Label htmlFor="username">Username</Label>
                <Input className="mt-2 h-11" id="username" name="username" autoComplete="username" required />
            </div>
            <div>
                <Label htmlFor="password">Password</Label>
                <Input className="mt-2 h-11" id="password" name="password" type="password" autoComplete="current-password" required />
            </div>
            <Button className="h-11 w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Signing in…' : 'Sign in'}
            </Button>
            <p className="text-muted-foreground text-xs">Demo credentials: admin / admin123</p>
            {error && <p className="text-destructive text-sm" role="alert">{error}</p>}
        </form>
    )
}

export function AdminLogoutButton() {
    const router = useRouter()
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function handleLogout() {
        setError('')
        setIsSubmitting(true)
        try {
            const response = await fetch('/api/admin/logout', { method: 'POST' })
            if (!response.ok) throw new Error('Unable to sign out. Please try again.')
            router.refresh()
        } catch (logoutError) {
            setError(logoutError instanceof Error ? logoutError.message : 'Unable to sign out.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex items-center gap-3">
            {error && <p className="text-destructive text-sm" role="alert">{error}</p>}
            <Button disabled={isSubmitting} variant="outline" onClick={handleLogout}>
                {isSubmitting ? 'Signing out…' : 'Sign out'}
            </Button>
        </div>
    )
}
