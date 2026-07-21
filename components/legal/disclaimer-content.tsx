import React from 'react'
import { DisclaimerContentEN } from '@/components/legal/en/disclaimer-content'
import { DisclaimerContentTR } from '@/components/legal/tr/disclaimer-content'

interface DisclaimerContentProps {
    locale: string
}

export const DisclaimerContent: React.FC<DisclaimerContentProps> = ({ locale }) => {
    if (locale === 'tr') {
        return <DisclaimerContentTR />
    }
    return <DisclaimerContentEN />
}
