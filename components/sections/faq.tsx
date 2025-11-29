"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "How does the approval system work?",
        answer: "Our agents analyze your accounts and generate recommendations. You receive a notification, review the proposed changes (with predicted impact), and approve or reject them. No changes are made without your explicit consent in Phase 1.",
    },
    {
        question: "What platforms do you support?",
        answer: "Currently, we support Google Ads and Meta Ads. We are actively working on adding support for TikTok Ads and LinkedIn Ads in future phases.",
    },
    {
        question: "Is my data secure?",
        answer: "Yes. We use industry-standard encryption and adhere to strict data privacy protocols. We only access the data necessary for optimization and never share your data with third parties.",
    },
    {
        question: "How do I get access?",
        answer: "We are currently in a closed beta (Phase 1) with rolling invites. Join the waitlist to be notified when a spot opens up for your team.",
    },
]

export function FAQ() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null)

    return (
        <section id="faq" className="py-20 md:py-32">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Frequently asked questions</h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border border-border/50 rounded-lg bg-card/30 backdrop-blur-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-medium">{faq.question}</span>
                                {openIndex === i ? (
                                    <Minus className="w-5 h-5 text-primary shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground border-t border-border/50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
