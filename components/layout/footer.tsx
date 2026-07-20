import { Container } from "@/components/ui/container"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import Logo from "@/app/assets/images/logo.webp"

import { useTranslations } from "next-intl"

const Footer = () => {
    const t = useTranslations('footer')

    const footerLinks = [
        {
            title: t('product'),
            links: [
                { name: t('howItWorks'), href: "/#how-it-works" },
                { name: "Pricing", href: "/pricing" },
                { name: t('security'), href: "/#security" },
                { name: t('faq'), href: "/#faq" },
                { name: t('contact'), href: "/contact" },
            ],
        },
        {
            title: t('legal'),
            links: [
                { name: t('termsOfUse'), href: "/terms-of-use" },
                { name: t('privacy'), href: "/privacy-policy" },
                { name: t('cookie'), href: "/cookie-policy" },
                { name: t('copyrightNotice'), href: "/copyright-notice" },
                { name: t('disclaimer'), href: "/disclaimer" },
                { name: t('kvkk'), href: "/kvkk" },
                { name: t('refund'), href: "/refund-policy" },
            ],
        },
    ]

    return (
        <footer className="border-t border-border/50 bg-background pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Boşluğu dengelemek için md:col-span-2 alanını verdik */}
                    <div className="space-y-4 md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src={Logo} alt="TruOpt.ai" width={100} height={100} className="mt-2" />
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-sm">
                            {t('tagline')}
                        </p>
                        <div className="text-sm text-muted-foreground pt-4">
                            <p>{t('brandNote')}</p>
                        </div>
                    </div>

                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="font-semibold mb-4">{column.title}</h3>
                            <ul className="space-y-2">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href as any} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-border/50 pt-8 flex flex-col items-center justify-center text-sm text-muted-foreground text-center">
                    <p>{t('copyright')}</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
