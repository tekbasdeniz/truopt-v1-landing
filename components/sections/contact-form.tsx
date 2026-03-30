"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, ArrowRight, Mail, User, MessageSquare } from "lucide-react";
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
    
    // Construct the mailto link
    const mailtoLink = `mailto:tekbasdeniz@thumbsad.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;

    // Open default mail client
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      reset();
    }, 1500);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-background opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b4cff08_1px,transparent_1px),linear-gradient(to_bottom,#6b4cff08_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        
        {/* Glow Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6b4cff] rounded-full blur-[120px] opacity-[0.1] mix-blend-screen"
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
           className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#4f5dff] rounded-full blur-[100px] opacity-[0.1] mix-blend-screen"
           animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
           transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-primary/10 border border-primary/20">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground">
                {t("subtitle")}
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="relative p-1 rounded-2xl bg-gradient-to-b from-border/50 to-transparent"
          >
            <div className="bg-card/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 relative">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      {t("name")}
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                       <Mail className="w-4 h-4 text-primary" />
                      {t("email")}
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">
                     {t("subject")}
                  </label>
                  <input
                    {...register("subject")}
                    type="text"
                    className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="How can we help?"
                  />
                  {errors.subject && (
                    <span className="text-xs text-red-400">{errors.subject.message}</span>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">
                    {t("message")}
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full bg-background/50 border border-border/50 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400">{errors.message.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full relative group overflow-hidden rounded-xl bg-primary text-primary-foreground p-4 font-medium transition-all hover:bg-primary/90 flex items-center justify-center space-x-2 disabled:opacity-70"
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
                          <Send className="w-4 h-4 ml-1 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                  </span>
                  
                  {/* Button Hover Effect */}
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
