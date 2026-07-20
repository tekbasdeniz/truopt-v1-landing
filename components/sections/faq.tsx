"use client"

import { Container } from "@/components/ui/container"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    // Herkesin rahatça anlayabileceği şekilde sadeleştirilmiş soru ve cevaplar
    const faqs = [
        {
            question: "How does the AI improve my ads?",
            answer: "Our AI constantly scans your Google Ads to find hidden mistakes or new ways to get more sales. It shows you clear suggestions, and you can apply them instantly with just one click.",
        },
        {
            question: "Is my Google Ads data safe?",
            answer: "Yes, 100%. We connect securely using standard Google verification. Your data is protected inside safe Google Cloud servers and we never share or use it to train public models.",
        },
        {
            question: "Can I undo a change if I change my mind?",
            answer: "Absolutely. Every single optimization you apply is saved in your history panel, meaning you can easily reverse any action and go back to your previous settings at any time.",
        },
        {
            question: "Do I need to be a marketing expert to use this?",
            answer: "Not at all! We designed everything to be as simple as possible. The language is clean and the steps are clear, so anyone can grow their business without technical confusion.",
        },
    ]

    return (
        <section id="faq" className="py-20 md:py-32">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
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

export default FAQ
