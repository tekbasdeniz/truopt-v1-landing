import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Google Ads Optimization Insights and Guides | TruOpt.ai",
  description: "Practical Google Ads optimization guides, PPC audit checklists, anomaly detection and responsible AI automation.",
  alternates: { canonical: "https://truopt.ai/blog/" },
  openGraph: {
    title: "Google Ads Optimization Insights | TruOpt.ai",
    description: "Practical guides for clearer, safer Google Ads decisions.",
    type: "website",
    url: "https://truopt.ai/blog/",
    siteName: "TruOpt.ai"
  }
};

export default async function BlogIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") redirect("/blog/");
  setRequestLocale("en");
  const posts = getPublishedPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-24">
        <Container>
          <div className="max-w-3xl mb-14">
            <p className="uppercase tracking-[0.22em] text-sm text-accent font-semibold mb-4">TruOpt Insights</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">Smarter Google Ads decisions start here.</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Practical PPC optimization, account auditing and AI automation resources for marketers who want better decisions without giving up control.
            </p>
          </div>
          {posts.length === 0 ? (
            <p className="text-muted-foreground">New guides are on the way.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article key={post.slug} className="border border-border/80 rounded-2xl bg-card/80 p-7 flex flex-col hover:border-primary/60 transition-colors">
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">{post.category}</p>
                  <h2 className="text-xl font-semibold leading-snug mb-4">
                    <Link href={"/blog/" + post.slug + "/"} className="hover:text-accent transition-colors">{post.title}</Link>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-7 flex-grow">{post.summary}</p>
                  <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                    <time dateTime={post.datePublished}>{new Date(post.datePublished + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })}</time>
                    <span>{post.readingTimeMinutes} min read</span>
                  </div>
                  <Link href={"/blog/" + post.slug + "/"} className="text-sm font-semibold text-accent mt-6 hover:underline">Read guide →</Link>
                </article>
              ))}
            </div>
          )}
          <aside className="mt-20 rounded-2xl border border-primary/30 bg-primary/10 p-8">
            <h2 className="text-2xl font-semibold mb-3">Keep your AI recommendations under control.</h2>
            <p className="text-muted-foreground mb-5">TruOpt.ai combines account audits, Guardian alerts and approval-based Google Ads optimization suggestions.</p>
            <a href="https://app.truopt.ai/" className="inline-flex rounded-lg bg-primary px-5 py-3 text-white font-semibold hover:opacity-90">Explore TruOpt.ai →</a>
          </aside>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
