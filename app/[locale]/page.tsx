import type { Metadata } from "next";
import HomeScreen from "@/components/screens/home-screen";
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

const homeSeo = {
  en: {
    title: "TruOpt.ai | AI Google Ads Optimization & Audit Software",
    description: "Optimize Google Ads with AI-powered audits, Guardian alerts, and explainable recommendations. Review and approve changes with one click using TruOpt.ai.",
    url: "https://www.truopt.ai/",
  },
  tr: {
    title: "TruOpt.ai | Yapay Zekâ Destekli Google Ads Optimizasyonu",
    description: "TruOpt.ai ile Google Ads hesaplarınızı yapay zekâ destekli denetleyin. Guardian uyarılarını ve açıklanabilir önerileri inceleyip değişiklikleri tek tıkla onaylayın.",
    url: "https://www.truopt.ai/tr/",
  },
} as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const seo = locale === "tr" ? homeSeo.tr : homeSeo.en;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.url,
      languages: {
        en: homeSeo.en.url,
        tr: homeSeo.tr.url,
        "x-default": homeSeo.en.url,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      siteName: "TruOpt.ai",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
  };
}

const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeScreen />;
};

export default Home;
