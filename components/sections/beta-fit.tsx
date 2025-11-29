"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Users, LayoutGrid, TrendingUp } from "lucide-react"

import { useTranslations } from "next-intl"
import WaitlistButton from "../ui/waitlist-button"

export function BetaFit() {
    const t = useTranslations('betaFit')

    const audiences = [
        {
            icon: Users,
            title: t('audience1'),
        },
        {
            icon: LayoutGrid,
            title: t('audience2'),
        },
        {
            icon: TrendingUp,
            title: t('audience3'),
        },
    ]

    return (
        <section className="py-20 md:py-32 bg-secondary/10">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            {t('title')}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            {t('description')}
                        </p>
                        <div className="pt-4">
                            <WaitlistButton>
                                {t('cta')}
                            </WaitlistButton>
                            <p className="text-xs text-muted-foreground mt-2">
                                Rolling invites. Small batch onboarding.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/2 grid gap-4">
                        {audiences.map((item, i) => (
                            <Card key={i} className="border-border/50 bg-card/50 backdrop-blur-sm">
                                <CardContent className="p-6 flex items-center space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="font-medium">{item.title}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
