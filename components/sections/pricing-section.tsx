"use client"

import * as React from "react"
import { Check, X, CreditCard, Calendar, FileText, Ban } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"

const PADDLE_CLIENT_TOKEN = "live_d07dab1f3b6546c32d933219e53"

const PADDLE_PRICE_IDS = {
    basicMonthly: "pri_01kq4t5x0nasj98ec0nywatnh1",
    basicAnnual: "pri_01kq4t7539pjd2st493ygcfhcb",
    proMonthly: "pri_01kq4t34nn9dmy4gctmjnevtzw",
    proAnnual: "pri_01kq4sydd48v6dm3sksk3hkn5e",
}

interface PriceData {
    rawTotal: number
    rawSubtotal: number
    currencyCode: string
}

export function PricingSection() {
    const t = useTranslations('pricing')
    const locale = useLocale()
    const [isAnnual, setIsAnnual] = React.useState(true)

    const [paddlePrices, setPaddlePrices] = React.useState<Record<string, PriceData>>({})
    const [, setLoadingPrices] = React.useState(true)

    React.useEffect(() => {
        if (typeof window === "undefined" || !window.Paddle) {
            setLoadingPrices(false)
            return
        }

        try {
            window.Paddle.Initialize({
                token: PADDLE_CLIENT_TOKEN,
                environment: "production",
            })
        } catch (e) {
            console.log("Paddle init note:", e)
        }

        const fetchPrices = async () => {
            if (!window.Paddle) return

            setLoadingPrices(true)
            try {
                const countryCode = locale === "tr" ? "TR" : "US"

                const result = await window.Paddle.PricePreview({
                    items: [
                        { priceId: PADDLE_PRICE_IDS.basicMonthly, quantity: 1 },
                        { priceId: PADDLE_PRICE_IDS.basicAnnual, quantity: 1 },
                        { priceId: PADDLE_PRICE_IDS.proMonthly, quantity: 1 },
                        { priceId: PADDLE_PRICE_IDS.proAnnual, quantity: 1 },
                    ],
                    address: {
                        countryCode: countryCode,
                    },
                })

                if (result?.data?.details?.lineItems) {
                    const fetchedPrices: Record<string, PriceData> = {}
                    
                    result.data.details.lineItems.forEach((item: any) => {
                        const priceId = item.price.id
                        const total = Number(item.totals?.total || item.unitPrice?.amount || 0)
                        const subtotal = Number(item.totals?.subtotal || item.unitPrice?.amount || 0)
                        const currency = item.unitPrice?.currencyCode || (locale === "tr" ? "TRY" : "USD")

                        fetchedPrices[priceId] = {
                            rawTotal: total,
                            rawSubtotal: subtotal,
                            currencyCode: currency,
                        }
                    })
                    
                    setPaddlePrices(fetchedPrices)
                }
            } catch (err: any) {
                console.warn("Paddle PricePreview hatası:", err)
            } finally {
                setLoadingPrices(false)
            }
        }

        fetchPrices()
    }, [locale])

    const handleCheckout = (priceId: string) => {
        if (!priceId) return

        if (typeof window !== "undefined" && window.Paddle?.Checkout) {
            window.Paddle.Checkout.open({
                items: [{ priceId: priceId, quantity: 1 }],
                settings: {
                    displayMode: "overlay",
                    theme: "dark",
                    locale: locale === "tr" ? "tr" : "en",
                }
            })
        } else {
            window.location.href = "https://app.truopt.ai"
        }
    }

    const plans = [
        {
            name: t('plans.basic.name'),
            isCustom: false,
            monthlyPriceId: PADDLE_PRICE_IDS.basicMonthly,
            annualPriceId: PADDLE_PRICE_IDS.basicAnnual,
            usdPrice: 29,
            fallbackMonthly: locale === "tr" ? "₺990" : "$29",
            fallbackAnnual: locale === "tr" ? "₺790" : "$24",
            description: t('plans.basic.description'),
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
            popular: false,
        },
        {
            name: t('plans.pro.name'),
            isCustom: false,
            monthlyPriceId: PADDLE_PRICE_IDS.proMonthly,
            annualPriceId: PADDLE_PRICE_IDS.proAnnual,
            usdPrice: 69,
            fallbackMonthly: locale === "tr" ? "₺2.350" : "$69",
            fallbackAnnual: locale === "tr" ? "₺1.875" : "$57",
            description: t('plans.pro.description'),
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
            popular: true,
            badge: t('bestValue'),
        },
        {
            name: t('plans.enterprise.name'),
            isCustom: true,
            monthlyPriceId: undefined as string | undefined,
            annualPriceId: undefined as string | undefined,
            usdPrice: undefined as number | undefined,
            fallbackMonthly: "",
            fallbackAnnual: "",
            description: t('plans.enterprise.description'),
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
            href: "mailto:info@thumbsad.com?subject=Enterprise%20Paketi%20Hakkında%20Toplantı%20Talebi",
            popular: false,
        },
    ]

    const getFormattedPriceInfo = (
        priceData: PriceData | undefined, 
        fallbackPrice: string, 
        isAnnualPlan: boolean, 
        usdPrice?: number
    ) => {
        const isTr = locale === "tr"

        if (!priceData || !priceData.rawTotal) {
            return {
                formattedPrice: fallbackPrice,
                taxNote: isTr ? `(${usdPrice || 29}$ + tax)` : "(+ tax)",
            }
        }

        const baseRawAmount = isTr ? priceData.rawTotal : priceData.rawSubtotal
        const monthlyAmount = isAnnualPlan ? (baseRawAmount / 12) : baseRawAmount

        const formattedPrice = new Intl.NumberFormat(isTr ? "tr-TR" : "en-US", {
            style: "currency",
            currency: priceData.currencyCode,
            maximumFractionDigits: 0,
        }).format(monthlyAmount / 100)

        const taxNote = isTr ? `(${usdPrice || 29}$ + tax)` : "(+ tax)"

        return { formattedPrice, taxNote }
    }

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
                        {plans.map((plan, index) => {
                            const activePriceId = isAnnual ? plan.annualPriceId : plan.monthlyPriceId
                            const paddlePriceData = activePriceId ? paddlePrices[activePriceId] : undefined
                            const fallbackPrice = isAnnual ? plan.fallbackAnnual : plan.fallbackMonthly

                            const { formattedPrice, taxNote } = getFormattedPriceInfo(
                                paddlePriceData,
                                fallbackPrice || "",
                                isAnnual,
                                plan.usdPrice
                            )

                            return (
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

                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                                        <p className="text-sm text-muted-foreground mt-2 min-h-[40px]">{plan.description}</p>
                                    </div>

                                    {/* Fiyat ve Alt Satırındaki Vergi Notu Kurgusu */}
                                    <div className="mb-8 min-h-[90px] flex flex-col justify-end">
                                        {plan.isCustom ? (
                                            <div className="text-4xl font-bold">{t('customPrice')}</div>
                                        ) : (
                                            <div className="flex flex-col items-start gap-1">
                                                <div className="flex items-baseline gap-1.5">
                                                    <span className="text-4xl font-bold">
                                                        {formattedPrice}
                                                    </span>
                                                    <span className="text-muted-foreground text-sm font-medium">
                                                        /{locale === "tr" ? "ay" : "mo"}
                                                    </span>
                                                </div>
                                                <span className="text-xs font-medium text-muted-foreground">
                                                    {taxNote}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex-1 space-y-4 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start text-sm">
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

                                    {plan.isCustom ? (
                                        <a
                                            href={plan.href}
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full"
                                        >
                                            {plan.cta}
                                        </a>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                if (activePriceId) {
                                                    handleCheckout(activePriceId)
                                                }
                                            }}
                                            className={cn(
                                                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors cursor-pointer h-10 px-4 py-2 w-full",
                                                plan.popular
                                                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_var(--color-primary)]"
                                                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                            )}
                                        >
                                            {plan.cta}
                                        </button>
                                    )}
                                </motion.div>
                            )
                        })}
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