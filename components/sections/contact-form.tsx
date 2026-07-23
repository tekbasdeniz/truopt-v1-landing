"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Mail, User, MessageSquare, Calendar, ArrowUpRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";

const getContactSchema = (t: any) =>
  z.object({
    name: z
      .string({ message: t("errors.nameRequired") })
      .min(1, { message: t("errors.nameRequired") })
      .min(2, { message: t("errors.nameMin") }),
    email: z
      .string({ message: t("errors.emailRequired") })
      .min(1, { message: t("errors.emailRequired") })
      .pipe(z.email({ message: t("errors.emailInvalid") })),
    subject: z
      .string({ message: t("errors.subjectRequired") })
      .min(1, { message: t("errors.subjectRequired") })
      .min(2, { message: t("errors.subjectMin") }),
    message: z
      .string({ message: t("errors.messageRequired") })
      .min(1, { message: t("errors.messageRequired") })
      .min(10, { message: t("errors.messageMin") }),
  });

type ContactFormValues = z.infer<ReturnType<typeof getContactSchema>>;

export default function ContactForm() {
  const t = useTranslations("contactForm");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSchema = getContactSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    const mailtoLink = `mailto:info@thumbsad.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      reset();
    }, 1500);
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-background opacity-95" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b4cff0d_1px,transparent_1px),linear-gradient(to_bottom,#6b4cff0d_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/60">
              {t("title")}
            </h2>
            <p className="text-muted-foreground text-base">
              {t("subtitle")}
            </p>
          </div>

          {/* MAIN CARD CONTAINER */}
          <div className="rounded-3xl bg-card/40 border border-border/50 backdrop-blur-2xl shadow-2xl overflow-hidden">
            
            {/* TOP EMBEDDED BANNER (Takvim Çağrısı) */}
            <div className="p-6 bg-gradient-to-r from-primary/20 via-indigo-600/15 to-primary/10 border-b border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0 shadow-inner">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t("bookMeetingTitle")}</span>
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    {t("bookMeetingBannerSub")}
                  </p>
                </div>
              </div>

              <a
                href={t("calendarUrl")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs transition-all shadow-md hover:shadow-primary/25"
              >
                <span>{t("bookMeetingButton")}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* FORM BODY */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-primary" />
                    {t("name")}
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full bg-background/60 border border-border/60 focus:border-primary/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    {t("email")}
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full bg-background/60 border border-border/60 focus:border-primary/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-primary" />
                  {t("subject")}
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  className="w-full bg-background/60 border border-border/60 focus:border-primary/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20"
                  placeholder="How can we help?"
                />
                {errors.subject && <span className="text-xs text-red-400">{errors.subject.message}</span>}
              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground/80">
                  {t("message")}
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-background/60 border border-border/60 focus:border-primary/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-white/20"
                  placeholder="Tell us more about your inquiry..."
                />
                {errors.message && <span className="text-xs text-red-400">{errors.message.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-indigo-600 hover:opacity-90 text-white font-semibold text-sm transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <span>{t("submitting")}</span>
                ) : (
                  <>
                    <span>{t("submit")}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </Container>
    </section>
  );
}
