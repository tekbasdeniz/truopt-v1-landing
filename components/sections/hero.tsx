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

                {/* Dashboard Preview - Live Metrics & AI Agents */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 relative mx-auto max-w-5xl"
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
                                <span className="text-xs text-muted-foreground ml-4">TruOpt.ai Dashboard</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-muted-foreground">Live</span>
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-6 space-y-6">
                            {/* Key Metrics Row */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {[
                                    { label: "ROAS", value: "+42%", trend: "up", color: "text-green-400" },
                                    { label: "CPA", value: "-28%", trend: "down", color: "text-green-400" },
                                    { label: "Active Audits", value: "12", trend: "neutral", color: "text-primary" },
                                    { label: "Alerts", value: "3", trend: "alert", color: "text-yellow-400" },
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
                                    <h3 className="text-sm font-semibold text-foreground">AI Agents Activity</h3>
                                    <span className="text-xs text-muted-foreground">Last 5 minutes</span>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        {
                                            agent: "Optimization Agent",
                                            action: "Found 3 negative keywords to exclude",
                                            time: "2m ago",
                                            icon: "🎯",
                                        },
                                        {
                                            agent: "Guardian Agent",
                                            action: "CPA spike detected in Campaign A",
                                            time: "4m ago",
                                            icon: "🛡️",
                                        },
                                        {
                                            agent: "Onboarding Agent",
                                            action: "Baseline audit completed",
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
                                    <div className="text-sm font-medium text-foreground mb-1">Recommended Action</div>
                                    <div className="text-xs text-muted-foreground">
                                        Pause 2 underperforming ad groups to save $340/day
                                    </div>
                                </div>
                                <button className="px-3 py-1.5 text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded transition-colors shrink-0">
                                    Review
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
