import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request) {
  const myCookie = cookies();
  const token = myCookie.get("token");


  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/template"],
};
