import { AuthType } from "@/src/app/auth/[type]/page";
import Link from "next/link";

export function AuthFormLinks({ type }: { type: AuthType }) {
    return (
        <>
            {type === "login" ? (
                <span className="mt-5  text-gray-500 dark:text-gray-400 text-sm ">
                    Nao tem uma conta?{" "}
                    <Link href={"/auth/register"} className="text-blue-600">
                        Cadastre-se
                    </Link>
                </span>
            ) : (
                <span className="mt-5  text-gray-500 dark:text-gray-400 text-sm ">
                    Ja tem uma conta?{" "}
                    <Link href={"/auth/login"} className="text-blue-600">
                        Fazer Login
                    </Link>
                </span>
            )}
        </>
    );
}
