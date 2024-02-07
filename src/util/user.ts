import { jwtDecode } from "jwt-decode";
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
        const decodedToken: User = jwtDecode(token);
        return decodedToken;
    }
    throw new Error("User not authenticated");
};

const workout = {
    name: "",
    day: 0,
    workout: [
        {
            1: {
                info: [
                    {
                        kg: 1,
                        reps: 1,
                    },
                ],
            },
        },
    ],
};
