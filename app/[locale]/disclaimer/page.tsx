import React from 'react'
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { DisclaimerContent } from "@/components/legal/disclaimer-content"

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-16">
                <Container>
                    <DisclaimerContent />
                </Container>
            </main>
            <Footer />
        </div>
    )
}
