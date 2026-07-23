"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Mail, User, MessageSquare, Calendar, ArrowUpRight, Clock, CheckCircle2 } from "lucide-react";
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
    <section className="relative py-24 md:py-32 overflow-hidden bg-black">
      {/* BACKGROUND GLOWS & GRID */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-primary/20 blur-[140px] rounded-full opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <Container className="relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.15] py-1 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/40">
            {t("title")}
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* MAIN SPLIT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* LEFT: CALENDAR HIGHLIGHT CARD */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-indigo-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative p-7 md:p-8 rounded-3xl bg-[#0d0d15]/90 border border-white/10 backdrop-blur-2xl flex flex-col justify-between h-full space-y-6">
              
              <div>
                {/* Status Indicator */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                    {t("availableSlots")}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-5 shadow-inner">
                  <Calendar className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {t("bookMeetingTitle")}
                </h3>

                <p className="text-xs md:text-sm text-foreground/70 leading-relaxed mb-6">
                  {t("bookMeetingBannerSub")}
                </p>

                <div className="space-y-3 pt-2 border-t border-white/5 text-xs text-foreground/80">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{t("feature1")}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span>{t("feature2")}</span>
                  </div>
                </div>
              </div>

              <a
                href={t("calendarUrl")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                <span>{t("bookMeetingButton")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0d0d15]/80 border border-white/10 backdrop-blur-2xl p-7 md:p-9 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-primary" />
                    {t("name")}
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full bg-black/50 border border-white/10 focus:border-primary/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20"
                    placeholder={t("placeholders.name")}
                  />
                  {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    {t("email")}
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full bg-black/50 border border-white/10 focus:border-primary/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20"
                    placeholder={t("placeholders.email")}
                  />
                  {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-foreground/80 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-primary" />
                  {t("subject")}
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  className="w-full bg-black/50 border border-white/10 focus:border-primary/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/20"
                  placeholder={t("placeholders.subject")}
                />
                {errors.subject && <span className="text-xs text-red-400">{errors.subject.message}</span>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-foreground/80">
                  {t("message")}
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 focus:border-primary/80 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-white/20"
                  placeholder={t("placeholders.message")}
                />
                {errors.message && <span className="text-xs text-red-400">{errors.message.message}</span>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-indigo-600 to-purple-600 hover:opacity-95 text-white font-semibold text-sm transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 mt-2"
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
