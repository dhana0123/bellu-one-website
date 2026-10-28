import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoProps = {
    className?: string
    uniColor?: boolean
}

export const Logo = ({ className }: LogoProps) => (
    <Image
        src="/logo.svg"
        alt=""
        aria-hidden="true"
        width={768}
        height={864}
        className={cn('h-9 w-auto object-contain', className)}
    />
)

export const LogoIcon = ({ className }: LogoProps) => (
    <Image
        src="/logo.svg"
        alt=""
        aria-hidden="true"
        width={768}
        height={864}
        className={cn('h-9 w-auto object-contain', className)}
    />
)
