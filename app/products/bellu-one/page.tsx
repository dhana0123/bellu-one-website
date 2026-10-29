import { redirect } from 'next/navigation'

// Bellu One is now the main landing page. Keep this route working by
// redirecting it to the root so existing links resolve to the canonical page.
export default function BelluOnePage() {
    redirect('/')
}
