import { Api } from "../Api";
import { ApiException } from "../ApiException";

const login = async (email: string, password: string) => {
    try {
        const { data } = await Api().post('/login', {email, password});
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error ao criar registro na Api')
    }

};
const logout = async () => {
    try {
        const { data } = await Api().post('/logout');
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error ao criar registro na Api')
    }

};

export const LoginService = {
   login,
   logout
}