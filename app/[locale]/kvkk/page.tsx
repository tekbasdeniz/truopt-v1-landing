import React from 'react'
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { KvkkContent } from "@/components/legal/kvkk-content"

import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function KvkkPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-16">
                <Container>
                    <KvkkContent />
                </Container>
            </main>
            <Footer />
        </div>
    )
}
