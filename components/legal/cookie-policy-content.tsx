import React from 'react'

export const CookiePolicyContent = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-8">Cookie Policy</h1>

            <p className="mb-6">
                This Cookie Policy explains how TruOpt.ai, a digital product developed and operated by ThumbsAd – Deniz Tekbaş (“TruOpt.ai”, “we”, “us”, or “our”), uses cookies and similar technologies when you visit our website at <a href="https://truopt.ai" className="text-primary hover:underline">https://truopt.ai</a> (“Website”). It outlines what these technologies are, why we use them, and how you can control your preferences.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">What Are Cookies?</h2>
            <p className="mb-4">
                Cookies are small text files placed on your device when you access a website. They are commonly used to enable website functionality, enhance performance, and collect analytical insights.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong className="text-foreground">First-party cookies:</strong> Set by TruOpt.ai directly.</li>
                <li><strong className="text-foreground">Third-party cookies:</strong> Set by external services (e.g., analytics, ad networks) that may track user behavior across websites.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Why We Use Cookies</h2>
            <p className="mb-4">We use cookies for several purposes, including:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong className="text-foreground">Necessary Cookies:</strong> To ensure the Website functions properly and securely (e.g., session management, login access).</li>
                <li><strong className="text-foreground">Analytical Cookies:</strong> To gather usage data such as page visits and error tracking. These cookies help us improve the platform but do not personally identify you.</li>
                <li><strong className="text-foreground">Advertising/Marketing Cookies:</strong> To serve relevant ads, limit repetition, and measure the performance of ad campaigns. These may be placed by authorized third-party partners.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Types of Cookies We Use</h2>
            <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-border">
                            <th className="py-3 pr-4 font-semibold text-foreground">Type</th>
                            <th className="py-3 pl-4 font-semibold text-foreground">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-border/50">
                            <td className="py-3 pr-4 align-top font-medium text-foreground">Necessary Cookies</td>
                            <td className="py-3 pl-4 align-top">Essential for core website functionality.</td>
                        </tr>
                        <tr className="border-b border-border/50">
                            <td className="py-3 pr-4 align-top font-medium text-foreground">Analytics Cookies</td>
                            <td className="py-3 pl-4 align-top">Measure traffic and user behavior for service improvement.</td>
                        </tr>
                        <tr className="border-b border-border/50">
                            <td className="py-3 pr-4 align-top font-medium text-foreground">Marketing Cookies</td>
                            <td className="py-3 pl-4 align-top">Personalize content and manage advertising effectiveness.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Managing Cookie Preferences</h2>
            <p className="mb-4">You may choose to accept or reject cookies at any time:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Use the cookie banner or settings panel when you first visit the Website.</li>
                <li>Adjust your browser settings to block or delete cookies.</li>
                <li>Visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a> for detailed instructions on cookie management.</li>
            </ul>
            <p className="mb-6 italic">
                Please note that disabling some cookies may impact the functionality of the Website.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Third-Party Cookies</h2>
            <p className="mb-6">
                TruOpt.ai leverages third-party services (e.g., Google Analytics, Meta Pixel) to improve performance and understand user behavior. These tools do not collect personally identifiable information unless explicitly shared by you.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Policy Updates</h2>
            <p className="mb-6">
                We may update this Cookie Policy from time to time to reflect changes in law, technology, or our operations. Changes will be posted on this page with an updated effective date.
            </p>
            <p className="mb-6 font-medium text-foreground">
                Last updated: June 17, 2025
            </p>

            <div className="border-t border-border pt-8 mt-12">
                <h2 className="text-xl font-semibold text-foreground mb-4">Legal Ownership</h2>
                <p className="mb-2">TruOpt.ai is a digital platform legally owned and operated by:</p>
                <p className="font-semibold text-foreground mb-1">ThumbsAd Sole Proprietorship – Deniz Tekbaş</p>
                <p className="mb-1">Email: <a href="mailto:info@thumbsad.com" className="text-primary hover:underline">info@thumbsad.com</a></p>
                <p className="mb-4">Address: Esentepe Mah. Büyükdere Cad. Loft Residence No: 201, Unit 40, Şişli / İstanbul, Turkey</p>

                <p className="mt-6">
                    For any questions about cookies or data use, feel free to reach out to us.
                </p>
            </div>
        </div>
    )
}
