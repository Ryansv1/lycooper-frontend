import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Add a header to the response
  return NextResponse.redirect("http://localhost:4000/auth/login");
}

export const config = {
  matcher: ["/"],
};
