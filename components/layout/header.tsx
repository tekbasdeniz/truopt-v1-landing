"use client"

import { useState, useEffect } from "react"
import { Link } from "@/i18n/navigation"
import { Menu, X } from "lucide-react"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

import { useTranslations } from "next-intl"
import WaitlistButton from "../ui/waitlist-button"
import HowItWorksButton from "../ui/how-it-works-button"

const Header = () => {
    const t = useTranslations('nav')
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: t('product'), href: "/#product" },
        { name: t('waitlist'), href: "/#waitlist" },
        { name: t('howItWorks'), href: "/#how-it-works" },
        { name: t('agents'), href: "/#agents" },
        { name: t('security'), href: "/#security" },
        { name: t('faq'), href: "/#faq" },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-xl"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <Container>
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50">
                            <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">TruOpt.ai</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href as any}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* <LanguageSelector /> */}
                        <Link href={"/#how-it-works" as any} className="text-sm font-medium hover:text-primary transition-colors hover:!text-white">
                            {t('howItWorks')}
                        </Link>
                        <WaitlistButton wrapperClassName="!min-w-0 !h-10">
                            {t('joinWaitlist')}
                        </WaitlistButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center space-x-4 md:hidden">
                        {/* <LanguageSelector /> */}
                        <button
                            className="p-2 text-muted-foreground hover:text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href as any}
                            className="text-base font-medium text-foreground/80 hover:text-primary py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col space-y-3">

                        <HowItWorksButton onClick={() => setIsOpen(false)} />
                        <WaitlistButton wrapperClassName="!w-full sm:w-fit" onClick={() => setIsOpen(false)}>
                            {t('joinWaitlist')}
                        </WaitlistButton>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
