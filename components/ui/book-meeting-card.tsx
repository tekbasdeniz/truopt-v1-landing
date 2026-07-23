"use client"

import React from 'react'
import { Calendar, ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"

export const BookMeetingCard = () => {
    const t = useTranslations('contactForm')

    return (
        <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-b from-card/80 to-card/30 border border-border/50 backdrop-blur-md w-full text-center shadow-xl relative overflow-hidden group">
            {/* Arka plan mor/mavi işıltı efekti */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all pointer-events-none" />

            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 text-primary shrink-0">
                <Calendar className="w-6 h-6" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                {t('bookMeetingTitle')}
            </h3>

            <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md mx-auto leading-relaxed">
                {t('bookMeetingDesc')}
            </p>

            <a
                href={t('calendarUrl')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
                <span>{t('bookMeetingButton')}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
        </div>
    )
}
