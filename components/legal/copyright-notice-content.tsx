import React from 'react'
import { CopyrightNoticeContentEN } from './en/copyright-notice-content'
import { CopyrightNoticeContentTR } from './tr/copyright-notice-content'

interface CopyrightNoticeContentProps {
    locale: string
}

export const CopyrightNoticeContent: React.FC<CopyrightNoticeContentProps> = ({ locale }) => {
    if (locale === 'tr') {
        return <CopyrightNoticeContentTR />
    }
    return <CopyrightNoticeContentEN />
}
