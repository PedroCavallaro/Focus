import { AuthResponse } from "@/src/@types/types";
import { serverApi } from "@/src/lib/api";
import { AxiosResponse } from "axios";
import { NextRequest, NextResponse } from "next/server";

type SignInUserData = {
    email: string;
    password: string;
};

export async function POST(request: NextRequest) {
    try {
        const { email, password }: SignInUserData = await request.json();

        const res: AxiosResponse<AuthResponse> = await serverApi.post(
            "/auth/signup",
            {
                email,
                password,
            }
        );
        const { token } = res.data;

        const redirectTo = request.cookies.get("redirectTo")?.value;
        const redirectUrl = redirectTo ?? new URL("/", request.url);

        const cookieExpiresInSeconds = 60 * 60 * 24 * 10;

        return NextResponse.redirect(redirectUrl, {
            headers: {
                "Set-Cookie": `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
            },
        });
    } catch (err: any) {
        const { message } = err?.response.data;
        console.log(message);
        return NextResponse.json({ message });
    }
}
