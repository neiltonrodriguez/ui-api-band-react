import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "../../types"
import { LoginService } from "../../services/api/LoginService/LoginService"

export const AuthProvider = ({children}: {children: JSX.Element }) => {
    const [usuario, setUsuario] = useState<User | null>(null)

    const signin = async (username: string, password: string) => {
       const data = await LoginService.login(username, password)
       if(data.usuario && data.access){
        
        setUsuario(data.usuario[0])
       }

       return data;

    }
    const signout = async () => {
        const data = await LoginService.logout()
        console.log(data)
        setUsuario(null)
    }
    return (
        <AuthContext.Provider value={{usuario, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}