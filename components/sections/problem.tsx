"use client"

import { Container } from "@/components/ui/container"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Clock, EyeOff, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const Problem = () => {
    const t = useTranslations('problem')

    // 4 Yeni probleme özel anlamlı ikon eşleşmeleri
    const problems = [
        {
            icon: TrendingUp,
            title: t('card1Title'),
            description: t('card1Desc'),
        },
        {
            icon: Users,
            title: t('card2Title'),
            description: t('card2Desc'),
        },
        {
            icon: Clock,
            title: t('card3Title'),
            description: t('card3Desc'),
        },
        {
            icon: EyeOff,
            title: t('card4Title'),
            description: t('card4Desc'),
        },
    ]

    return (
        <section id="problem" className="py-20 md:py-32">
            <Container>
                {/* Başlık Alanı */}
                <div className="mb-12 md:mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        {t('title')}
                    </h2>
                </div>

                {/* 4'lü Grid Düzeni */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
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

                {/* Çözüm Vurgu Kutusu */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="p-6 md:p-8 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                        <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-base md:text-lg font-medium text-foreground leading-relaxed">
                        {t('solution')}
                    </p>
                </motion.div>
            </Container>
        </section>
    )
}

export default Problem
