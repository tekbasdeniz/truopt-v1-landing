"use client"

import { Container } from "@/components/ui/container"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Shield, Zap, Rocket, LayoutDashboard } from "lucide-react"
import { motion } from "framer-motion"

import { useTranslations } from "next-intl"
import WaitlistButton from "../ui/waitlist-button"
import { useEffect, useState } from "react"

const Agents = () => {
    const t = useTranslations('agents')
    const tNav = useTranslations('nav')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const agents = [
        {
            icon: Shield,
            title: t('guardian.title'),
            description: t('guardian.description'),
            features: [t('guardian.feature1'), t('guardian.feature2'), t('guardian.feature3')],
            gradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
            glowColor: "rgba(59, 130, 246, 0.3)",
            iconColor: "text-blue-400",
            borderGlow: "shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]",
        },
        {
            icon: Zap,
            title: t('optimization.title'),
            description: t('optimization.description'),
            features: [t('optimization.feature1'), t('optimization.feature2'), t('optimization.feature3')],
            gradient: "from-purple-500/10 via-pink-500/10 to-purple-500/10",
            glowColor: "rgba(168, 85, 247, 0.3)",
            iconColor: "text-purple-400",
            borderGlow: "shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]",
            isPremium: true,
        },
        {
            icon: Rocket,
            title: t('scaling.title'),
            description: t('scaling.description'),
            features: [t('scaling.feature1'), t('scaling.feature2'), t('scaling.feature3')],
            gradient: "from-amber-500/10 via-orange-500/10 to-amber-500/10",
            glowColor: "rgba(251, 191, 36, 0.3)",
            iconColor: "text-amber-400",
            borderGlow: "shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)]",
        },
        {
            icon: LayoutDashboard,
            title: t('onboarding.title'),
            description: t('onboarding.description'),
            features: [t('onboarding.feature1'), t('onboarding.feature2'), t('onboarding.feature3')],
            gradient: "from-green-500/10 via-emerald-500/10 to-green-500/10",
            glowColor: "rgba(34, 197, 94, 0.3)",
            iconColor: "text-green-400",
            borderGlow: "shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]",
        },
    ]

    // Ambient particles for AI atmosphere
    const particles = mounted ? Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 25 + 20,
        delay: Math.random() * 5,
    })) : []

    return (
        <section id="agents" className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
            {/* AI Neural Network Background */}
            <div className="absolute inset-0 -z-10">
                {/* Mesh Gradient Waves */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Flowing AI Particles */}
                {mounted && particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-primary/20"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                            filter: 'blur(1px)',
                        }}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.1, 0.5, 0.1],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Corner Ambient Glows */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
            </div>

            <Container>
                {/* Section Header - AI Module Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 mb-6 backdrop-blur-xl">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-2 h-2 rounded-full bg-primary"
                        />
                        <span className="text-sm font-medium text-primary tracking-wider">AI AGENTS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 tracking-tight">
                        {t('title')}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* Agent Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Premium Badge for Optimization Agent */}
                            {agent.isPremium && (
                                <div className="absolute -top-3 -right-3 z-20">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.05, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                        className="px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-bold text-white shadow-lg"
                                    >
                                        PREMIUM
                                    </motion.div>
                                </div>
                            )}

                            {/* Neon Glow Border Effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                                style={{ boxShadow: `0 0 60px ${agent.glowColor}` }}
                            />

                            {/* Glassmorphic Card */}
                            <Card className={`relative h-full border-border/30 bg-card/40 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 ${agent.borderGlow} hover:scale-[1.02] overflow-hidden`}>
                                {/* Holographic Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* AI Pulse Corner */}
                                <motion.div
                                    className="absolute top-4 right-4 w-2 h-2 rounded-full"
                                    style={{ backgroundColor: agent.glowColor }}
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

                                <CardHeader className="space-y-4 pb-4">
                                    {/* Icon Container with Neon Glow */}
                                    <div className="relative w-fit">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                            <agent.icon className={`w-8 h-8 ${agent.iconColor}`} />
                                        </div>
                                        {/* Icon Glow */}
                                        <div
                                            className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                                            style={{ backgroundColor: agent.glowColor }}
                                        />
                                    </div>

                                    {/* Title & Description */}
                                    <div>
                                        <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors tracking-tight">
                                            {agent.title}
                                        </CardTitle>
                                        <CardDescription className="text-base leading-relaxed">
                                            {agent.description}
                                        </CardDescription>
                                    </div>
                                </CardHeader>

                                <CardContent>
                                    {/* Feature List */}
                                    <ul className="space-y-3">
                                        {agent.features.map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 + i * 0.05 }}
                                                className="flex items-start gap-3 text-sm text-muted-foreground group/item"
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full ${agent.iconColor.replace('text-', 'bg-')} mt-1.5 flex-shrink-0 group-hover/item:scale-150 transition-transform`} />
                                                <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* AI Processing Indicator */}
                                    <div className="mt-6 flex items-center gap-2 opacity-60">
                                        <div className="flex gap-1">
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className={`w-1 h-1 rounded-full ${agent.iconColor.replace('text-', 'bg-')}`}
                                                    animate={{
                                                        opacity: [0.3, 1, 0.3],
                                                        scale: [1, 1.4, 1],
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        delay: i * 0.2 + index * 0.1,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-muted-foreground/60">Active</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section with AI Energy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <div className="relative">
                        {/* Button Ambient Glow */}
                        <motion.div
                            className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <WaitlistButton wrapperClassName="relative z-10">
                            {tNav('joinWaitlist')}
                        </WaitlistButton>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export default Agents