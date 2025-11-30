"use client"

import { Container } from "@/components/ui/container"
import { ShieldCheck, Lock, FileText, Database } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const Security = () => {
    const t = useTranslations('security')

    const features = [
        {
            icon: ShieldCheck,
            title: t('feature1'),
            description: t('feature1Desc'),
            gradient: "from-blue-500/20 to-cyan-500/20",
            glowColor: "rgba(59, 130, 246, 0.3)",
            iconColor: "text-blue-400",
        },
        {
            icon: Lock,
            title: t('feature2'),
            description: t('feature2Desc'),
            gradient: "from-purple-500/20 to-pink-500/20",
            glowColor: "rgba(168, 85, 247, 0.3)",
            iconColor: "text-purple-400",
        },
        {
            icon: FileText,
            title: t('feature3'),
            description: t('feature3Desc'),
            gradient: "from-amber-500/20 to-orange-500/20",
            glowColor: "rgba(251, 191, 36, 0.3)",
            iconColor: "text-amber-400",
        },
        {
            icon: Database,
            title: t('feature4'),
            description: t('feature4Desc'),
            gradient: "from-green-500/20 to-emerald-500/20",
            glowColor: "rgba(34, 197, 94, 0.3)",
            iconColor: "text-green-400",
        },
    ]

    return (
        <section id="security" className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
            {/* Subtle Background Effects */}
            <div className="absolute inset-0 -z-10">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Corner Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-xl">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary tracking-wider">ENTERPRISE SECURITY</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 tracking-tight">
                        {t('title')}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Gradient Glow Border Effect */}
                            <div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                                style={{ boxShadow: `0 0 40px ${feature.glowColor}` }}
                            />

                            {/* Glassmorphic Card */}
                            <div className="relative h-full p-6 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/30 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02]">
                                {/* Holographic Shine */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                {/* AI Pulse Indicator */}
                                <motion.div
                                    className="absolute top-4 right-4 w-2 h-2 rounded-full"
                                    style={{ backgroundColor: feature.glowColor }}
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

                                {/* Content */}
                                <div className="relative flex flex-col items-center text-center space-y-4">
                                    {/* Icon Container */}
                                    <div className="relative">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                                        </div>
                                        {/* Icon Glow */}
                                        <div
                                            className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                                            style={{ backgroundColor: feature.glowColor }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Active Indicator */}
                                    <div className="flex items-center gap-2 opacity-60 pt-2">
                                        <div className="flex gap-1">
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className={`w-1 h-1 rounded-full ${feature.iconColor.replace('text-', 'bg-')}`}
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
                                        <span className="text-xs text-muted-foreground/60">Protected</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Security