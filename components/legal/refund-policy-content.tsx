import React from 'react'

export const RefundPolicyContent = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-8">Refund Policy – TruOpt.ai</h1>

            <p className="mb-6">
                TruOpt.ai is a subscription-based SaaS product operated by ThumbsAd and sold via Paddle, which acts as the Merchant of Record.
                <br />
                By purchasing a TruOpt.ai subscription, you agree to the following refund terms.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Refund Window</h2>
            <p className="mb-4">
                Customers may request a refund within 14 days of the initial purchase date.
            </p>
            <p className="mb-4">
                Refunds are only available for the first-time purchase of a subscription.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Subscription Renewals</h2>
            <p className="mb-4">
                Subscription renewals, recurring charges, and unused subscription periods are non-refundable.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Annual Plans</h2>
            <p className="mb-4">
                Annual subscriptions are billed upfront.
            </p>
            <p className="mb-4">
                If a refund is requested within the 14-day refund window, the subscription will be canceled and access will be revoked.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. How to Request a Refund</h2>
            <p className="mb-4">
                All refund and cancellation requests must be submitted directly through Paddle.
            </p>
            <p className="mb-4">
                Refund requests are handled in accordance with Paddle's Buyer Terms.
            </p>
            <p className="mb-6">
                👉 <a href="https://www.paddle.com/legal/buyers" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.paddle.com/legal/buyers</a>
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Refund Processing</h2>
            <p className="mb-4">
                Approved refunds are processed by Paddle to the original payment method.
            </p>
            <p className="mb-6">
                Processing times may vary depending on the payment provider.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Legal Entity</h2>
            <p className="mb-4">
                TruOpt.ai is a product of ThumbsAd.
            </p>
            <p className="mb-4">
                All billing, invoicing, tax handling, and refunds are managed by Paddle on behalf of ThumbsAd.
            </p>
        </div>
    )
}
