import { Container } from "@/components/ui/container"
import { CheckCircle2 } from "lucide-react"
import { useTranslations } from "next-intl"

const Credibility = () => {
    const t = useTranslations('credibility')

    return (
        <section className="border-y border-border/50 bg-card/30 backdrop-blur-sm py-4">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-sm text-muted-foreground">
                    {[
                        t('trust1'),
                        t('trust2'),
                        t('trust3'),
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

export default Credibility