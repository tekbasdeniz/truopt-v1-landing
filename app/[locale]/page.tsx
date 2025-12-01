import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Hero from "@/components/sections/hero"
import WaitlistForm from "@/components/sections/waitlist-form"
import Credibility from "@/components/sections/credibility"
import Problem from "@/components/sections/problem"
import HowItWorks from "@/components/sections/how-it-works"
import Agents from "@/components/sections/agents"
import BetaFit from "@/components/sections/beta-fit"
import Security from "@/components/sections/security"
import FAQ from "@/components/sections/faq"
import FinalCTA from "@/components/sections/final-cta"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WaitlistForm />
        <Credibility />
        <Problem />
        <HowItWorks />
        <Agents />
        <BetaFit />
        <Security />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home