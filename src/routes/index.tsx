import { createBrowserRouter } from "react-router-dom"
import { Dashboard, Login } from "../pages/"
import { RequireAuth } from "../context/auth/RequireAuth";
// import { App } from "../App";
import Grupo from "../pages/grupos/Grupo";
import Home from "../pages/home/Home";

export const Rotas = createBrowserRouter([
    {
        path: "/app-band",
        element: <RequireAuth><Dashboard /></RequireAuth>,
        children: [
            {
                path: "/app-band",
                element: <RequireAuth><Home /></RequireAuth>,
            },
            {
                path: "/app-band/grupos",
                element: <RequireAuth><Grupo /></RequireAuth>,
            }
        ]
    },
    {
        path: "/app-band/login",
        element: <Login />
    }
]);