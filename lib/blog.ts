import "server-only";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export type BlogPost = {
  slug: string;
  status: "draft" | "published";
  title: string;
  description: string;
  summary: string;
  category: string;
  datePublished: string;
  dateModified?: string;
  readingTimeMinutes: number;
  intro: string;
  takeaways: string[];
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
  references: Array<{ label: string; url: string }>;
};

const contentDirectory = join(process.cwd(), "content", "blog");

export function getPublishedPosts(): BlogPost[] {
  return readdirSync(contentDirectory)
    .filter((filename) => filename.endsWith(".json"))
    .flatMap((filename) => {
      const post = JSON.parse(readFileSync(join(contentDirectory, filename), "utf8")) as BlogPost;
      if (
        post.status !== "published" ||
        filename !== post.slug + ".json" ||
        !post.title || !post.description ||
        !Array.isArray(post.sections)
      ) return [];
      return [post];
    })
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}
export function getPublishedPost(slug: string) {
  return getPublishedPosts().find((post) => post.slug === slug);
}
