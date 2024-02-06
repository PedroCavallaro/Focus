import { AuthType } from "@/src/app/auth/[type]/page";
import Link from "next/link";

export function AuthFormLinks({ type }: { type: AuthType }) {
    const text = {
        login: {
            href: "/auth/register",
            title: "Nao tem uma conta?",
            type: " Cadastre-se",
        },
        register: {
            href: "/auth/login",
            title: "Ja tem uma conta?",
            type: " Fazer Login",
        },
    };
    const { href, title, type: formType } = text[type];

    return (
        <span className="mt-5  text-gray-500 dark:text-gray-400 text-sm ">
            {title}
            <Link href={href} className="text-orange-primary">
                {formType}
            </Link>
        </span>
    );
}
