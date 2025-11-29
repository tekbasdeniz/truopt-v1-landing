"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid work email." }),
    company: z.string().min(2, { message: "Company name is required." }),
    spend: z.string().min(1, { message: "Please select your monthly ad spend." }),
    platforms: z.array(z.string()).min(1, { message: "Please select at least one platform." }),
    role: z.string().min(1, { message: "Please select your role." }),
})

type FormValues = z.infer<typeof formSchema>

export function WaitlistForm() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            company: "",
            spend: "",
            platforms: [],
            role: "",
        },
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log(data)
        setIsSubmitting(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <section id="waitlist" className="py-20 bg-background/50">
                <Container>
                    <Card className="max-w-md mx-auto border-primary/50 bg-primary/5 backdrop-blur-xl shadow-[0_0_50px_-20px_var(--color-primary)]">
                        <CardContent className="pt-6 text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                <Check className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">You’re on the list.</h3>
                            <p className="text-muted-foreground">
                                We’ll reach out when your invite is ready.
                            </p>
                        </CardContent>
                    </Card>
                </Container>
            </section>
        )
    }

    return (
        <section id="waitlist" className="py-20 relative">
            <Container>
                <div className="max-w-xl mx-auto">
                    <Card className="border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                        <CardHeader>
                            <CardTitle className="text-2xl text-center">Get early access to Phase 1</CardTitle>
                            <CardDescription className="text-center">
                                Join the waitlist for approval-based AI optimization.
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Work Email <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        className={cn(
                                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                            form.formState.errors.email && "border-destructive focus-visible:ring-destructive"
                                        )}
                                        {...form.register("email")}
                                    />
                                    {form.formState.errors.email && (
                                        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium leading-none">
                                        Company <span className="text-destructive">*</span>
                                    </label>
                                    <input
                                        id="company"
                                        type="text"
                                        placeholder="Acme Inc."
                                        className={cn(
                                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                            form.formState.errors.company && "border-destructive focus-visible:ring-destructive"
                                        )}
                                        {...form.register("company")}
                                    />
                                    {form.formState.errors.company && (
                                        <p className="text-sm text-destructive">{form.formState.errors.company.message}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="spend" className="text-sm font-medium leading-none">
                                            Monthly Ad Spend <span className="text-destructive">*</span>
                                        </label>
                                        <select
                                            id="spend"
                                            className={cn(
                                                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                                form.formState.errors.spend && "border-destructive focus-visible:ring-destructive"
                                            )}
                                            {...form.register("spend")}
                                        >
                                            <option value="" disabled>Select range</option>
                                            <option value="<$5k">&lt;$5k</option>
                                            <option value="$5–25k">$5–25k</option>
                                            <option value="$25–100k">$25–100k</option>
                                            <option value="$100k+">$100k+</option>
                                        </select>
                                        {form.formState.errors.spend && (
                                            <p className="text-sm text-destructive">{form.formState.errors.spend.message}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="role" className="text-sm font-medium leading-none">
                                            Role <span className="text-destructive">*</span>
                                        </label>
                                        <select
                                            id="role"
                                            className={cn(
                                                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                                form.formState.errors.role && "border-destructive focus-visible:ring-destructive"
                                            )}
                                            {...form.register("role")}
                                        >
                                            <option value="" disabled>Select role</option>
                                            <option value="Founder">Founder</option>
                                            <option value="Performance Marketer">Performance Marketer</option>
                                            <option value="Agency">Agency</option>
                                            <option value="Growth">Growth</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {form.formState.errors.role && (
                                            <p className="text-sm text-destructive">{form.formState.errors.role.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none">
                                        Platforms <span className="text-destructive">*</span>
                                    </label>
                                    <div className="flex space-x-4">
                                        {["Google Ads", "Meta Ads"].map((platform) => (
                                            <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    value={platform}
                                                    className="w-4 h-4 rounded border-input bg-background text-primary focus:ring-primary"
                                                    {...form.register("platforms")}
                                                />
                                                <span className="text-sm text-muted-foreground">{platform}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {form.formState.errors.platforms && (
                                        <p className="text-sm text-destructive">{form.formState.errors.platforms.message}</p>
                                    )}
                                </div>

                                <Button type="submit" className="w-full shadow-[0_0_20px_-5px_var(--color-primary)]" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Joining...
                                        </>
                                    ) : (
                                        "Join Waitlist"
                                    )}
                                </Button>
                                <p className="text-xs text-center text-muted-foreground">
                                    No spam. We’ll email you when your invite is ready.
                                </p>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </section>
    )
}
