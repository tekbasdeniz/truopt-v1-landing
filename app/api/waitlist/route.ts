import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()

        const endpoint = process.env.GOOGLE_SHEETS_ENDPOINT

        // 🔴 ENV CHECK
        if (!endpoint) {
            console.error('❌ GOOGLE_SHEETS_ENDPOINT missing')
            return NextResponse.json(
                { success: false, error: 'Endpoint not configured' },
                { status: 500 }
            )
        }

        // 🧠 PAYLOAD (daha kontrollü)
        const payload = {
            type: 'assignment',
            name: data.name,
            email: data.email,
            company: data.company,
            website: data.website,
            adSpend: data.adSpend,
            challenge: data.challenge,
            createdAt: new Date().toISOString(),
        }

        console.log('📤 Sending to Google Sheets:', payload)

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })

        // 🔴 GOOGLE RESPONSE CHECK
        if (!response.ok) {
            const text = await response.text()
            console.error('❌ Google Script Error:', text)

            return NextResponse.json(
                { success: false, error: 'Google Sheets error' },
                { status: 500 }
            )
        }

        const result = await response.json()

        console.log('✅ Google response:', result)

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('❌ Assignment API error:', error)

        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        )
    }
}
