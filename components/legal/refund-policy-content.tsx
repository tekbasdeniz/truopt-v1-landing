import React from 'react'

export const RefundPolicyContent = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-8">Refund Policy</h1>

            <p className="mb-6">
                TruOpt.ai is a subscription-based SaaS product operated by ThumbsAd and billed via Paddle.
                <br />
                By subscribing to TruOpt.ai, you agree to the following refund terms:
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Subscription Billing</h2>
            <p className="mb-4">
                All TruOpt.ai subscriptions are billed in advance on a monthly or annual basis and provide immediate access to digital services, AI automation systems, and account-level optimization engines.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Refund Eligibility</h2>
            <p className="mb-4">
                All payments are non-refundable once a billing cycle has started, except in the following limited cases:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Duplicate charges</li>
                <li>Proven billing errors</li>
                <li>Unauthorized transactions confirmed by Paddle</li>
            </ul>
            <p className="mb-6">
                Refund requests meeting these criteria will be reviewed within 7 business days.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Annual Plans & Bonus Seats</h2>
            <p className="mb-4">
                Annual subscriptions include discounted pricing and may include complimentary bonus team seats.
                <br />
                These bonus seats are non-transferable, non-refundable, and void if the subscription is canceled.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Cancellation</h2>
            <p className="mb-4">
                Customers may cancel their subscription at any time.
                <br />
                Cancellation stops future renewals but does not generate a refund for the current billing period, whether monthly or annual.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Managed Budget & Usage Limits</h2>
            <p className="mb-4">
                Each plan includes a defined managed budget ceiling and connected ad account limit.
                <br />
                Refunds will not be issued for exceeding plan usage limits or enforced system restrictions.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Refund Requests</h2>
            <p className="mb-4">
                All refund requests must be submitted to:
                <br />
                📩 <a href="mailto:info@thumbsad.com" className="text-primary hover:underline">info@thumbsad.com</a>
            </p>
            <p className="mb-4">
                Please include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Account email</li>
                <li>Invoice ID</li>
                <li>Reason for request</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Processing</h2>
            <p className="mb-6">
                Approved refunds are processed via Paddle to the original payment method within 5–10 business days.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Legal Entity</h2>
            <p className="mb-4">
                TruOpt.ai is a ThumbsAd product.
                <br />
                All billing, invoicing, tax handling, and refund processing are managed by Paddle on behalf of ThumbsAd.
            </p>
        </div>
    )
}
