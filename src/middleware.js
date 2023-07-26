import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("myTokenName")?.value;

  if (jwt === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(jwt, new TextEncoder().encode("ecommerce-api"));

    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/about-us",
    "/all",
    "/boys",
    "/careers",
    "/cart",
    "/clothes",
    "/components",
    "/contact",
    "/faq",
    "/for-baby",
    "/girls",
    "/home-and-toys",
    "/sales",
    "/terms-and-conditions",
    "/toys",
  ], //todas las rutas que requieren estar logeado (rutas protegidas)
};
