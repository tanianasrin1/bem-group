import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request) {
  console.log("request", request);
  const myCookie = cookies();
  const token = myCookie.get("token");
  const url = request.nextUrl;
  const isPublic = url?.pathname === ("/home" || "/library");

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/template"],
};
