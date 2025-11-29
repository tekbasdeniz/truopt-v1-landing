"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, ShieldAlert, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    const [mounted, setMounted] = React.useState(false)
    const particles = React.useMemo(
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

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-50 animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[100px] opacity-30" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                {/* Floating Particles - Only render after mount to avoid hydration mismatch */}
                {mounted &&
                    particles.map((particle, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/30 rounded-full"
                            initial={{
                                x: particle.initialX,
                                y: particle.initialY,
                                scale: particle.scale,
                            }}
                            animate={{
                                y: particle.targetY,
                                x: particle.targetX,
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                ease: "linear",
                                delay: particle.delay,
                            }}
                        />
                    ))}
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm border-primary/20 bg-primary/10 text-primary">
                            Pre-launch • Rolling invites for Phase 1
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 relative"
                    >
                        <span className="relative inline-block">
                            A multi-agent system—built to optimize, protect, and onboard.
                            {/* Subtle Glitch Effect */}
                            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-b from-primary to-accent">
                                A multi-agent system—built to optimize, protect, and onboard.
                            </span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
                    >
                        TruOpt.ai helps performance teams improve Google Ads and Meta Ads with always-on audits, anomaly detection, and approval-based execution—so results become repeatable.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left w-full max-w-3xl"
                    >
                        {[
                            { icon: Zap, text: "Always-on audits that surface waste, quick wins, and structural issues" },
                            { icon: ShieldAlert, text: "Guardian alerts when CPA/ROAS shifts, pacing breaks, or tracking fails" },
                            { icon: CheckCircle2, text: "Approval-based actions (invite-only in Phase 1) with full logs" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start space-x-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                                <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
                    >
                        <Button size="lg" className="h-12 px-8 text-base shadow-[0_0_30px_-10px_var(--color-primary)]">
                            Join Waitlist
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base group">
                            See how it works
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-sm text-muted-foreground/60"
                    >
                        Limited onboarding capacity. We invite teams in small batches to ensure quality support.
                    </motion.p>
                </div>

                {/* Visual Placeholder for "Glowing AI multi-agent network" */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 relative mx-auto max-w-5xl aspect-[16/9] rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Abstract Node Network Visualization (CSS/SVG) */}
                        <div className="relative w-full h-full">
                            {/* Central Node */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_var(--color-primary)]" />

                            {/* Orbiting Nodes */}
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="absolute top-1/2 left-1/2 w-[300px] h-[300px] border border-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2"
                                    style={{ transform: `translate(-50%, -50%) rotate(${i * 60}deg)` }}>
                                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_var(--color-accent)] animate-ping" style={{ animationDuration: '3s', animationDelay: `${i * 0.5}s` }} />
                                </div>
                            ))}

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full opacity-20">
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
                                        <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="1" />
                                        <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M100,200 Q400,100 700,300 T1000,200" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                                <path d="M100,400 Q400,500 700,300 T1000,400" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
                </motion.div>
            </Container>
        </section>
    )
}
