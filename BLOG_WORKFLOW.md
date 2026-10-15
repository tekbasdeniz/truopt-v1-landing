# TruOpt.ai English blog — approval-first publishing

This blog lives at /blog, under the existing TruOpt.ai Next.js landing project. It is English-only by editorial policy; the rest of the site may remain multilingual.

## Prepare a new post
1. Copy \`content/blog/google-ads-optimization-checklist.json\` to \`content/blog/<new-slug>.json\`.
2. Use a distinct user question and actionable original content. Verify sources and current product claims.
3. Use \`status: "draft"\` until the article is ready. Draft articles do not appear in /blog or the sitemap.
4. Submit changes in a Pull Request and check the Vercel preview, including mobile rendering.
5. Once approved, set \`status: "published"\` and merge the PR. This is the publishing approval.
6. Check /blog, the article page, canonical URL, JSON-LD and /sitemap.xml after deployment.

## Daily automation phase (NOT YET ACTIVE)
An optional GitHub Action or authorized external automation can prepare one draft each morning and open a draft PR. It must never merge or publish content without human approval. AI API usage may incur separate charges. All credentials belong in GitHub Actions secrets, not the repository.

## Editorial acceptance criteria
- English-only and currently Google Ads focused, not unsupported product promises.
- Real user intent, clear answer, precise examples and sourced factual claims.
- No invented customer testimonials, benchmarks, statistics or reviews.
- No forced daily publishing if a topic has no substantive value.
- Distinct titles/descriptions, accessible headings, relevant internal product links.
- Check the existing Vercel domain routing, indexing, and deploy safety before merging.
