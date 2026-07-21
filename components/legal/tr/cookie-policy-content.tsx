import React from 'react'
import { CookiePolicyContentEN } from './en/cookie-policy-content'
import { CookiePolicyContentTR } from './tr/cookie-policy-content'

interface CookiePolicyContentProps {
    locale: string
}

export const CookiePolicyContent: React.FC<CookiePolicyContentProps> = ({ locale }) => {
    if (locale === 'tr') {
        return <CookiePolicyContentTR />
    }
    return <CookiePolicyContentEN />
}
