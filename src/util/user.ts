import { jwtDecode } from "jwt-decode";
import { parseCookies } from "nookies";

type User = {
    id: string;
    name: string;
    email: string;
};
export const getUser = () => {
    const { token } = parseCookies();
    if (token) {
        const decodedToken: User = jwtDecode(token);
        return decodedToken;
    }
    throw new Error("User not authenticated");
};
