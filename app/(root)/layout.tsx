import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Toaster } from 'sonner';

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TruOpt.ai | AI Ad Optimization Waitlist",
    description: "Join the TruOpt.ai waitlist—an approval-based multi-agent system for Google Ads and Meta Ads optimization.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = 'en';
    const messages = await getMessages({ locale });

    return (
        <html lang={locale} className="dark">
            <body
                className={`${outfit.variable} antialiased bg-background text-foreground`}
            >
                <NextIntlClientProvider messages={messages} locale={locale}>
                    {children}
                    <Toaster position="top-center" richColors />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
