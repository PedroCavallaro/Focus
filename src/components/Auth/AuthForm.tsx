"use client";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { AuthType } from "@/src/app/auth/[type]/page";
import { AuthFormLinks } from "./AuthFormLinks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuthForm } from "@/src/hooks/useAuthForm";

export function AuthForm({ type }: { type: AuthType }) {
    const { buttonText, schema } = useAuthForm(type);

    type FormData = z.infer<typeof schema> & {
        type: "register";
        name: string;
    };

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });
    console.log(schema);
    console.log(errors);
    return (
        <form
            className="w-[20rem] flex flex-col "
            onSubmit={handleSubmit(() => {
                console.log("oi");
            })}
        >
            {type === "register" && (
                <FloatingLabelInput
                    inputType="text"
                    label="Nome"
                    {...register("name")}
                    errors={errors.name?.message}
                />
            )}
            <FloatingLabelInput
                inputType="email"
                label="Email"
                {...register("email")}
                errors={errors.email?.message}
            />
            <FloatingLabelInput
                inputType="password"
                label="Senha"
                {...register("password")}
                errors={errors.password?.message}
            />

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
                {buttonText}
            </button>
            <AuthFormLinks type={type} />
        </form>
    );
}
