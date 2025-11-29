"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const articles = [
    {
        title: "Google Ads Optimization Checklist: 21 High-Impact Fixes (2025)",
        category: "Guide",
    },
    {
        title: "Meta Ads ROAS Optimization: Guardrails That Prevent Budget Waste",
        category: "Strategy",
    },
    {
        title: "Approval-Based Automation: Why Teams Trust Human-in-the-Loop Systems",
        category: "Thought Leadership",
    },
]

export function Insights() {
    return (
        <section id="insights" className="py-20 md:py-32">
            <Container>
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Insights</h2>
                    <Link href="/blog" className="text-sm font-medium text-primary hover:underline flex items-center">
                        View all articles <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((article, i) => (
                        <Link key={i} href="#" className="group">
                            <Card className="h-full border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                                <CardHeader>
                                    <div className="text-xs font-mono text-primary mb-2">{article.category}</div>
                                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                        {article.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex items-center">
                                        Read more <ArrowRight className="ml-1 w-3 h-3" />
                                    </span>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    )
}
