"use client"

import * as React from "react"
import { Check, X, CreditCard, Calendar, FileText, Ban } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

export function PricingSection() {
    const [isAnnual, setIsAnnual] = React.useState(true)

    const plans = [
        {
            name: "Basic",
            price: { monthly: 29, annual: 278 },
            description: "Essential tools for small teams.",
            features: [
                { name: "Google Ads Accounts", value: "Up to 3" },
                { name: "Managed Ad Spend", value: "Up to $5,000 / mo" },
                { name: "AI Campaign Optimization", value: true },
                { name: "Smart Recommendations & Alerts", value: true },
                { name: "Auto-Executed Optimization Actions", value: false },
                { name: "Neural Decision Logs (AI Transparency)", value: false },
                { name: "Change History & Audit Logs", value: true },
                { name: "Team Roles & Permissions", value: false },
                { name: "Priority / Dedicated Support", value: "Email" },
                { name: "SLA, Custom Policies, API Access", value: false },
            ],
            cta: "Get Started",
            href: "https://buy.paddle.com/product/basic", // Placeholder
            popular: false,
        },
        {
            name: "Pro",
            price: { monthly: 69, annual: 662 },
            description: "Advanced AI for growing agencies.",
            features: [
                { name: "Google Ads Accounts", value: "Up to 10" },
                { name: "Managed Ad Spend", value: "Up to $25,000 / mo" },
                { name: "AI Campaign Optimization", value: true },
                { name: "Smart Recommendations & Alerts", value: true },
                { name: "Auto-Executed Optimization Actions", value: true },
                { name: "Neural Decision Logs (AI Transparency)", value: true },
                { name: "Change History & Audit Logs", value: true },
                { name: "Team Roles & Permissions", value: "✓ (Up to 3 users)" },
                { name: "Priority / Dedicated Support", value: "Priority" },
                { name: "SLA, Custom Policies, API Access", value: false },
            ],
            cta: "Get Started",
            href: "https://buy.paddle.com/product/pro", // Placeholder
            popular: true,
            badge: "Best Value",
        },
        {
            name: "Enterprise",
            price: { monthly: "Custom", annual: "Custom" },
            description: "Full control for large scale operations.",
            features: [
                { name: "Google Ads Accounts", value: "Unlimited" },
                { name: "Managed Ad Spend", value: "Unlimited" },
                { name: "AI Campaign Optimization", value: true },
                { name: "Smart Recommendations & Alerts", value: true },
                { name: "Auto-Executed Optimization Actions", value: true },
                { name: "Neural Decision Logs (AI Transparency)", value: true },
                { name: "Change History & Audit Logs", value: true },
                { name: "Team Roles & Permissions", value: "✓ (Unlimited)" },
                { name: "Priority / Dedicated Support", value: "Dedicated Manager" },
                { name: "SLA, Custom Policies, API Access", value: true },
            ],
            cta: "Contact Sales",
            href: "mailto:info@thumbsad.com",
            popular: false,
        },
    ]

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl opacity-50" />
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Pricing</h2>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Phase-1: Google Ads AI Growth <span className="text-primary">Architecture™</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        TruOpt.ai Phase-1 provides AI-powered automation, risk-controlled scaling and decision-level transparency exclusively for Google Ads.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex items-center space-x-4">
                            <span className={cn("text-sm font-medium transition-colors", !isAnnual ? "text-foreground" : "text-muted-foreground")}>
                                Monthly
                            </span>
                            <Switch
                                checked={isAnnual}
                                onCheckedChange={setIsAnnual}
                                aria-label="Toggle annual billing"
                            />
                            <span className={cn("text-sm font-medium transition-colors", isAnnual ? "text-foreground" : "text-muted-foreground")}>
                                Annual
                            </span>
                        </div>

                        <div className="h-8">
                            <AnimatePresence>
                                {isAnnual && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-200">
                                            Save 20% + 2 Bonus Seats
                                        </Badge>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "relative rounded-2xl border bg-card p-8 shadow-sm flex flex-col transition-all duration-200 hover:shadow-md",
                                plan.popular ? "border-primary shadow-lg scale-105 z-10" : "border-border"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm shadow-sm">
                                        {plan.badge}
                                    </Badge>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold">{plan.name}</h3>
                                <p className="text-sm text-muted-foreground mt-2 min-h-[40px]">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold">
                                        {typeof plan.price.monthly === "string"
                                            ? plan.price.monthly
                                            : `$${isAnnual ? Math.round((plan.price.annual as number) / 12) : plan.price.monthly}`}
                                    </span>
                                    {typeof plan.price.monthly !== "string" && (
                                        <span className="text-muted-foreground ml-2">/ month</span>
                                    )}
                                </div>
                                {isAnnual && typeof plan.price.annual === "number" && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Billed ${plan.price.annual} yearly
                                    </p>
                                )}
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="flex items-start text-sm">
                                        {feature.value === false ? (
                                            <X className="h-4 w-4 text-muted-foreground/50 mr-3 mt-0.5 shrink-0" />
                                        ) : (
                                            <Check className="h-4 w-4 text-primary mr-3 mt-0.5 shrink-0" />
                                        )}
                                        <span className={cn(feature.value === false ? "text-muted-foreground/50" : "text-foreground")}>
                                            <span className="font-medium">{feature.name}</span>
                                            {typeof feature.value === "string" && (
                                                <span className="block text-xs text-muted-foreground mt-0.5">
                                                    {feature.value}
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={plan.href}
                                className={cn(
                                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer h-10 px-4 py-2 w-full",
                                    plan.popular
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_var(--color-primary)]"
                                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                )}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-20 max-w-5xl mx-auto border-t border-border pt-16">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Billing Terms</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-border transition-colors flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-foreground">Flexible Billing</p>
                            <p className="text-xs text-muted-foreground mt-1">Billed monthly or annually in advance</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-border transition-colors flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <Ban className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-foreground">Cancel Anytime</p>
                            <p className="text-xs text-muted-foreground mt-1">Future renewals stop immediately</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-border transition-colors flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <FileText className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-foreground">Global Tax Handling</p>
                            <p className="text-xs text-muted-foreground mt-1">VAT and tax handled automatically via Paddle</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-border transition-colors flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-foreground">Refund Policy</p>
                            <p className="text-xs text-muted-foreground mt-1">No refunds for active billing periods</p>
                        </div>
                    </div>
                    <p className="mt-12 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
                        TruOpt.ai is a ThumbsAd product. All subscriptions are sold and invoiced by ThumbsAd via Paddle.
                    </p>
                </div>
            </Container>
        </section>
    )
}
