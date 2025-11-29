"use client"

import { Container } from "@/components/ui/container"
import Link from "next/link"

import { useTranslations } from "next-intl"
import WaitlistButton from "../ui/waitlist-button"

const FinalCTA = () => {
    const t = useTranslations('finalCta')

    return (
        <section className="py-20 md:py-32 border-t border-border/50 bg-gradient-to-b from-background to-primary/5">
            <Container>
                <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('trustLine')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                        <WaitlistButton wrapperClassName="h-12 px-8">
                            {t('cta')}
                        </WaitlistButton>
                        <Link href="#how-it-works" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8">
                            {t('secondaryCta')}
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FinalCTA