"use client"

import * as React from "react"
import { Check, X, CreditCard, Calendar, FileText, Ban } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"

export function PricingSection() {
    const t = useTranslations('pricing')
    const [isAnnual, setIsAnnual] = React.useState(true)

    const plans = [
        {
            name: t('plans.basic.name'),
            price: { monthly: 29, annual: 276 },
            description: t('plans.basic.description'),
            bonusSeats: false,
            features: [
                { name: t('features.accountCapacity'), value: t('features.upTo3Accounts') },
                { name: t('features.aiOptimizationEngine'), value: true },
                { name: t('features.smartRecommendation'), value: true },
                { name: t('features.budgetProtection'), value: true },
                { name: t('features.ruleBasedAutomation'), value: false },
                { name: t('features.dataSecuredLogs'), value: false },
                { name: t('features.teamManagement'), value: false },
                { name: t('features.supportLevel'), value: t('features.emailSupport') },
                { name: t('features.enterpriseScaling'), value: false },
            ],
            cta: t('getStarted'),
            href: "https://app.truopt.ai",
            popular: false,
        },
        {
            name: t('plans.pro.name'),
            price: { monthly: 69, annual: 660 },
            description: t('plans.pro.description'),
            bonusSeats: false,
            features: [
                { name: t('features.accountCapacity'), value: t('features.upTo10Accounts') },
                { name: t('features.aiOptimizationEngine'), value: true },
                { name: t('features.smartRecommendation'), value: true },
                { name: t('features.budgetProtection'), value: true },
                { name: t('features.ruleBasedAutomation'), value: true },
                { name: t('features.dataSecuredLogs'), value: true },
                { name: t('features.teamManagement'), value: t('features.upTo3Users') },
                { name: t('features.supportLevel'), value: t('features.prioritySupport') },
                { name: t('features.enterpriseScaling'), value: false },
            ],
            cta: t('getStarted'),
            href: "https://app.truopt.ai",
            popular: true,
            badge: t('bestValue'),
        },
        {
            name: t('plans.enterprise.name'),
            price: { monthly: t('customPrice'), annual: t('customPrice') },
            description: t('plans.enterprise.description'),
            bonusSeats: false,
            features: [
                { name: t('features.accountCapacity'), value: t('features.unlimited') },
                { name: t('features.aiOptimizationEngine'), value: true },
                { name: t('features.smartRecommendation'), value: true },
                { name: t('features.budgetProtection'), value: true },
                { name: t('features.ruleBasedAutomation'), value: true },
                { name: t('features.dataSecuredLogs'), value: true },
                { name: t('features.teamManagement'), value: t('features.unlimited') },
                { name: t('features.supportLevel'), value: t('features.dedicatedManager') },
                { name: t('features.enterpriseScaling'), value: true },
            ],
            cta: t('contactSales'),
            href: "mailto:info@thumbsad.com?subject=Enterprise%20Paketi%20Hakkında%20Toplantı%20Talebi&body=Merhaba%2C%0D%0A%0D%0AEnterprise%20paketi%20ile%20ilgileniyorum%20ve%20detaylı%20bilgi%20almak%20için%20bir%20toplantı%20talep%20ediyorum.%0D%0A%0D%0ATeşekkürler.",
            popular: false,
        },
    ]

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl opacity-50" />
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">{t('badge')}</h2>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        {t('titleMain')}<span className="text-primary">{t('titleHighlight')}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        {t('subtitle')}
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex items-center space-x-4">
                            <span className={cn("text-sm font-medium transition-colors", !isAnnual ? "text-foreground" : "text-muted-foreground")}>
                                {t('monthly')}
                            </span>
                            <Switch
                                checked={isAnnual}
                                onCheckedChange={setIsAnnual}
                                aria-label="Toggle annual billing"
                            />
                            <span className={cn("text-sm font-medium transition-colors", isAnnual ? "text-foreground" : "text-muted-foreground")}>
                                {t('annual')}
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
                                            {t('save20')}
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
                                                {t('billedYearlyPrefix')}{plan.price.annual}{t('billedYearlySuffix')}
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
                                            <span className="text-muted-foreground ml-2">{t('perMonth')}</span>
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
                    <h3 className="text-2xl font-semibold mb-8 text-center">{t('billingTerms.title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-border transition-colors flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-foreground">{t('billingTerms.flexibleTitle')}</p>
                            <p className="text-xs text-muted-foreground mt-1">{t('billingTerms.flexibleDesc')}</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-border transition-colors flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <Ban className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-foreground">{t('billingTerms.cancelTitle')}</p>
                            <p className="text-xs text-muted-foreground mt-1">{t('billingTerms.cancelDesc')}</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-border transition-colors flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <FileText className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-foreground">{t('billingTerms.taxTitle')}</p>
                            <p className="text-xs text-muted-foreground mt-1">{t('billingTerms.taxDesc')}</p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-border transition-colors flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-foreground">{t('billingTerms.refundTitle')}</p>
                            <p className="text-xs text-muted-foreground mt-1">{t('billingTerms.refundDesc')}</p>
                        </div>
                    </div>
                    <p className="mt-12 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
                        {t('billingTerms.legalNote')}
                    </p>
                </div>
            </Container>
        </section>
    )
}
