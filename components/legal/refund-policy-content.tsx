import React from 'react'
import { RefundPolicyContentEN } from '@/components/legal/en/refund-policy-content'
import { RefundPolicyContentTR } from '@/components/legal/tr/refund-policy-content'

interface RefundPolicyContentProps {
    locale: string
}

export const RefundPolicyContent: React.FC<RefundPolicyContentProps> = ({ locale }) => {
    if (locale === 'tr') {
        return <RefundPolicyContentTR />
    }
    return <RefundPolicyContentEN />
}
