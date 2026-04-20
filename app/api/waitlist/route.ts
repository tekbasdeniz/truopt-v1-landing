import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()

        const endpoint = process.env.GOOGLE_SHEETS_ENDPOINT // ✅ FIX

        if (!endpoint) {
            console.error('NO ENDPOINT')
            return NextResponse.json({ success: false }, { status: 500 })
        }

        const payload = {
            type: 'assignment',
            ...data,
            createdAt: new Date().toISOString(),
        }

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })

        if (!response.ok) {
            console.error('GOOGLE ERROR')
            return NextResponse.json({ success: false }, { status: 500 })
        }

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('API ERROR', error)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
