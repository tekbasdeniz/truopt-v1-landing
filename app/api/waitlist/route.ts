import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()

        // Google Apps Script endpoint
        const endpoint = 'https://script.google.com/macros/s/AKfycbzQnFaiMsr-d4VK-zlKaFNJfTmmyeJwIjgAmRvzdRBItIQj1B679j0F7KYa2cwMi_-R/exec'

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
