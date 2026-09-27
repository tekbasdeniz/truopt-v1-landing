import React from 'react'
import { PrivacyPolicyContentEN } from '@/components/legal/en/privacy-policy-content'
import { PrivacyPolicyContentTR } from '@/components/legal/tr/privacy-policy-content'

interface PrivacyPolicyContentProps {
    locale: string
}

export const PrivacyPolicyContent: React.FC<PrivacyPolicyContentProps> = ({ locale }) => {
    if (locale === 'tr') {
        return <PrivacyPolicyContentTR />
    }
    return <PrivacyPolicyContentEN />
}
