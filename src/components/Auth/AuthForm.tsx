"use client";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { AuthType } from "@/src/app/auth/[type]/page";
import { AuthFormLinks } from "./AuthFormLinks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuthForm } from "@/src/hooks/useAuthForm";

export function AuthForm({ type }: { type: AuthType }) {
    const { authFunctions, buttonText, schema } = useAuthForm(type);

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

    return (
        <form
            className="w-[20rem] flex flex-col  "
            onSubmit={handleSubmit(async ({ email, name, password }) => {
                await authFunctions[type](email, password, name);
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

            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                {buttonText}
            </button>
            {/* <p></p */}
            <AuthFormLinks type={type} />
        </form>
    );
}
