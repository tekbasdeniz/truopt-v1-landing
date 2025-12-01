import Link from "next/link"
import { ReactNode } from "react"

interface Props {
    wrapperClassName?: string
    children: ReactNode
    onClick?: () => void
}

const WaitlistButton = ({ wrapperClassName, children, onClick }: Props) => {
    return (
        <Link
            href="#waitlist"
            onClick={onClick}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_var(--color-primary)] w-fit min-w-[214px] h-12 ${wrapperClassName}`}
        >
            {children}
        </Link>
    )
}

export default WaitlistButton