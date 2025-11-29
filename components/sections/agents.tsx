"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Shield, Zap, Rocket, LayoutDashboard } from "lucide-react"
import { motion } from "framer-motion"

const agents = [
    {
        icon: Zap,
        title: "Optimization Agent",
        subtitle: "Basic",
        description: "Spot leaks and prioritize fixes with always-on audits & ranked recs.",
    },
    {
        icon: Shield,
        title: "Guardian Agent",
        subtitle: "Security",
        description: "Catch anomalies before they get expensive (CPA spikes, ROAS drops, pacing risk).",
    },
    {
        icon: Rocket,
        title: "Optimization Agent",
        subtitle: "Premium Actions",
        description: "Move from recommendations to applied changes—with approvals and logging.",
        highlight: true,
    },
    {
        icon: LayoutDashboard,
        title: "Onboarding Agent",
        subtitle: "Setup",
        description: "Start clean with a baseline score, quick wins, and a week-one plan.",
    },
]

export function Agents() {
    return (
        <section id="agents" className="py-20 md:py-32">
            <Container>
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        A multi-agent system—designed in four core modules.
                    </h2>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground font-mono mt-6">
                        <span>Basic finds</span>
                        <span className="text-primary">→</span>
                        <span>Guardian validates</span>
                        <span className="text-primary">→</span>
                        <span>Premium executes</span>
                        <span className="text-primary">→</span>
                        <span>Onboarding standardizes</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {agents.map((agent, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className={`h-full border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${agent.highlight ? 'border-primary/50 shadow-[0_0_30px_-10px_var(--color-primary)]' : 'hover:border-primary/30'}`}>
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${agent.highlight ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                                            <agent.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{agent.subtitle}</span>
                                    </div>
                                    <CardTitle className="text-lg">{agent.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{agent.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Button size="lg" className="shadow-[0_0_20px_-5px_var(--color-primary)]">
                        Join Waitlist
                    </Button>
                </div>
            </Container>
        </section>
    )
}
