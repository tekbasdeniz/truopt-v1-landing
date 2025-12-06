import HomeScreen from "@/components/screens/home-screen";
import { setRequestLocale } from 'next-intl/server';

const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeScreen />;
}

export default Home