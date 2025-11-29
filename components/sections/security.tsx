"use client"

import { Container } from "@/components/ui/container"
import { ShieldCheck, Lock, FileText, Database } from "lucide-react"

const features = [
    {
        icon: ShieldCheck,
        title: "Approval-first workflows",
        description: "No changes are made without explicit user approval.",
    },
    {
        icon: Lock,
        title: "Role-based access",
        description: "Granular permissions for team members and clients.",
    },
    {
        icon: FileText,
        title: "Audit logs",
        description: "Complete history of every recommendation and action.",
    },
    {
        icon: Database,
        title: "Data minimization",
        description: "We only access what’s needed to optimize performance.",
    },
]

export function Security() {
    return (
        <section id="security" className="py-20 bg-secondary/5 border-y border-border/50">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Automation you can actually trust.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-semibold">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-muted-foreground">
                        Full security documentation available on request.
                    </p>
                </div>
            </Container>
        </section>
    )
}
