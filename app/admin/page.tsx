import { cookies } from 'next/headers'
import { AdminLoginForm, AdminLogoutButton } from '@/components/admin-auth-forms'
import { adminSessionCookie, isValidAdminSession } from '@/lib/admin-auth'
import { getDemoRequests } from '@/lib/demo-requests'

export const instant = false

export default async function AdminPage() {
    const cookieStore = await cookies()
    const isAuthenticated = isValidAdminSession(cookieStore.get(adminSessionCookie)?.value)
    const requests = isAuthenticated ? await getDemoRequests() : []

    return (
        <main className="min-h-screen px-6 py-16">
            <div className="mx-auto max-w-6xl">
                {!isAuthenticated ? (
                    <section className="mx-auto mt-12 flex max-w-lg flex-col items-center rounded-2xl border bg-card p-8 shadow-sm">
                        <h1 className="text-3xl font-semibold tracking-tight">Admin sign in</h1>
                        <p className="text-muted-foreground mt-3 mb-8 text-center">
                            Sign in to view demo requests submitted on this site.
                        </p>
                        <AdminLoginForm />
                    </section>
                ) : (
                    <>
                        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <p className="text-muted-foreground text-sm">Bellu AI demo</p>
                                <h1 className="mt-2 text-3xl font-semibold tracking-tight">Demo requests</h1>
                                <p className="text-muted-foreground mt-2">
                                    {requests.length} {requests.length === 1 ? 'submission' : 'submissions'}
                                </p>
                            </div>
                            <AdminLogoutButton />
                        </header>

                        {requests.length === 0 ? (
                            <div className="rounded-2xl border bg-card p-8 text-center">
                                <p className="font-medium">No demo requests yet</p>
                                <p className="text-muted-foreground mt-2 text-sm">
                                    New submissions will appear here.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {requests.map((request) => (
                                    <article key={request.id} className="rounded-2xl border bg-card p-6 shadow-sm">
                                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                            <Field label="Name" value={`${request.firstName} ${request.lastName}`} />
                                            <Field label="Email" value={request.email} />
                                            <Field label="Job title" value={request.jobTitle} />
                                            <Field label="Company" value={request.company} />
                                            <Field
                                                label="Submitted"
                                                value={new Date(request.submittedAt).toLocaleString()}
                                            />
                                        </div>
                                        {request.securityGoals && (
                                            <div className="mt-5 border-t pt-4">
                                                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                                                    What they would like to secure
                                                </p>
                                                <p className="mt-2 whitespace-pre-wrap text-sm leading-6">
                                                    {request.securityGoals}
                                                </p>
                                            </div>
                                        )}
                                    </article>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </main>
    )
}

function Field({ label, value }: { label: string; value: string }) {
    return (
        <div className="min-w-0">
            <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{label}</p>
            <p className="mt-1 break-words text-sm">{value}</p>
        </div>
    )
}
