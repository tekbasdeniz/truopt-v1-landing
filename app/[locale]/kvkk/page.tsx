import React from 'react'
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { KvkkContent } from "@/components/legal/kvkk-content"

export default function KvkkPage() {
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
