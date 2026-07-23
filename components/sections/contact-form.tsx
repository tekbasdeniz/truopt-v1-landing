"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, Calendar, ArrowUpRight, Sparkles, Clock, CheckCircle2 } from "lucide-react";
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
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-background opacity-95" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b4cff0d_1px,transparent_1px),linear-gradient(to_bottom,#6b4cff0d_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        
        {/* Animated Ambient Glows */}
        <motion.div
          className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none"
          animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-600/20 rounded-full blur-[130px] pointer-events-none"
          animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/25 text-xs font-semibold text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>7/24 Destek & Birebir İletişim</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/60">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* LEFT SIDE: Meeting Callout & Quick Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Featured Meeting Card */}
            <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-b from-card/80 to-card/30 border border-primary/20 backdrop-blur-2xl shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/35 transition-all pointer-events-none" />
              
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-6 text-primary shadow-inner">
                <Calendar className="w-6 h-6" />
              </div>

              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                En Hızlı Yol
              </span>

              <h3 className="text-2xl font-bold text-white mb-3">
                {t("bookMeetingTitle")}
              </h3>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {t("bookMeetingDesc")}
              </p>

              <div className="space-y-2.5 mb-8 text-xs md:text-sm text-foreground/80">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Yapay Zeka Otomasyon Canlı Demosu</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>15–30 Dakikalık Birebir Görüşme</span>
                </div>
              </div>

              <a
                href={t("calendarUrl")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 group/btn"
              >
                <span>{t("bookMeetingButton")}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>

            {/* Direct Contact info pill */}
            <div className="p-5 rounded-2xl bg-card/30 border border-border/40 backdrop-blur-lg flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-muted/30 border border-border/50 flex items-center justify-center text-foreground shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Doğrudan E-posta</p>
                <a href="mailto:info@thumbsad.com" className="text-sm font-semibold text-white hover:text-primary transition-colors">
                  info@thumbsad.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-1 rounded-3xl bg-gradient-to-b from-border/80 via-border/30 to-transparent">
              <div className="bg-card/50 backdrop-blur-2xl rounded-[22px] p-6 md:p-8 border border-border/40 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  
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
                        className="w-full bg-background/60 border border-border/60 focus:border-primary/60 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <span className="text-xs text-red-400">{errors.name.message}</span>
                      )}
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
                        className="w-full bg-background/60 border border-border/60 focus:border-primary/60 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="text-xs text-red-400">{errors.email.message}</span>
                      )}
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
                      className="w-full bg-background/60 border border-border/60 focus:border-primary/60 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Nasıl yardımcı olabiliriz?"
                    />
                    {errors.subject && (
                      <span className="text-xs text-red-400">{errors.subject.message}</span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">
                      {t("message")}
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full bg-background/60 border border-border/60 focus:border-primary/60 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Mesajınızın detaylarını buraya yazabilirsiniz..."
                    />
                    {errors.message && (
                      <span className="text-xs text-red-400">{errors.message.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-primary to-indigo-600 text-white p-3.5 font-semibold text-sm transition-all shadow-md hover:shadow-primary/25 flex items-center justify-center space-x-2 disabled:opacity-70 mt-2"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          {t("submitting")}
                        </>
                      ) : (
                        <>
                          {t("submit")}
                          <Send className="w-4 h-4 ml-1 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>

                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
