import HomeScreen from "@/components/screens/home-screen";
import { setRequestLocale } from 'next-intl/server';

export default function RootPage() {
    setRequestLocale('en');
    return <HomeScreen />;
}
