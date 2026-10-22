import { saveDemoRequest } from '@/lib/demo-requests'

type DemoRequestPayload = {
    firstName: string
    lastName: string
    email: string
    jobTitle: string
    company: string
    securityGoals: string
}

function isDemoRequestPayload(value: unknown): value is DemoRequestPayload {
    if (!value || typeof value !== 'object') return false

    const payload = value as Record<string, unknown>
    if (
        typeof payload.firstName !== 'string' ||
        !payload.firstName.trim() ||
        typeof payload.lastName !== 'string' ||
        !payload.lastName.trim() ||
        typeof payload.email !== 'string' ||
        !payload.email.trim() ||
        typeof payload.jobTitle !== 'string' ||
        !payload.jobTitle.trim() ||
        typeof payload.company !== 'string' ||
        !payload.company.trim() ||
        typeof payload.securityGoals !== 'string'
    ) {
        return false
    }

    return (
        payload.firstName.length <= 100 &&
        payload.lastName.length <= 100 &&
        payload.email.length <= 254 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) &&
        payload.jobTitle.length <= 150 &&
        payload.company.length <= 150 &&
        payload.securityGoals.length <= 2000
    )
}

export async function POST(request: Request) {
    let payload: unknown
    try {
        payload = await request.json()
    } catch {
        return Response.json({ error: 'Please submit a valid form.' }, { status: 400 })
    }

    if (!isDemoRequestPayload(payload)) {
        return Response.json(
            { error: 'Please complete all required fields with valid information.' },
            { status: 400 }
        )
    }

    await saveDemoRequest({
        firstName: payload.firstName.trim(),
        lastName: payload.lastName.trim(),
        email: payload.email.trim(),
        jobTitle: payload.jobTitle.trim(),
        company: payload.company.trim(),
        securityGoals: payload.securityGoals.trim(),
    })

    return Response.json({ success: true }, { status: 201 })
}
