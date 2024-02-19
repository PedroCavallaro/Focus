import { parseCookies } from "nookies";
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useLayoutEffect,
    useState,
} from "react";
import * as jwt from "jsonwebtoken";

interface AuthContextProps {
    isAuth: boolean;
}

const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
    const { token } = parseCookies();
    const [isAuth, setIsAuth] = useState(false);

    useLayoutEffect(() => {
        try {
            jwt.verify(token, String("asdasd").toString());

            setIsAuth((prev) => (prev = true));
        } catch (err) {
            setIsAuth((prev) => (prev = false));
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ isAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
