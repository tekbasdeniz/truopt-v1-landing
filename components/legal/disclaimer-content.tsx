import React from 'react'

export const DisclaimerContent = () => {
    return (
        <div className="prose prose-invert max-w-none text-muted-foreground">
            <h1 className="text-3xl font-bold text-foreground mb-8">Disclaimer</h1>

            <p className="mb-6">
                The content provided on the ThumbsAd.com website and across all affiliated products and services, including TruOpt.ai (“ThumbsAd”, “we”, “us”, or “our”), is for general informational purposes only. This Disclaimer outlines the limitations of our liability and the terms governing the use of our services and products.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. No Guarantees or Warranties</h2>
            <p className="mb-6">
                All materials—such as articles, guides, dashboards, strategic documents, and content shared through TruOpt.ai or ThumbsAd platforms—are provided “as is,” without guarantees of any kind. We do not promise specific outcomes such as performance improvement, increased ROI, or lead generation results. Success depends on a variety of external factors, including user execution, market behavior, and technological changes, all of which are outside our control. Any use of this information is at your sole discretion and risk.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Third-Party Content and Links</h2>
            <p className="mb-6">
                Our website or platforms may contain links to third-party websites, tools, or services that are not owned or managed by ThumbsAd. We are not responsible for the content, functionality, data practices, or terms of any third-party platforms. Your use of those services is subject to their own terms and policies. ThumbsAd disclaims any liability arising from your interaction with or reliance upon such external services or content.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. User Responsibility</h2>
            <p className="mb-4">
                By using ThumbsAd.com or any affiliated services such as TruOpt.ai, you acknowledge and accept that:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>You are solely responsible for evaluating the information provided.</li>
                <li>Implementation and execution of any strategy or recommendation are at your own discretion.</li>
                <li>ThumbsAd is not liable for any direct or indirect consequences arising from the use of our tools, data, or advice.</li>
            </ul>

            <div className="border-t border-border pt-8 mt-12">
                <h2 className="text-xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p className="mb-2">For questions regarding this Disclaimer or to discuss how our services—particularly TruOpt.ai—can support your business, feel free to contact us:</p>
                <p className="font-semibold text-foreground mb-1">Deniz Tekbaş | ThumbsAd Sole Proprietorship</p>
                <p className="mb-1">Email: <a href="mailto:info@thumbsad.com" className="text-primary hover:underline">info@thumbsad.com</a></p>
                <p className="mb-1">Phone (WhatsApp): <a href="https://wa.me/905314081338" className="text-primary hover:underline">+90 531 408 13 38</a></p>
                <p className="mb-4">Address: Esentepe Mah. Büyükdere Cad. Loft Residence No: 201, Unit 40, Şişli/İstanbul, Turkey</p>

                <p className="mt-6 font-medium text-foreground">
                    ThumbsAd is the legal owner and operator of the TruOpt.ai platform.
                </p>
            </div>
        </div>
    )
}
