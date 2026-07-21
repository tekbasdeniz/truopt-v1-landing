"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import { Check, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTransition } from "react"

const languages = [
    { code: "en", label: "English" },
    { code: "tr", label: "Türkçe" },
]

const LanguageSelector = () => {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()

    const handleLanguageChange = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale })
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className="h-9 px-3 rounded-full bg-secondary/50 hover:bg-secondary/80 border-border/60 text-foreground/90 hover:text-foreground backdrop-blur-sm transition-all flex items-center space-x-1.5 shadow-sm"
                    disabled={isPending}
                >
                    <Globe className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                        {locale}
                    </span>
                    <ChevronDown className="h-3 w-3 opacity-50 shrink-0" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-md border-border/80 shadow-xl rounded-xl min-w-[120px]">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="cursor-pointer text-xs font-medium py-2 focus:bg-primary/10 focus:text-primary rounded-lg my-0.5"
                        disabled={isPending}
                    >
                        <span className="flex-1">{lang.label}</span>
                        {locale === lang.code && <Check className="ml-2 h-3.5 w-3.5 text-primary" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LanguageSelector
