import React from 'react'

export const RefundPolicyContentEN = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-2">Refund and Cancellation Policy – TruOpt.ai</h1>
            <p className="mb-8 font-medium text-foreground">Last updated: 15 October 2026</p>

            <p className="mb-6 leading-relaxed">
                TruOpt.ai is a subscription service developed by ThumbsAd – Deniz Tekbaş. Paddle may act as Merchant of Record for payment and order processing.
            </p>

            <div className="space-y-4 mb-8 text-foreground/90">
                <p>
                    <strong className="text-foreground">1. Subscriptions:</strong> Fees are charged in advance for the selected monthly or annual billing period.
                </p>
                <p>
                    <strong className="text-foreground">2. Cancellation:</strong> You may cancel at any time. Cancellation takes effect at the end of the current billing period and prevents future renewals.
                </p>
                <p>
                    <strong className="text-foreground">3. Refunds and withdrawal rights:</strong> Requests are assessed under Paddle’s Buyer Terms and applicable mandatory consumer laws. Statutory withdrawal and other consumer rights remain unaffected. Access to or commencement of digital services may affect withdrawal rights where permitted by law; any applicable conditions must be disclosed at checkout.
                </p>
                <p>
                    <strong className="text-foreground">4. Requests:</strong> Follow the instructions in your purchase confirmation email or contact Paddle support at{' '}
                    <a
                        href="https://paddle.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        https://paddle.net
                    </a>.
                </p>
                <p>
                    <strong className="text-foreground">5. Reference:</strong>{' '}
                    <a
                        href="https://www.paddle.com/legal/checkout-buyer-terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                    >
                        https://www.paddle.com/legal/checkout-buyer-terms
                    </a>
                </p>
            </div>

            <div className="pt-4 border-t border-border">
                <p className="text-sm">Contact: info@thumbsad.com</p>
            </div>
        </div>
    )
}