import * as jwt from "jsonwebtoken";
import { parseCookies } from "nookies";
import { string } from "zod";

type User = {
    id: string;
    name: string;
    email: string;
};
export const getUser = () => {
    const { token } = parseCookies();
    if (token) {
        try {
            const decodedToken: User = jwt.verify(token, "asdasd") as User;

            return decodedToken;
        } catch (err) {
            return null;
        }
    }
    return null;
};
