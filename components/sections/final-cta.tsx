"use client"

import { Container } from "@/components/ui/container"

import { useTranslations } from "next-intl"
import WaitlistButton from "../ui/waitlist-button"
import HowItWorksButton from "../ui/how-it-works-button"

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
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <WaitlistButton wrapperClassName="h-12 px-8">
                            {t('cta')}
                        </WaitlistButton>
                        <HowItWorksButton />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FinalCTA