import { AuthForm } from "@/src/components/Auth/AuthForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type AuthType = "login" | "register";

export default function page({ params }: { params: { type: AuthType } }) {
    if (params.type !== "register" && params.type !== "login") {
        redirect("/");
    }
    if (cookies().get("token")) {
        redirect("/");
    }
    const title = params.type === "login" ? "Fazer login" : "Criar conta";
    return (
        <div className="flex items-center justify-center h-[40rem]">
            <div className="px-4 py-6 bg-black rounded-md border-[0.1px] border-white border-opacity-50 ">
                <h2 className="text-xl  mb-5">{title}</h2>
                <AuthForm type={params.type} />
            </div>
        </div>
    );
}
