import React from 'react'

export const DisclaimerContentEN = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-2">Disclaimer – TruOpt.ai</h1>
            <p className="mb-8 font-medium text-foreground">Last updated: July 2026</p>

            <p className="mb-6">
                The content, software, dashboards, AI engines, reports and automation systems provided through ThumbsAd and TruOpt.ai platforms are provided for general informational and automation assistance purposes only.
            </p>
            <p className="mb-6">
                ThumbsAd – Deniz Tekbaş (“ThumbsAd”, “we”, “us”, “our”) makes no guarantees regarding business performance, advertising results, revenue, conversions, lead generation, ROAS or profitability.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. No Guarantees & No Professional Advice</h2>
            <p className="mb-4">
                TruOpt.ai does not provide financial, legal, marketing or investment advice.
                <br />
                All AI-generated insights, recommendations and automated actions are algorithmic outputs based on historical and real-time signals and do not guarantee outcomes.
            </p>
            <p className="mb-4">You are solely responsible for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Your advertising accounts</li>
                <li>Your budgets and billing</li>
                <li>Compliance with ad platform policies</li>
                <li>Final approval of business decisions</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. AI Automation Liability Disclaimer</h2>
            <p className="mb-4">You acknowledge that:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Automated actions are executed by AI systems</li>
                <li>Campaign performance is affected by external market conditions</li>
                <li>TruOpt.ai is not liable for account suspensions, ad disapprovals, performance drops, lost revenue, or business interruption</li>
            </ul>
            <p className="mb-6">
                Use of TruOpt.ai is at your own risk.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Third-Party Services</h2>
            <p className="mb-4">
                TruOpt.ai integrates with third-party platforms such as Google Ads and analytics providers.
                <br />
                ThumbsAd has no control over their availability, data policies or enforcement actions.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Limitation of Liability</h2>
            <p className="mb-6">
                To the maximum extent permitted by law, ThumbsAd shall not be liable for any direct, indirect, incidental, consequential or punitive damages arising from use of TruOpt.ai or related services.
            </p>

            <div className="border-t border-border pt-8 mt-12">
                <h2 className="text-xl font-semibold text-foreground mb-4">Contact</h2>
                <p className="font-semibold text-foreground mb-1">ThumbsAd – Deniz Tekbaş</p>
                <p className="mb-1">Address: Esentepe Mah. Büyükdere Cad. No: 193 / 2 , 34394 Şişli, İstanbul, Türkiye</p>
                <p className="mb-1">Email: <a href="mailto:info@thumbsad.com" className="text-primary hover:underline">info@thumbsad.com</a></p>
                <p className="mb-4">Phone: <a href="tel:+908503035772" className="text-primary hover:underline">+90 212 955 00 63</a></p>
            </div>
        </div>
    )
}
