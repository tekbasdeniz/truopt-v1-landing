"use client"

import { Container } from "@/components/ui/container"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Clock, EyeOff, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const Problem = () => {
    const t = useTranslations('problem')

    // 4 Yeni probleme özel anlamlı ikon eşleşmeleri
    const problems = [
        {
            icon: TrendingUp,
            title: t('card1Title'),
            description: t('card1Desc'),
        },
        {
            icon: Users,
            title: t('card2Title'),
            description: t('card2Desc'),
        },
        {
            icon: Clock,
            title: t('card3Title'),
            description: t('card3Desc'),
        },
        {
            icon: EyeOff,
            title: t('card4Title'),
            description: t('card4Desc'),
        },
    ]

    return (
        <section id="problem" className="relative py-20 md:py-32 overflow-hidden">
            {/* Arka plan için çok hafif bir AI Glow eklentisi (Sadece merkeze odaklı) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6b4cff]/5 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                {/* Başlık Alanı */}
                <div className="mb-12 md:mb-20 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
                    >
                        {t('title')}
                    </motion.h2>
                </div>

                {/* 4'lü Grid Düzeni - Hover Glow & Gradient Süslemeleri */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-12">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="h-full"
                        >
                            <Card className="h-full border-border/50 bg-card/30 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(107,76,255,0.2)] hover:border-[#6b4cff]/50 group relative overflow-hidden">
                                {/* Kart içi ince parlama efekti (Üstten inen gradient) */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <CardHeader className="relative z-10">
                                    {/* İkon Arkası Soft Gradient */}
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6b4cff]/10 to-[#8a73ff]/5 border border-[#6b4cff]/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#6b4cff]/40 transition-all duration-300 shadow-[0_0_15px_rgba(107,76,255,0.1)] group-hover:shadow-[0_0_20px_rgba(107,76,255,0.3)]">
                                        <problem.icon className="w-6 h-6 text-[#8a73ff] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-white transition-colors duration-300">{problem.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <p className="text-muted-foreground group-hover:text-white/80 transition-colors duration-300">{problem.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Dikey Enerji Çizgisi (Kartlardan çözüme akan veri) */}
                <div className="flex justify-center mb-8">
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: 60, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="w-px bg-gradient-to-b from-[#6b4cff]/0 via-[#6b4cff]/50 to-[#6b4cff] relative"
                    >
                        {/* Çizgi üzerinde akan küçük nokta */}
                        <motion.div 
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_#6b4cff]"
                            animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                </div>

                {/* Çözüm Vurgu Kutusu - Dinamik Glow ve Animasyon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Arkadaki animasyonlu parlama (Nefes alma efekti) */}
                    <motion.div 
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6b4cff] via-[#8a73ff] to-[#4f5dff] blur-xl opacity-20"
                        animate={{ opacity: [0.15, 0.35, 0.15], scale: [0.98, 1.02, 0.98] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Asıl Kutu */}
                    <div className="relative p-6 md:p-8 rounded-2xl border border-[#6b4cff]/30 bg-black/40 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center gap-6 overflow-hidden">
                        {/* Kutunun üstünden geçen akan parlak lazer efekti */}
                        <motion.div 
                            className="absolute top-0 left-0 w-[200%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
                            animate={{ x: ["-100%", "50%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Yapay Zeka Sihir İkonu (Sparkles) */}
                        <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#6b4cff] to-[#4f5dff] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(107,76,255,0.4)]">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>

                        {/* Metin */}
                        <p className="text-base md:text-lg font-medium text-white/90 leading-relaxed">
                            {t('solution')}
                        </p>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export default Problem
