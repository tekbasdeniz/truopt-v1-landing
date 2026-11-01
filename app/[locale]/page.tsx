import type { Metadata } from "next";
import HomeScreen from "@/components/screens/home-screen";
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isTurkish = locale === "tr";
  const title = isTurkish
    ? "TruOpt.ai | Yapay Zekâ Destekli Google Ads Optimizasyonu"
    : "TruOpt.ai | AI Google Ads Optimization & Human Approval";
  const description = isTurkish
    ? "Google Ads hesaplarınızı yapay zekâ ile analiz edin, anomalileri takip edin ve optimizasyon önerilerini kontrol ederek onaylayın."
    : "Analyze Google Ads performance, detect anomalies with Guardian alerts, and review AI-powered optimization recommendations before applying changes.";
  const canonical = isTurkish ? "https://truopt.ai/tr/" : "https://truopt.ai/";
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { en: "https://truopt.ai/", tr: "https://truopt.ai/tr/", "x-default": "https://truopt.ai/" }
    },
    openGraph: { title, description, url: canonical, siteName: "TruOpt.ai", type: "website", locale: isTurkish ? "tr_TR" : "en_US" },
    twitter: { card: "summary_large_image", title, description }
  };
}

const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeScreen />;
};

export default Home;
