import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);
const handleBlogRouting = createMiddleware({ ...routing, alternateLinks: false });

export default function middleware(request: NextRequest) {
    // Blog content is English-only; locale fallbacks are not translations.
    const isBlog = /^\/(?:(?:en|tr)\/)?blog(?:\/|$)/.test(request.nextUrl.pathname);
    return isBlog ? handleBlogRouting(request) : handleI18nRouting(request);
}

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
