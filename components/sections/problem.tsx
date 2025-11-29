"use client"

import { Container } from "@/components/ui/container"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

import { useTranslations } from "next-intl"

export function Problem() {
    const t = useTranslations('problem')

    const problems = [
        {
            icon: AlertTriangle,
            title: t('card1Title'),
            description: t('card1Desc'),
        },
        {
            icon: Clock,
            title: t('card2Title'),
            description: t('card2Desc'),
        },
        {
            icon: RefreshCw,
            title: t('card3Title'),
            description: t('card3Desc'),
        },
    ]

    return (
        <section className="py-20 md:py-32">
            <Container>
                <div className="mb-12 md:mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        {t('title')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="h-full border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-colors group">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <problem.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{problem.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{problem.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
