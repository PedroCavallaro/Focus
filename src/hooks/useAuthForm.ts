import { AxiosError, AxiosResponse } from "axios";
import { AuthType } from "../app/auth/[type]/page";
import { loginSchema, registerSchema } from "../constants/auth";
import { api } from "../lib/api";
import { showToast } from "../lib/swal";
import { unknown } from "zod";

type AuthFunctions = {
    [key in AuthType]: (
        email: string,
        password: string,
        name?: string
    ) => Promise<void>;
};

type AuthResponse = { token: string } & { message: string };

export const useAuthForm = <T extends AuthType>(type: T) => {
    const schema = type === "login" ? loginSchema : registerSchema;
    const buttonText = type === "login" ? "Entrar" : "Cadastrar";

    const authFunctions: AuthFunctions = {
        login: async (email: string, password: string, name = "") => {
            try {
                const res: AxiosResponse<AuthResponse> = await api.post(
                    "/auth/sigin",
                    {
                        email,
                        password,
                    }
                );
                const { data } = res;
                if (data.message) {
                    console.log(data.message);
                }
                console.log(data?.token);
            } catch (err: unknown | AxiosError<AuthResponse>) {
                showToast("err");
            }
        },
        register: async (email: string, password: string, name = "") => {
            showToast("asdasda asd as da");
            const res = await api.post("/auth/signup", {
                email,
                password,
                name,
            });
            console.log(res);
        },
    };
    const onSubmit = async (
        type: AuthType,
        email: string,
        password: string,
        name: string
    ) => {
        await authFunctions[type](email, password, name);
    };

    return {
        schema,
        buttonText,
        onSubmit,
        showToast,
    };
};
