import React from 'react'
import { KvkkContentEN } from '@/components/legal/en/kvkk-content'
import { KvkkContentTR } from '@/components/legal/tr/kvkk-content'

interface KvkkContentProps {
    locale: string
}

export const KvkkContent: React.FC<KvkkContentProps> = ({ locale }) => {
    if (locale === 'tr') {
        return <KvkkContentTR />
    }
    return <KvkkContentEN />
}
