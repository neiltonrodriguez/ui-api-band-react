import { BrowserRouter, Route, Routes as Routers } from "react-router-dom"
import { Dashboard, Login } from "../pages/"

export const Routes = () => {
    return (
        <BrowserRouter>
            <Routers>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
            </Routers>
        </BrowserRouter>
    );
}  