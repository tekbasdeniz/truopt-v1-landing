import { Container } from "@/components/ui/container"
import { Link } from "@/i18n/navigation"

import { useTranslations } from "next-intl"

const Footer = () => {
    const t = useTranslations('footer')

    const footerLinks = [
        {
            title: t('product'),
            links: [
                { name: t('howItWorks'), href: "/#how-it-works" },
                { name: t('agents'), href: "/#agents" },
                { name: t('security'), href: "/#security" },
                { name: t('faq'), href: "/#faq" },
            ],
        },
        // {
        //     title: t('company'),
        //     links: [
        //         { name: t('about'), href: "#" },
        //         { name: t('blog'), href: "#" },
        //         { name: t('careers'), href: "#" },
        //         { name: t('contact'), href: "#" },
        //     ],
        // },
        {
            title: t('legal'),
            links: [
                { name: t('terms'), href: "#" },
                { name: t('privacy'), href: "#" },
                { name: t('cookie'), href: "/cookie-policy" },
                { name: t('subscription'), href: "#" },
                { name: t('refund'), href: "#" },
            ],
        },
    ]

    return (
        <footer className="border-t border-border/50 bg-background pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50">
                                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">TruOpt.ai</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
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

                <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
                    <p>{t('copyright')}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* Social icons could go here */}
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer