import React from 'react'

export const KvkkContent = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-2">KVKK / GDPR Privacy Notice – TruOpt.ai</h1>
            <p className="mb-8 font-medium text-foreground">Last Updated: July 2026</p>

            <p className="mb-6">
                This Privacy Notice has been prepared by ThumbsAd – Deniz Tekbaş (“Data Controller”) in accordance with the Turkish Personal Data Protection Law No. 6698 (“KVKK”) and the EU General Data Protection Regulation (“GDPR”) to inform you about the processing of your personal data on ThumbsAd.com and TruOpt.ai platforms.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Personal Data We Process</h2>
            <p className="mb-4">The following categories of personal data may be processed:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Identity and contact information (name, surname, email, phone number)</li>
                <li>Account, subscription and billing information</li>
                <li>Payment and invoice data (processed via Paddle)</li>
                <li>IP address, logs and transaction records</li>
                <li>Device, browser and traffic data</li>
                <li>Advertising, campaign and platform usage data</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Purposes of Processing</h2>
            <p className="mb-4">Your personal data are processed for:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Providing access to TruOpt.ai platform and services</li>
                <li>Managing subscriptions, billing and customer relationships</li>
                <li>Operating AI automation and optimization services</li>
                <li>Fulfilling legal obligations</li>
                <li>Ensuring system security and audit logs</li>
                <li>Improving products and services</li>
                <li>Sending marketing communications (with explicit consent)</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Legal Bases</h2>
            <p className="mb-4">Personal data are processed based on:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Performance of a contract</li>
                <li>Legal obligations</li>
                <li>Explicit consent</li>
                <li>Legitimate interests of the Data Controller</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Transfer of Personal Data</h2>
            <p className="mb-4">Your personal data may be transferred to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Paddle (payment and billing services)</li>
                <li>Cloud hosting and infrastructure providers</li>
                <li>Email, CRM and customer support providers</li>
                <li>Authorized public institutions and authorities</li>
            </ul>
            <p className="mb-6">
                Your data may be transferred abroad in accordance with GDPR and KVKK.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Your Rights</h2>
            <p className="mb-4">Under KVKK Article 11 and GDPR Articles 12–22, you have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Learn whether your data are processed</li>
                <li>Request access to your data</li>
                <li>Request correction, deletion or restriction</li>
                <li>Object to automated decision-making</li>
                <li>Request compensation for damages</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Exercising Your Rights</h2>
            <p className="mb-4">
                You may submit your requests by:
                <br />
                Email: <a href="mailto:info@thumbsad.com" className="text-primary hover:underline">info@thumbsad.com</a>
                <br />
                or in writing to the address below.
            </p>

            <div className="border-t border-border pt-8 mt-12">
                <h2 className="text-xl font-semibold text-foreground mb-4">Data Controller Contact</h2>
                <p className="font-semibold text-foreground mb-1">ThumbsAd – Deniz Tekbaş</p>
                <p className="mb-1">Address: Esentepe Mah. Büyükdere Cad. Loft Residence No: 201 / 40 Şişli, İstanbul, Türkiye</p>
                <p className="mb-1">Email: <a href="mailto:info@thumbsad.com" className="text-primary hover:underline">info@thumbsad.com</a></p>
                <p className="mb-4">Phone: <a href="tel:+908503035772" className="text-primary hover:underline">+90 850 303 57 72</a></p>
            </div>
        </div>
    )
}
