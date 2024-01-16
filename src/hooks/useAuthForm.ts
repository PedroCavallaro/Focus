import { AuthType } from "../app/auth/[type]/page";
import { loginSchema, registerSchema } from "../constants/auth";

export const useAuthForm = <T extends AuthType>(type: T) => {
    const schema = type === "login" ? loginSchema : registerSchema;
    const buttonText = type === "login" ? "Entrar" : "Cadastrar";

    return {
        schema,
        buttonText,
    };
};
