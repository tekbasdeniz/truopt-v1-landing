import React from 'react'
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { TermsOfUseContent } from "@/components/legal/terms-of-use-content"

import { setRequestLocale } from 'next-intl/server';

export default async function TermsOfUsePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-16">
                <Container>
                    <TermsOfUseContent />
                </Container>
            </main>
            <Footer />
        </div>
    )
}
