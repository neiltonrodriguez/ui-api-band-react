import { createContext } from "react";
import { User } from "../../types";
import { iResponseLogin } from "../../interfaces";

export type AuthContextType = {
    usuario: User | null;
    signin: (username: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);