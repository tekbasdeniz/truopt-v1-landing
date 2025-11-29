"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Product", href: "#product" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Agents", href: "#agents" },
    { name: "Waitlist", href: "#waitlist" },
    { name: "Insights", href: "#insights" },
    { name: "Security", href: "#security" },
    { name: "FAQ", href: "#faq" },
]

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

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
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                            How it Works
                        </Link>
                        <Button className="shadow-[0_0_20px_-5px_var(--color-primary)]">Join Waitlist</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-base font-medium text-foreground/80 hover:text-primary py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col space-y-3">
                        <Button variant="outline" className="w-full justify-center" onClick={() => setIsOpen(false)}>
                            How it Works
                        </Button>
                        <Button className="w-full justify-center shadow-[0_0_20px_-5px_var(--color-primary)]" onClick={() => setIsOpen(false)}>
                            Join Waitlist
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
