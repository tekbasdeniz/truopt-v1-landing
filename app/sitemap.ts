import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";

const site = "https://truopt.ai";

// English URLs use the default locale without a prefix.
// Turkish homepage has a locale prefix; the blog is English-only.
export default function sitemap(): MetadataRoute.Sitemap {
  const publicPaths = ["", "/pricing", "/contact", "/privacy-policy", "/cookie-policy", "/terms-of-use", "/disclaimer", "/copyright-notice", "/kvkk", "/refund-policy", "/blog"];
  const pages: MetadataRoute.Sitemap = publicPaths.map((path) => ({
    url: site + path + "/",
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/blog" ? 0.8 : 0.5,
    ...(path === "" ? {
      alternates: { languages: { en: site + "/", tr: site + "/tr/", "x-default": site + "/" } }
    } : {})
  }));
  const turkishHome: MetadataRoute.Sitemap = [{
    url: site + "/tr/",
    changeFrequency: "monthly",
    priority: 0.8,
    alternates: { languages: { en: site + "/", tr: site + "/tr/", "x-default": site + "/" } }
  }];
  const articles: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: site + "/blog/" + post.slug + "/",
    lastModified: post.dateModified || post.datePublished,
    changeFrequency: "monthly",
    priority: 0.7
  }));
  return [...pages, ...turkishHome, ...articles];
}
