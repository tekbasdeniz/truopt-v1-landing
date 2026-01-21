import React from 'react'

export const RefundPolicyContent = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-4">Refund Policy – TruOpt.ai</h1>

            <p className="text-sm mb-8">(A ThumbsAd Product)</p>

            <p className="mb-6">
                <strong>Effective Date:</strong> January 2026
            </p>

            <p className="mb-6">
                TruOpt.ai is sold via Paddle, which acts as the Merchant of Record.
            </p>

            <p className="mb-8">
                All refunds and cancellations are handled exclusively by Paddle and are subject to Paddle's Buyer Terms.
            </p>

            <hr className="border-muted-foreground/20 my-8" />

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Refund Window</h2>
            <p className="mb-4">
                If you are a consumer, you may request a refund within 14 days of your initial purchase by contacting Paddle via paddle.net.
            </p>
            <p className="mb-8">
                This refund right applies only to the first-time purchase of a subscription.
            </p>

            <hr className="border-muted-foreground/20 my-8" />

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Subscription Renewals</h2>
            <p className="mb-8">
                Automatic subscription renewals and unused subscription periods are non-refundable.
            </p>

            <hr className="border-muted-foreground/20 my-8" />

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Annual Subscriptions</h2>
            <p className="mb-4">
                Annual subscriptions are billed upfront.
            </p>
            <p className="mb-8">
                If a refund is requested within the 14-day refund window, access to the service will be revoked.
            </p>

            <hr className="border-muted-foreground/20 my-8" />

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">How to Request a Refund</h2>
            <p className="mb-4">
                All refund and cancellation requests must be submitted directly through Paddle.
            </p>
            <p className="mb-8">
                Please refer to Paddle's Buyer Terms for full details:{' '}
                <a
                    href="https://www.paddle.com/legal/checkout-buyer-terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                    https://www.paddle.com/legal/checkout-buyer-terms
                </a>
            </p>

            <hr className="border-muted-foreground/20 my-8" />

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Legal Entity</h2>
            <p className="mb-4">
                TruOpt.ai is a product of ThumbsAd.
            </p>
            <p className="mb-4">
                All billing, invoicing, tax handling, and refunds are managed by Paddle on behalf of ThumbsAd.
            </p>
        </div>
    )
}
