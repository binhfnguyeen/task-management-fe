"use server";

import { cookies } from "next/headers";

type SameSite = "strict" | "lax" | "none";

type CookieOptions = {
    path?: string;
    maxAge?: number; // seconds
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: SameSite;
    domain?: string;
    expires?: Date;
};

export async function getValueFromCookie(key: string): Promise<string | undefined> {
    const cookieStore = await cookies();
    return cookieStore.get(key)?.value;
}

export async function setValueToCookie(
    key: string,
    value: string,
    options: CookieOptions = {}
): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set(key, value, {
        path: options.path ?? "/",
        maxAge: options.maxAge ?? 60 * 60 * 24 * 7,
        httpOnly: options.httpOnly ?? true,
        secure: options.secure ?? process.env.NODE_ENV === "production",
        sameSite: options.sameSite ?? "lax",
        domain: options.domain,
        expires: options.expires,
    });
}

export async function deleteCookie(
    key: string,
    options: { path?: string } = {}
): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete({ name: key, path: options.path ?? "/" });
}