import { AxiosError, AxiosResponse } from "axios";
import { AuthType } from "../app/auth/[type]/page";
import { loginSchema, registerSchema } from "../constants/auth";
import { clientApi } from "../lib/api";
import { showToast } from "../lib/swal";
import { useRouter } from "next/navigation";
import { ZodType } from "zod";
import { useState } from "react";

type AuthFormInformation = {
    [key in AuthType]: {
        schema: ZodType<any, any, any>;
        buttonText: string;
    };
};

type AuthResponse = { token: string } & { message: string };

export const useAuthForm = <T extends AuthType>(type: T) => {
    const router = useRouter();

    const authFormInfo: AuthFormInformation = {
        login: {
            schema: loginSchema,
            buttonText: "login",
        },
        register: {
            schema: registerSchema,
            buttonText: "Cadastrar",
        },
    };
    const onSubmit = async (
        type: T,
        email: string,
        password: string,
        name: string
    ) => {
        const res: AxiosResponse<AuthResponse> = await clientApi.post(
            `api/${type}`,
            {
                email,
                password,
                name,
            }
        );
        if (res.data.message) {
            showToast(res.data.message);
        }
        router.push("/");
    };

    return {
        authFormInfo,
        onSubmit,
    };
};
