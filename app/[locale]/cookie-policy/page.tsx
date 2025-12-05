import React from 'react'
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { CookiePolicyContent } from "@/components/legal/cookie-policy-content"

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-16">
                <Container>
                    <CookiePolicyContent />
                </Container>
            </main>
            <Footer />
        </div>
    )
}
