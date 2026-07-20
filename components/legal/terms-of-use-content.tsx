import React from 'react'

export const TermsOfUseContent = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-2">Terms of Use – TruOpt.ai</h1>
            <p className="mb-8 font-medium text-foreground">Last updated: July 2026</p>

            <p className="mb-6">
                Welcome to TruOpt.ai, a subscription-based AI-powered digital platform developed and operated by ThumbsAd – Deniz Tekbaş (“TruOpt.ai”, “we”, “us”, or “our”). By accessing or using <a href="https://truopt.ai" className="text-primary hover:underline">https://truopt.ai</a> (the “Website”) and the TruOpt.ai software platform (the “Service”), you agree to be legally bound by these Terms of Use.
                <br />
                If you do not agree, do not use the Website or the Service.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Intellectual Property & Brand Usage</h2>
            <p className="mb-4">
                All content, software, interfaces, algorithms, AI models, workflows, and platform components are the exclusive intellectual property of ThumbsAd or its licensors.
            </p>
            <p className="mb-4">
                “TruOpt.ai”, logos, product names, system names, and trademarks are protected and may not be used without written permission.
            </p>
            <p className="mb-6">
                No part of the Service may be copied, reverse-engineered, resold, sublicensed, or commercially exploited.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Subscription Service & Billing</h2>
            <p className="mb-4">
                TruOpt.ai is a paid subscription software platform.
                <br />
                All subscriptions, payments, invoicing, tax handling, and refunds are processed by Paddle on behalf of ThumbsAd.
            </p>
            <p className="mb-4">By subscribing, you acknowledge that:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Charges are billed in advance (monthly or annually)</li>
                <li>Access is granted immediately after payment</li>
                <li>Subscription fees are non-refundable except as defined in the Refund Policy</li>
                <li>Usage limits (accounts, seats, managed budget ceilings) are enforced at system level</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. AI Automation Disclaimer & Limitation of Liability</h2>
            <p className="mb-4">
                TruOpt.ai provides automated AI-driven optimization recommendations and actions based on performance signals, budget controls and risk models.
            </p>
            <p className="mb-4">You acknowledge and agree that:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>TruOpt.ai does not guarantee specific advertising results</li>
                <li>All automated actions are based on algorithmic models</li>
                <li>You remain solely responsible for advertising spend, campaigns and compliance with ad platform policies</li>
                <li>TruOpt.ai is not liable for lost profits, business interruption, ad platform penalties, account suspensions or campaign outcomes</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Acceptable Use</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Attempt to bypass system limits</li>
                <li>Share accounts or resell the Service</li>
                <li>Interfere with automation safeguards</li>
                <li>Upload malicious code or perform scraping</li>
                <li>Use TruOpt.ai for unlawful, deceptive or prohibited ad content</li>
            </ul>
            <p className="mb-6">
                Violation may result in immediate suspension.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Data & Privacy</h2>
            <p className="mb-4">
                Use of the Service is subject to our Privacy Policy.
                <br />
                You retain ownership of your advertising data.
                <br />
                We may process anonymized data for AI training and system optimization.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Termination</h2>
            <p className="mb-6">
                We may suspend or terminate access if you violate these Terms, applicable law, or payment obligations.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Governing Law & Jurisdiction</h2>
            <p className="mb-6">
                These Terms are governed by the laws of the Republic of Turkey.
                <br />
                Exclusive jurisdiction: Şişli Courts and Enforcement Offices – İstanbul, Türkiye.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Modifications</h2>
            <p className="mb-6">
                We may update these Terms at any time. Continued use constitutes acceptance.
            </p>

            <div className="border-t border-border pt-8 mt-12">
                <h2 className="text-xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p className="font-semibold text-foreground mb-1">ThumbsAd – Deniz Tekbaş</p>
                <p className="mb-4 mt-2">
                    TruOpt.ai is operated by ThumbsAd.<br />
                    ThumbsAd is a sole proprietorship owned by Deniz Tekbaş and registered in Turkey.
                </p>
                <p className="mb-1">Address: Esentepe Mah. Büyükdere Cad. Loft Residence No: 201 / 40 Şişli, İstanbul, Türkiye</p>
                <p className="mb-1">Email: <a href="mailto:info@thumbsad.com" className="text-primary hover:underline">info@thumbsad.com</a></p>
                <p className="mb-4">Phone: <a href="tel:+908503035772" className="text-primary hover:underline">+90 850 303 57 72</a></p>
            </div>
        </div>
    )
}
