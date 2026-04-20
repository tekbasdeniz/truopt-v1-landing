import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()
        const endpoint = process.env.GOOGLE_SHEETS_ENDPOINT_2

        if (!endpoint) {
            return NextResponse.json({ success: false }, { status: 500 })
        }

        const payload = {
            type: 'assignment',
            ...data,
            createdAt: new Date().toISOString(),
        }

        await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })

        return NextResponse.json({ success: true })

    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
