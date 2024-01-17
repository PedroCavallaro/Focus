import { AxiosResponse } from "axios";
import { AuthType } from "../app/auth/[type]/page";
import { loginSchema, registerSchema } from "../constants/auth";
import { api } from "../lib/api";

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
        },
        register: async (email: string, password: string, name = "") => {
            console.log("registor");
            const res = await api.post("/auth/signup", {
                email,
                password,
                name,
            });
            console.log(res);
        },
    };

    return {
        schema,
        buttonText,
        authFunctions,
    };
};
