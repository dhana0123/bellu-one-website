import { createHmac, timingSafeEqual } from 'node:crypto'

export const adminSessionCookie = 'bellu_admin_session'
export const adminSessionDurationSeconds = 60 * 60 * 8

const sessionSecret =
    process.env.DEMO_ADMIN_SESSION_SECRET || 'demo-only-session-secret-change-for-deployment'

function sign(timestamp: string) {
    return createHmac('sha256', sessionSecret).update(timestamp).digest('hex')
}

export function createAdminSession() {
    const timestamp = Date.now().toString()
    return `${timestamp}.${sign(timestamp)}`
}

export function isValidAdminSession(value: string | undefined) {
    if (!value) return false

    const [timestamp, signature, extra] = value.split('.')
    if (!timestamp || !signature || extra) return false

    const issuedAt = Number(timestamp)
    const age = Date.now() - issuedAt
    if (!Number.isFinite(issuedAt) || age < 0 || age > adminSessionDurationSeconds * 1000) {
        return false
    }

    const expected = Buffer.from(sign(timestamp), 'hex')
    const received = Buffer.from(signature, 'hex')
    return expected.length === received.length && timingSafeEqual(expected, received)
}
