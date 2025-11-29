"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCTA() {
    return (
        <section className="py-20 md:py-32 border-t border-border/50 bg-gradient-to-b from-background to-primary/5">
            <Container>
                <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Join the Phase 1 waitlist
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Limited onboarding capacity. We invite teams in small batches to ensure quality support.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                        <Button size="lg" className="h-12 px-8 text-base shadow-[0_0_30px_-10px_var(--color-primary)]">
                            Join Waitlist
                        </Button>
                        <Link href="#how-it-works">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                                See how it works
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}
