import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth/AuthContext";

export const Login = () => {
  const auth = useContext(AuthContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username && password) {
      const isLogged = await auth.signin(username, password)
      if(isLogged){
        console.log("logado")
      }
    }
  }

  return (
    <>
      
      <input className="border" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input className="border" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Logar</button>
    </>
  );
}