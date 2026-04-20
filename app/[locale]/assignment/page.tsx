'use client';

import React, { useState } from 'react'
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Container } from "@/components/ui/container"

export default function AssignmentPage({ params }: { params: { locale: string } }) {

    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        website: '',
        adSpend: '',
        challenge: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/assignment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                alert('Something went wrong');
            }
        } catch (error) {
            alert('Error submitting form');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-24 pb-16">
                <Container>

                    <div className="max-w-2xl mx-auto">

                        {!submitted ? (
                            <>
                                <h1 className="text-3xl font-semibold mb-4">
                                    Get Your AI Growth Assignment
                                </h1>

                                <p className="text-muted-foreground mb-8">
                                    Fill out the form below to receive a tailored growth assessment.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">

                                    <input name="name" placeholder="Full Name" onChange={handleChange} required className="w-full border rounded-lg px-4 py-3" />
                                    <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full border rounded-lg px-4 py-3" />
                                    <input name="company" placeholder="Company Name" onChange={handleChange} className="w-full border rounded-lg px-4 py-3" />
                                    <input name="website" placeholder="Website URL" onChange={handleChange} className="w-full border rounded-lg px-4 py-3" />
                                    <input name="adSpend" placeholder="Monthly Ad Spend" onChange={handleChange} className="w-full border rounded-lg px-4 py-3" />
                                    <textarea name="challenge" placeholder="Biggest Growth Challenge" onChange={handleChange} className="w-full border rounded-lg px-4 py-3 min-h-[120px]" />

                                    <button type="submit" disabled={loading} className="w-full bg-black text-white rounded-lg py-3">
                                        {loading ? 'Submitting...' : 'Submit Assignment'}
                                    </button>

                                </form>
                            </>
                        ) : (
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold mb-4">Thank you.</h2>
                                <p className="text-muted-foreground">
                                    Your assignment has been received. We will contact you shortly.
                                </p>
                            </div>
                        )}

                    </div>

                </Container>
            </main>

            <Footer />
        </div>
    );
}
