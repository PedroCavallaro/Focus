import Link from "next/link";
import { FloatingLabelInput } from "../FloatingLabelInput";

export function AuthForm() {
    return (
        <form className="w-[20rem] flex flex-col  ">
            <FloatingLabelInput inputType="email" label="Email" />
            <FloatingLabelInput inputType="password" label="Senha" />

            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                    />
                </div>
                <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Lembrar de mim
                </label>
            </div>
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Cadastrar
            </button>
            <span className="mt-5  text-gray-500 dark:text-gray-400 text-sm ">
                Nao tem uma conta?{" "}
                <Link href={"/auth/register"} className="text-blue-600">
                    Cadastre-se
                </Link>
            </span>
        </form>
    );
}
