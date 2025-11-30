"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, ShieldAlert, Zap } from "lucide-react"
import { motion } from "framer-motion"

import { useTranslations } from "next-intl"
import WaitlistButton from "../ui/waitlist-button"

const Hero = () => {
    const t = useTranslations('hero')
    const tDash = useTranslations('dashboard')
    const [mounted, setMounted] = useState(false)
    const particles = useMemo(
        () =>
            Array.from({ length: 20 }, () => ({
                initialX: Math.random() * 1000,
                initialY: Math.random() * 600,
                targetY: Math.random() * 600,
                targetX: Math.random() * 1000,
                scale: Math.random() * 0.5 + 0.5,
                duration: Math.random() * 10 + 10,
                delay: Math.random() * 5,
            })),
        []
    )

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section className="relative pt-32 md:pt-40 overflow-hidden">
            {/* Dark Futuristic AI Control Center Background */}
            <div className="absolute inset-0 -z-10 bg-black">
                {/* Base Gradient Layer - Deep Space */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-background opacity-90" />

                {/* Faint Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b4cff08_1px,transparent_1px),linear-gradient(to_bottom,#6b4cff08_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

                {/* Subtle Circuit Board Patterns - Fading In/Out */}
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#6b4cff05_0%,transparent_50%)]"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,#4f5dff05_0%,transparent_50%)]"
                    animate={{
                        opacity: [0.6, 0.3, 0.6],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4,
                    }}
                />

                {/* Volumetric Light Rays */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#6b4cff] rounded-full blur-[150px] opacity-[0.08] mix-blend-screen" />
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#8a73ff] rounded-full blur-[140px] opacity-[0.06] mix-blend-screen" />
                <div className="absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-[#4f5dff] rounded-full blur-[160px] opacity-[0.07] mix-blend-screen" />

                {/* Floating Neural Network Particles - Medium Count, Slow Motion */}
                {mounted && Array.from({ length: 25 }, (_, i) => {
                    const x = Math.random() * 100;
                    const y = Math.random() * 100;
                    const size = Math.random() * 3 + 1;
                    const duration = Math.random() * 40 + 40; // 40-80s for very slow motion
                    const delay = Math.random() * 8;

                    return (
                        <motion.div
                            key={`particle-${i}`}
                            className="absolute rounded-full"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                width: size,
                                height: size,
                                background: `radial-gradient(circle, ${['#6b4cff', '#8a73ff', '#4f5dff'][i % 3]} 0%, transparent 70%)`,
                                filter: 'blur(1px)',
                            }}
                            animate={{
                                y: [0, -60, 0],
                                x: [0, Math.random() * 30 - 15, 0],
                                opacity: [0.2, 0.6, 0.2],
                                scale: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                delay: delay,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}

                {/* Multi-Agent Communication Nodes - Glowing Orbs */}
                {mounted && Array.from({ length: 8 }, (_, i) => {
                    const positions = [
                        { x: 15, y: 20 }, { x: 85, y: 25 }, { x: 30, y: 60 }, { x: 70, y: 65 },
                        { x: 20, y: 80 }, { x: 80, y: 75 }, { x: 50, y: 40 }, { x: 60, y: 85 }
                    ];
                    const pos = positions[i];

                    return (
                        <motion.div
                            key={`node-${i}`}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                                left: `${pos.x}%`,
                                top: `${pos.y}%`,
                                background: `radial-gradient(circle, #8a73ff 0%, transparent 70%)`,
                                boxShadow: `0 0 20px #8a73ff40`,
                            }}
                            animate={{
                                opacity: [0.4, 1, 0.4],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}

                {/* Holographic Connection Lines Between Nodes */}
                {mounted && (
                    <svg className="absolute inset-0 w-full h-full opacity-20" style={{ mixBlendMode: 'screen' }}>
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#6b4cff" stopOpacity="0" />
                                <stop offset="50%" stopColor="#8a73ff" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#4f5dff" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <motion.line
                            x1="15%" y1="20%" x2="30%" y2="60%"
                            stroke="url(#lineGradient)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.line
                            x1="85%" y1="25%" x2="70%" y2="65%"
                            stroke="url(#lineGradient)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
                            transition={{ duration: 8, repeat: Infinity, delay: 2, ease: "easeInOut" }}
                        />
                        <motion.line
                            x1="50%" y1="40%" x2="60%" y2="85%"
                            stroke="url(#lineGradient)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
                            transition={{ duration: 8, repeat: Infinity, delay: 4, ease: "easeInOut" }}
                        />
                    </svg>
                )}

                {/* Flowing Data Streams - Pulsing Lines */}
                <motion.div
                    className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6b4cff] to-transparent"
                    animate={{
                        opacity: [0, 0.4, 0],
                        scaleX: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8a73ff] to-transparent"
                    animate={{
                        opacity: [0, 0.3, 0],
                        scaleX: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: 4,
                        ease: "easeInOut",
                    }}
                />

                {/* Shimmering Energy Waves Behind Text Area */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-r from-[#6b4cff] via-[#8a73ff] to-[#4f5dff] rounded-full blur-[100px]" />
                </motion.div>

                {/* Cosmic Dust - Soft Bokeh Lights */}
                {mounted && Array.from({ length: 15 }, (_, i) => {
                    const x = Math.random() * 100;
                    const y = Math.random() * 100;
                    const size = Math.random() * 40 + 20;
                    const duration = Math.random() * 30 + 30;
                    const delay = Math.random() * 8;

                    return (
                        <motion.div
                            key={`bokeh-${i}`}
                            className="absolute rounded-full"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                width: size,
                                height: size,
                                background: `radial-gradient(circle, ${['#6b4cff', '#8a73ff', '#4f5dff'][i % 3]}15 0%, transparent 70%)`,
                                filter: 'blur(20px)',
                            }}
                            animate={{
                                opacity: [0.1, 0.3, 0.1],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                delay: delay,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}

                {/* Slow Parallax Movement Layer */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        backgroundImage: 'radial-gradient(circle at 20% 50%, #6b4cff03 0%, transparent 50%), radial-gradient(circle at 80% 50%, #4f5dff03 0%, transparent 50%)',
                        backgroundSize: '200% 200%',
                    }}
                />

                {/* Vignette for Text Safe Zone */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm border-primary/20 bg-primary/10 text-primary">
                            {t('badge')}
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 relative"
                    >
                        <span className="relative inline-block">
                            {t('title')}
                            {/* Subtle Glitch Effect */}
                            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-b from-accent to-primary">
                                {t('title')}
                            </span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
                    >
                        {t('subtitle')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left w-full max-w-3xl"
                    >
                        {[
                            { icon: Zap, text: t('proof1') },
                            { icon: ShieldAlert, text: t('proof2') },
                            { icon: CheckCircle2, text: t('proof3') },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start space-x-3 p-4 bg-card/50 border border-border/50 backdrop-blur-md rounded-full">
                                <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-white/60">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
                    >
                        <WaitlistButton>
                            {t('cta')}
                        </WaitlistButton>
                        <Link
                            href="#how-it-works"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 group"
                        >
                            {t('secondaryCta')}
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-sm text-muted-foreground/60"
                    >
                        {t('trustLine')}
                    </motion.p>
                </div>

                {/* Dashboard Preview - Live Metrics & AI Agents */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 relative mx-auto max-w-5xl"
                    id="product"
                >
                    <div className="relative rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden shadow-2xl">
                        {/* Dashboard Header */}
                        <div className="border-b border-border/50 p-4 flex items-center justify-between bg-secondary/20">
                            <div className="flex items-center space-x-2">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                                <span className="text-xs text-muted-foreground ml-4">{tDash('title')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-muted-foreground">{tDash('live')}</span>
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-6 space-y-6">
                            {/* Key Metrics Row */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {[
                                    { label: tDash('roas'), value: "+42%", trend: "up", color: "text-green-400" },
                                    { label: tDash('cpa'), value: "-28%", trend: "down", color: "text-green-400" },
                                    { label: tDash('activeAudits'), value: "12", trend: "neutral", color: "text-primary" },
                                    { label: tDash('alerts'), value: "3", trend: "alert", color: "text-yellow-400" },
                                ].map((metric, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + i * 0.1 }}
                                        className="bg-background/50 rounded-lg p-4 border border-border/30"
                                    >
                                        <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                                        <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* AI Agents Activity */}
                            <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-semibold text-foreground">{tDash('agentsActivity')}</h3>
                                    <span className="text-xs text-muted-foreground">{tDash('lastMinutes')}</span>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        {
                                            agent: tDash('optimizationAgent'),
                                            action: tDash('action1'),
                                            time: "2m ago",
                                            icon: "🎯",
                                        },
                                        {
                                            agent: tDash('guardianAgent'),
                                            action: tDash('action2'),
                                            time: "4m ago",
                                            icon: "🛡️",
                                        },
                                        {
                                            agent: tDash('onboardingAgent'),
                                            action: tDash('action3'),
                                            time: "5m ago",
                                            icon: "📊",
                                        },
                                    ].map((activity, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.0 + i * 0.15 }}
                                            className="flex items-start space-x-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                                        >
                                            <span className="text-lg shrink-0">{activity.icon}</span>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-xs font-medium text-foreground">{activity.agent}</div>
                                                <div className="text-xs text-muted-foreground truncate">{activity.action}</div>
                                            </div>
                                            <span className="text-xs text-muted-foreground/50 shrink-0">{activity.time}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Action Suggestion */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 }}
                                className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start space-x-3"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <Zap className="w-4 h-4 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-foreground mb-1">{tDash('recommendedAction')}</div>
                                    <div className="text-xs text-muted-foreground">
                                        {tDash('actionDesc')}
                                    </div>
                                </div>
                                <button className="px-3 py-1.5 text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded transition-colors shrink-0">
                                    {tDash('review')}
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section >
    )
}

export default Hero
