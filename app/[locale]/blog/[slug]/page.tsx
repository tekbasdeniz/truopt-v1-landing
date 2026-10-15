import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { getPublishedPost } from "@/lib/blog";

type Props = { params: Promise<{ locale: string; slug: string }> };
const site = "https://truopt.ai";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = locale === "en" ? getPublishedPost(slug) : undefined;
  if (!post) return { robots: { index: false, follow: false } };
  const url = site + "/blog/" + post.slug + "/";
  return {
    title: post.title + " | TruOpt.ai",
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      siteName: "TruOpt.ai",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified || post.datePublished,
      locale: "en_US"
    },
    twitter: { card: "summary", title: post.title, description: post.description }
  };
}

export default async function BlogArticle({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "en") redirect("/blog/" + slug + "/");
  setRequestLocale("en");
  const post = getPublishedPost(slug);
  if (!post) notFound();
  const url = site + "/blog/" + post.slug + "/";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    inLanguage: "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "TruOpt.ai", url: site },
    publisher: { "@type": "Organization", name: "TruOpt.ai", url: site }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link href="/blog/" className="text-sm text-accent font-medium hover:underline">← All insights</Link>
            <article className="mt-10">
              <header className="mb-12 pb-10 border-b border-border">
                <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-5">{post.category}</p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-7">{post.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{post.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>By TruOpt.ai</span>
                  <time dateTime={post.datePublished}>{new Date(post.datePublished + "T00:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time>
                  <span>{post.readingTimeMinutes} min read</span>
                </div>
              </header>
              <p className="text-lg leading-8 text-foreground/90 mb-10">{post.intro}</p>
              <section aria-labelledby="takeaways" className="border border-primary/30 bg-primary/10 rounded-2xl p-7 mb-12">
                <h2 id="takeaways" className="text-xl font-semibold mb-4">Key takeaways</h2>
                <ul className="list-disc pl-6 space-y-3 text-foreground/90">{post.takeaways.map((item, i) => <li key={i}>{item}</li>)}</ul>
              </section>
              {post.sections.map((section, i) => (
                <section key={i} className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-semibold leading-snug mb-5">{section.heading}</h2>
                  {section.paragraphs.map((paragraph, j) => <p key={j} className="text-base sm:text-lg text-foreground/85 leading-8 mb-5">{paragraph}</p>)}
                  {section.bullets && <ul className="list-disc pl-6 space-y-3 text-foreground/85 leading-7">{section.bullets.map((bullet, j) => <li key={j}>{bullet}</li>)}</ul>}
                </section>
              ))}
              {post.references.length > 0 && (
                <section className="border-t border-border pt-8 mt-16">
                  <h2 className="text-xl font-semibold mb-4">Further reading and sources</h2>
                  <ul className="space-y-3">{post.references.map((ref) => (
                    <li key={ref.url}><a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-words">{ref.label} ↗</a></li>
                  ))}</ul>
                </section>
              )}
            </article>
            <aside className="mt-16 rounded-2xl border border-primary/30 bg-primary/10 p-8">
              <h2 className="text-2xl font-semibold mb-3">AI-assisted Google Ads, with human approval.</h2>
              <p className="text-muted-foreground mb-5">Discover how TruOpt.ai brings together account reviews, Guardian alerts and explainable recommendations.</p>
              <a href="https://app.truopt.ai/" className="inline-flex rounded-lg bg-primary px-5 py-3 text-white font-semibold hover:opacity-90">Explore TruOpt.ai →</a>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </div>
  );
}
