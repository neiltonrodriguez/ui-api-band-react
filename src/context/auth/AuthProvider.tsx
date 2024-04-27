import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types"
import { LoginService } from "../../services/api/LoginService/LoginService"

export const AuthProvider = ({children}: {children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null)

    const signin = async (email: string, password: string) => {
       const data = await LoginService.login(email, password)
       if(data.user && data.access_token){
        setUser(data.user)
       }
       return data;

    }
    const signout = async () => {
        const data = await LoginService.logout()
        console.log(data)
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}