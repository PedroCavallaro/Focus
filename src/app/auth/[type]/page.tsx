import { AuthForm } from "@/src/components/Auth/AuthForm";
import { redirect } from "next/navigation";

type AuthType = "login" | "register";
export default function page({ params }: { params: { type: AuthType } }) {
    if (params.type !== "register" && params.type !== "login") {
        redirect("/");
    }

    return (
        <div className="flex items-center justify-center h-[40rem]">
            <div className="px-2 py-4 bg-black rounded-lg">
                <AuthForm />
            </div>
        </div>
    );
}
