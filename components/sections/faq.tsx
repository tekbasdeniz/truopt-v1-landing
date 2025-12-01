"use client"

import { Container } from "@/components/ui/container"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { useState } from "react"

const FAQ = () => {
    const t = useTranslations('faq')
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: t('q1'),
            answer: t('a1'),
        },
        {
            question: t('q2'),
            answer: t('a2'),
        },
        {
            question: t('q3'),
            answer: t('a3'),
        },
        {
            question: t('q4'),
            answer: t('a4'),
        },
    ]

    return (
        <section id="faq" className="py-20 md:py-32">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">{t('title')}</h2>
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