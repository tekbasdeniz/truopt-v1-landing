"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Link2, Stethoscope, Lightbulb, Play } from "lucide-react"

import { useTranslations } from "next-intl"

const HowItWorks = () => {
    const t = useTranslations('howItWorks')

    const steps = [
        {
            id: "01",
            icon: Link2,
            title: t('step1Title'),
            description: t('step1Desc'),
        },
        {
            id: "02",
            icon: Stethoscope,
            title: t('step2Title'),
            description: t('step2Desc'),
        },
        {
            id: "03",
            icon: Lightbulb,
            title: t('step3Title'),
            description: t('step3Desc'),
        },
        {
            id: "04",
            icon: Play,
            title: t('step4Title'),
            description: t('step4Desc'),
            badge: t('step4Badge'),
        },
    ]

    return (
        <section id="how-it-works" className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
            {/* Background Line Animation */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden md:block" />

            <Container>
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative group"
                        >
                            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_var(--color-primary)]">
                                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center relative z-10 group-hover:border-primary transition-colors">
                                    <step.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <div className="text-xs font-mono text-primary/50">{step.id}</div>
                                    <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                                        {step.title}
                                        {step.badge && (
                                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                {step.badge}
                                            </span>
                                        )}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default HowItWorks