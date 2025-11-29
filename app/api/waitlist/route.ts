import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()

        // Google Apps Script endpoint
        const endpoint = process.env.GOOGLE_SHEETS_ENDPOINT

        if (!endpoint) {
            return NextResponse.json(
                { success: false, error: 'Endpoint not configured' },
                { status: 500 }
            )
        }

        // Forward request to Google Sheets
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const result = await response.json()

        return NextResponse.json(result)
    } catch (error) {
        console.error('Waitlist API error:', error)
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        )
    }
}
