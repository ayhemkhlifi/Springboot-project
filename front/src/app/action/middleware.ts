import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const handleVerifyToken = (tk: string | undefined): boolean => {
  return !!tk; // If token exists, return true; otherwise, return false
};

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Get token from cookies

  if (!handleVerifyToken(token)) {
    return NextResponse.redirect(new URL("/sign-in", req.url)); // Redirect if no token
  }

  return NextResponse.next(); // Continue to the requested page
}

// Apply middleware to all protected routes
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/courses/:path*"], // Only protect these pages
};
