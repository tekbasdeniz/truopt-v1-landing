import React from 'react'
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Hero from "@/components/sections/hero"
import Credibility from "@/components/sections/credibility"
import Problem from "@/components/sections/problem"
import HowItWorks from "@/components/sections/how-it-works"
import Agents from "@/components/sections/agents"
import Team from "@/components/sections/team"
import Security from "@/components/sections/security"
import FAQ from "@/components/sections/faq"
import FinalCTA from "@/components/sections/final-cta"

const HomeScreen = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Credibility />
                <Problem />
                <HowItWorks />
                <Agents />
                <Team />
                <Security />
                <FAQ />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}

export default HomeScreen
