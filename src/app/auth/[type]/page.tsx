import { AuthForm } from "@/src/components/Auth/AuthForm";
import { redirect } from "next/navigation";

export type AuthType = "login" | "register";

export default function page({ params }: { params: { type: AuthType } }) {
    if (params.type !== "register" && params.type !== "login") {
        redirect("/");
    }
    const title = params.type === "login" ? "Fazer login" : "Criar conta";
    return (
        <div className="flex items-center justify-center h-[40rem]">
            <div className="px-2 py-4 bg-black rounded-lg">
                <h2 className="text-lg font-bold mb-5">{title}</h2>
                <AuthForm type={params.type} />
            </div>
        </div>
    );
}
