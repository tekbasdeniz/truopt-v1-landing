"use client"

import { Container } from "@/components/ui/container"
import { ShieldCheck, Lock, FileText, Database } from "lucide-react"

import { useTranslations } from "next-intl"

const Security = () => {
    const t = useTranslations('security')

    const features = [
        {
            icon: ShieldCheck,
            title: t('feature1'),
            description: "No changes are made without explicit user approval.",
        },
        {
            icon: Lock,
            title: t('feature2'),
            description: "Granular permissions for team members and clients.",
        },
        {
            icon: FileText,
            title: t('feature3'),
            description: "Complete history of every recommendation and action.",
        },
        {
            icon: Database,
            title: t('feature4'),
            description: "We only access what’s needed to optimize performance.",
        },
    ]

    return (
        <section id="security" className="py-20 bg-secondary/5 border-y border-border/50">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">{t('title')}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-semibold">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>
            </Container>
        </section>
    )
}

export default Security