import React from 'react'
import { CopyrightNoticeContentEN } from '@/components/legal/en/copyright-notice-content'
import { CopyrightNoticeContentTR } from '@/components/legal/tr/copyright-notice-content'

interface CopyrightNoticeContentProps {
    locale: string
}

export const CopyrightNoticeContent: React.FC<CopyrightNoticeContentProps> = ({ locale }) => {
    if (locale === 'tr') {
        return <CopyrightNoticeContentTR />
    }
    return <CopyrightNoticeContentEN />
}
