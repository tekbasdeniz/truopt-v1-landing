import React from 'react'
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { PricingSection } from "@/components/sections/pricing-section"
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

import type { Metadata } from "next";

const pricingSeo = {
    en: {
        title: "Google Ads Optimization Software Pricing | TruOpt.ai",
        description: "Explore TruOpt.ai pricing for AI-powered Google Ads audits, Guardian alerts, explainable recommendations, and human-approved optimization.",
        url: "https://www.truopt.ai/pricing",
    },
    tr: {
        title: "Google Ads Optimizasyon Yazılımı Fiyatları | TruOpt.ai",
        description: "TruOpt.ai fiyatlandırmasını keşfedin: yapay zekâ destekli Google Ads denetimleri, Guardian uyarıları, açıklanabilir öneriler ve insan onaylı optimizasyon.",
        url: "https://www.truopt.ai/tr/pricing",
    },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const seo = locale === "tr" ? pricingSeo.tr : pricingSeo.en;
    return {
        title: seo.title,
        description: seo.description,
        alternates: {
            canonical: seo.url,
            languages: { en: pricingSeo.en.url, tr: pricingSeo.tr.url, "x-default": pricingSeo.en.url },
        },
        openGraph: {
            title: seo.title,
            description: seo.description,
            url: seo.url,
            siteName: "TruOpt.ai",
            locale: locale === "tr" ? "tr_TR" : "en_US",
            type: "website",
        },
    };
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24">
                <PricingSection />
                {locale === "tr" && (
                    <section className="mx-auto max-w-4xl px-6 pb-12 text-center">
                        <p className="text-muted-foreground mb-3">Google Ads denetim araçlarını karşılaştırıyor musunuz? Ajanslar için denetim, uyarı ve insan onayı iş akışlarını inceleyin.</p>
                        <a href="/blog/google-ads-ai-audit-tools-comparison-agencies-2026/" className="text-accent font-semibold underline underline-offset-4">Google Ads AI denetim araçları karşılaştırması (İngilizce)</a>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    )
}
