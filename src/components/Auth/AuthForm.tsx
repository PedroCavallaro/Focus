"use client";
import { FloatingLabelInput } from "../FloatingLabelInput";
import { AuthType } from "@/src/app/auth/[type]/page";
import { AuthFormLinks } from "./AuthFormLinks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthForm } from "@/src/hooks/useAuthForm";

export function AuthForm({ type }: { type: AuthType }) {
    const { onSubmit, authFormInfo } = useAuthForm(type);

    type FormData = { email: string; password: string } & {
        type: "register";
        name: string;
    };

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(authFormInfo[type].schema),
    });

    return (
        <form
            className="w-[20rem] flex flex-col  "
            onSubmit={handleSubmit(({ email, name, password }) =>
                onSubmit(type, email, password, name)
            )}
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
                className="text-black  bg-orange-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
                {authFormInfo[type].buttonText}
            </button>

            <AuthFormLinks type={type} />
        </form>
    );
}
