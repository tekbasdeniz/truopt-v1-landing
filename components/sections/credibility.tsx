import { Container } from "@/components/ui/container"
import { CheckCircle2 } from "lucide-react"

export function Credibility() {
    return (
        <section className="border-y border-border/50 bg-card/30 backdrop-blur-sm py-4">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-sm text-muted-foreground">
                    {[
                        "Built with performance marketers",
                        "Designed for multi-account teams",
                        "Audit-ready by design",
                    ].map((text, i) => (
                        <div key={i} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-primary/70" />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
