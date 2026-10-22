import { adminSessionCookie } from '@/lib/admin-auth'

export async function POST() {
    return Response.json(
        { success: true },
        {
            headers: {
                'Set-Cookie': `${adminSessionCookie}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`,
            },
        }
    )
}
