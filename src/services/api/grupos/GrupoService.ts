import { Api } from "../Api";
import { ApiException } from "../ApiException";
import { iGroup } from "../../../interfaces";

const getAll = async (): Promise<iGroup[] | ApiException> => {
    try {
        const { data } = await Api.get('/group');
        return data.data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error ao consultar Api')
    }

};

const getById = async (id: number): Promise<iGroup[] | ApiException> => {
    try {
        const { data } = await Api.get(`/users/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error ao consultar Api')
    }

};

const create = async (payload: Omit<iGroup, 'id'>): Promise<iGroup | ApiException> => {
    try {
        const { data } = await Api.post<any>('/users', payload);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error ao criar registro na Api')
    }

};


export const GroupService = {
    getAll,
    getById,
    create,
}