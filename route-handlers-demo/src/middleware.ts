// When navigates to profile the user will be redirected to home page

import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const themePreference = request.cookies.get("theme")

  if(!themePreference) {
    response.cookies.set("theme", "dark")
  }

  response.headers.set("custom-header", "custom-value")

  return response
}