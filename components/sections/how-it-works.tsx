"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Link2, Stethoscope, Lightbulb, Play } from "lucide-react"

const steps = [
    {
        id: "01",
        icon: Link2,
        title: "Connect",
        description: "Connect Google Ads and Meta Ads in minutes.",
    },
    {
        id: "02",
        icon: Stethoscope,
        title: "Diagnose",
        description: "Health score + structural risks across pacing, targeting, conversions, and tracking.",
    },
    {
        id: "03",
        icon: Lightbulb,
        title: "Recommend",
        description: "Ranked recommendations with rationale and expected impact.",
    },
    {
        id: "04",
        icon: Play,
        title: "Apply",
        description: "Approval-based actions via API + audit logs.",
        badge: "Invite-only",
    },
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden">
            {/* Background Line Animation */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden md:block" />

            <Container>
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        From signals → decisions → actions (with guardrails).
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        You stay in control—nothing changes without approval.
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
