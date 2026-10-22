import { appendFile, mkdir, readFile } from 'node:fs/promises'
import { randomUUID } from 'node:crypto'
import path from 'node:path'

export type DemoRequest = {
    id: string
    submittedAt: string
    firstName: string
    lastName: string
    email: string
    jobTitle: string
    company: string
    securityGoals: string
}

const submissionsPath = path.join(process.cwd(), 'data', 'demo-submissions.jsonl')

export async function saveDemoRequest(request: Omit<DemoRequest, 'id' | 'submittedAt'>) {
    const submission: DemoRequest = {
        ...request,
        id: randomUUID(),
        submittedAt: new Date().toISOString(),
    }

    await mkdir(path.dirname(submissionsPath), { recursive: true })
    await appendFile(submissionsPath, `${JSON.stringify(submission)}\n`, 'utf8')
}

export async function getDemoRequests(): Promise<DemoRequest[]> {
    let contents: string
    try {
        contents = await readFile(submissionsPath, 'utf8')
    } catch (error) {
        if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
            return []
        }
        throw error
    }

    return contents
        .split(/\r?\n/)
        .filter((line) => line.length > 0)
        .map((line) => JSON.parse(line) as DemoRequest)
        .reverse()
}
