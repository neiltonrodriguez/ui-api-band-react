import { BrowserRouter, Route, Routes as Routers } from "react-router-dom"
import { Dashboard, Login } from "../pages/"
import { RequireAuth } from "../context/auth/RequireAuth";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Routers>
                <Route path="/" element={<RequireAuth><Dashboard /></RequireAuth>} />
                <Route path="/login" element={<Login />} />
            </Routers>
        </BrowserRouter>
    );
}  