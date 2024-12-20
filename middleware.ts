import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Define public paths that don't require authentication
  const publicPaths = [
    '/api/auth/login',
    '/api/auth/callback',
    '/api/auth/logout',
    '/public', // Add any other public paths here
  ];

  // Allow access to public paths
  if (publicPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Exclude paths for static files, Next.js assets, and favicon
  const excludedPaths = ['/_next', '/static', '/favicon.ico'];
  if (excludedPaths.some((excluded) => pathname.startsWith(excluded))) {
    return NextResponse.next();
  }

  // Check for the Auth0 session cookie
  const sessionCookie = req.cookies.get('appSession'); // Replace 'appSession' with your actual Auth0 session cookie name

  // Redirect unauthenticated users to the login page
  if (!sessionCookie) {
    const loginUrl = new URL('/api/auth/login', req.url);
    loginUrl.searchParams.set('returnTo', req.nextUrl.pathname); // Preserve the original destination
    return NextResponse.redirect(loginUrl);
  }

 
 

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply middleware to all routes except API endpoints, static files, and favicon
    '/((?!api/auth|_next|static|favicon.ico).*)',
  ],
};
