import Link from "next/link"
import { useTranslations } from "next-intl"

const HowItWorksButton = () => {
    const t = useTranslations('finalCta')

    return (
        <Link
            href="#how-it-works"
            className="relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer border border-border bg-card/20 backdrop-blur-xl hover:bg-card/30 hover:border-primary/40 h-12 px-8 min-w-[214px] shadow-lg overflow-hidden group"
        >
            {/* Glass Reflection Layer */}
            <span className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Button Text */}
            <span className="relative z-10">{t('secondaryCta')}</span>
        </Link>
    )
}

export default HowItWorksButton