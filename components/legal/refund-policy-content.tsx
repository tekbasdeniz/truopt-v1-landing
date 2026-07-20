import React from 'react'

export const RefundPolicyContent = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-4">Refund Policy – TruOpt.ai</h1>

            <p className="text-sm mb-8">(A ThumbsAd Product)</p>

            <p className="mb-6">
                <strong>Last Updated:</strong> July 2026
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Merchant of Record</h2>
            <p className="mb-4">
                Merchant of Record Our order process is conducted by our online reseller
                <a
                    href="https://www.paddle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                    paddle.com
                </a>.
                <a
                    href="https://www.paddle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                    paddle.com
                </a> is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.

            </p>

            <hr className="border-muted-foreground/20 my-8" />

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Refunds</h2>
            <p className="mb-4">
                Refunds Refunds are processed in accordance with Paddle’s Buyer Terms. As a consumer, you have the right to request a refund within 14 days of your purchase, subject to applicable local laws and Paddle's policies.
            </p>
            <p className="mb-8">
                We do not impose additional restrictions or qualifiers on refunds beyond what is outlined in Paddle’s terms.
            </p>

            <hr className="border-muted-foreground/20 my-8" />

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">How to Request a Refund</h2>
            <p className="mb-4">
                Since Paddle is the merchant of record, all refund and cancellation requests must be submitted directly through them. You can contact Paddle via  <a
                    href="https://www.paddle.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                    paddle.net
                </a> or follow the instructions in your purchase confirmation email.
            </p>
            <p className="mb-8">
                For full details on the refund policy that applies to your purchase, please refer to Paddle’s Buyer Terms:{' '}
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

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Cancellation</h2>
            <p className="mb-4">
                You may cancel your subscription at any time. Cancellation will take effect at the end of the current billing period.
            </p>
        </div>
    )
}
