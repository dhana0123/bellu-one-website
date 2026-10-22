import {
    adminSessionCookie,
    adminSessionDurationSeconds,
    createAdminSession,
} from '@/lib/admin-auth'

export async function POST(request: Request) {
    let credentials: unknown
    try {
        credentials = await request.json()
    } catch {
        return Response.json({ error: 'Please enter a username and password.' }, { status: 400 })
    }

    if (!credentials || typeof credentials !== 'object') {
        return Response.json({ error: 'Invalid username or password.' }, { status: 401 })
    }

    const { username, password } = credentials as Record<string, unknown>
    if (username !== 'admin' || password !== 'admin123') {
        return Response.json({ error: 'Invalid username or password.' }, { status: 401 })
    }

    const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
    return Response.json(
        { success: true },
        {
            headers: {
                'Set-Cookie': `${adminSessionCookie}=${createAdminSession()}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${adminSessionDurationSeconds}${secure}`,
            },
        }
    )
}
