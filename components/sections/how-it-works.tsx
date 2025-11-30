"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Sparkles, Brain, Zap, Rocket } from "lucide-react"
import { useTranslations } from "next-intl"
import WaitlistButton from "../ui/waitlist-button"
import { useEffect, useState } from "react"

const HowItWorks = () => {
    const t = useTranslations('howItWorks')
    const tNav = useTranslations('nav')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const steps = [
        {
            icon: Sparkles,
            title: t('step1Title'),
            description: t('step1Desc'),
            gradient: "from-blue-500/20 to-cyan-500/20",
            iconColor: "text-blue-400",
            glowColor: "shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]",
        },
        {
            icon: Brain,
            title: t('step2Title'),
            description: t('step2Desc'),
            gradient: "from-purple-500/20 to-pink-500/20",
            iconColor: "text-purple-400",
            glowColor: "shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]",
        },
        {
            icon: Zap,
            title: t('step3Title'),
            description: t('step3Desc'),
            gradient: "from-amber-500/20 to-orange-500/20",
            iconColor: "text-amber-400",
            glowColor: "shadow-[0_0_40px_-10px_rgba(251,191,36,0.5)]",
        },
        {
            icon: Rocket,
            title: t('step4Title'),
            description: t('step4Desc'),
            gradient: "from-green-500/20 to-emerald-500/20",
            iconColor: "text-green-400",
            glowColor: "shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)]",
        },
    ]

    // Floating particles for neural network effect
    const particles = mounted ? Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
    })) : []

    return (
        <section id="how-it-works" className="py-32 relative overflow-hidden bg-secondary/20">
            {/* Cleaner Background Effects */}
            <div className="absolute inset-0 -z-10">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Radial Gradient Overlays */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                {/* Soft Corner Glows */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

                {/* Minimal Floating Particles */}
                {mounted && particles.slice(0, 8).map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-primary/20"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.1, 0.4, 0.1],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <Container>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-sm font-medium text-primary">AI-Powered Process</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                        {t('title')}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Connection Flow Lines */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/60"
                            initial={{ scaleX: 0, transformOrigin: "left" }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 0.5 }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative group"
                            >
                                {/* Step Number Badge */}
                                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center z-10">
                                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                                </div>

                                {/* Glassmorphic Card */}
                                <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${step.gradient} backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 ${step.glowColor} hover:scale-105`}>
                                    {/* AI Spark Animation */}
                                    <motion.div
                                        className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary"
                                        animate={{
                                            opacity: [0.3, 1, 0.3],
                                            scale: [1, 1.5, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.3,
                                        }}
                                    />

                                    {/* Icon Container */}
                                    <div className="relative mb-6">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                                        </div>
                                        {/* Icon Glow */}
                                        <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${step.iconColor.replace('text-', 'bg-')}`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Thinking Pulse Indicator */}
                                    <div className="mt-6 flex items-center gap-2">
                                        <div className="flex gap-1">
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className={`w-1.5 h-1.5 rounded-full ${step.iconColor.replace('text-', 'bg-')}`}
                                                    animate={{
                                                        opacity: [0.3, 1, 0.3],
                                                        scale: [1, 1.3, 1],
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        delay: i * 0.2 + index * 0.1,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow Connector (Mobile/Tablet) */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center my-4">
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            whileInView={{ opacity: 0.5, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 + 0.3 }}
                                            className="text-primary/50"
                                        >
                                            ↓
                                        </motion.div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <div className="inline-flex flex-col items-center gap-6 p-8 rounded-3xl bg-card/20 backdrop-blur-2xl border border-primary/20 shadow-xl relative overflow-hidden">
                        {/* Glass Reflection Layer */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl" />

                        {/* Ambient Glow Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />

                        <div className="flex items-center gap-3 relative z-10">
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <Sparkles className="w-6 h-6 text-primary" />
                            </motion.div>
                            <h3 className="text-2xl font-bold">{t('cta-title')}</h3>
                        </div>
                        <WaitlistButton wrapperClassName="!min-w-[240px] !h-14 text-base relative z-10">
                            {tNav('joinWaitlist')}
                        </WaitlistButton>
                        <p className="text-sm text-muted-foreground relative z-10">
                            {t('cta-description')}
                        </p>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export default HowItWorks