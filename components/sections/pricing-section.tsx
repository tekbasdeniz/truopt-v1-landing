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
            price: { monthly: 23, annual: 220 }, // Fiyat $23 olarak güncellendi (Yıllık %20 indirimle ~220)
            description: "Essential tools for small teams.",
            bonusSeats: false, // Bonus koltuk ibaresi kaldırıldı
            features: [
                { name: "Google Ads Account Capacity", value: "Up to 3 Accounts" },
                { name: "AI-Powered Optimization Engine", value: true },
                { name: "Smart Recommendation & Health Score", value: true },
                { name: "Budget Protection & Performance Diagnostics", value: true },
                { name: "Rule-Based Automation & Alerts", value: false },
                { name: "Data-Secured AI Logs (Transparency)", value: false },
                { name: "Advanced Team & Role Management", value: false },
                { name: "Customer Support Level", value: "Email Support" },
                { name: "Enterprise Scaling (SLA & API)", value: false },
            ],
            cta: "Get Started",
            href: "https://app.truopt.ai",
            popular: false,
        },
        {
            name: "Pro",
            price: { monthly: 55, annual: 528 }, // Fiyat $55 olarak güncellendi (Yıllık %20 indirimle 528)
            description: "Advanced AI designed for growing agencies and brands.",
            bonusSeats: false, // Bonus koltuk ibaresi kaldırıldı
            features: [
                { name: "Google Ads Account Capacity", value: "Up to 10 Accounts" },
                { name: "AI-Powered Optimization Engine", value: true },
                { name: "Smart Recommendation & Health Score", value: true },
                { name: "Budget Protection & Performance Diagnostics", value: true },
                { name: "Rule-Based Automation & Alerts", value: true },
                { name: "Data-Secured AI Logs (Transparency)", value: true },
                { name: "Advanced Team & Role Management", value: "Up to 3 Users" },
                { name: "Customer Support Level", value: "Priority Support" },
                { name: "Enterprise Scaling (SLA & API)", value: false },
            ],
            cta: "Get Started",
            href: "https://app.truopt.ai",
            popular: true,
            badge: "Best Value",
        },
        {
            name: "Enterprise",
            price: { monthly: "Custom", annual: "Custom" },
            description: "Full control for large scale operations.",
            bonusSeats: false, // Bonus koltuk ibaresi kaldırıldı
            features: [
                { name: "Google Ads Account Capacity", value: "Unlimited" },
                { name: "AI-Powered Optimization Engine", value: true },
                { name: "Smart Recommendation & Health Score", value: true },
                { name: "Budget Protection & Performance Diagnostics", value: true },
                { name: "Rule-Based Automation & Alerts", value: true },
                { name: "Data-Secured AI Logs (Transparency)", value: true },
                { name: "Advanced Team & Role Management", value: "Unlimited" },
                { name: "Customer Support Level", value: "Dedicated Account Manager" },
                { name: "Enterprise Scaling (SLA & API)", value: true },
            ],
            cta: "Contact Sales",
            href: "mailto:info@thumbsad.com?subject=Enterprise%20Paketi%20Hakkında%20Toplantı%20Talebi&body=Merhaba%2C%0D%0A%0D%0AEnterprise%20paketi%20ile%20ilgileniyorum%20ve%20detaylı%20bilgi%20almak%20için%20bir%20toplantı%20talep%20ediyorum.%0D%0A%0D%0ATeşekkürler.",
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
                                        {/* Üstteki yeşil badge alanından "+ 2 Bonus Seats" kaldırıldı */}
                                        <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-200">
                                            Save 20%
                                        </Badge>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={isAnnual ? "annual-pricing" : "monthly-pricing"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    >
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
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
                                    {/* Kartların içindeki "+2 bonus seats included" yazısı tamamen temizlendi */}
                                    <p className="text-sm text-muted-foreground mt-2 min-h-[40px]">{plan.description}</p>
                                    <AnimatePresence mode="wait">
                                        {isAnnual && typeof plan.price.annual === "number" && (
                                            <motion.p
                                                key="billed-yearly"
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 5 }}
                                                transition={{ duration: 0.2 }}
                                                className="text-xs text-muted-foreground/60 mt-1"
                                            >
                                                Billed ${plan.price.annual} yearly
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="mb-8 h-[60px] flex items-end">
                                    <div className="flex items-baseline overflow-hidden">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={isAnnual ? "annual" : "monthly"}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.2 }}
                                                className="text-4xl font-bold block"
                                            >
                                                {typeof plan.price.monthly === "string"
                                                    ? plan.price.monthly
                                                    : `$${isAnnual ? Math.round((plan.price.annual as number) / 12) : plan.price.monthly}`}
                                            </motion.span>
                                        </AnimatePresence>
                                        {typeof plan.price.monthly !== "string" && (
                                            <span className="text-muted-foreground ml-2">/ month</span>
                                        )}
                                    </div>
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
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

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
