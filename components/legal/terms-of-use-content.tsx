import React from 'react'
import { TermsOfUseContentEN } from '@/components/legal/en/terms-of-use-content'
import { TermsOfUseContentTR } from '@/components/legal/tr/terms-of-use-content'

interface TermsOfUseContentProps {
    locale: string
}

export const TermsOfUseContent: React.FC<TermsOfUseContentProps> = ({ locale }) => {
    if (locale === 'tr') {
        return <TermsOfUseContentTR />
    }
    return <TermsOfUseContentEN />
}
