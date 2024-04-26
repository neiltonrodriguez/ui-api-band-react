import { Api } from "../Api";
import { ApiException } from "../ApiException";
import { iTarefa } from "../../../interfaces";

const getAll = async (): Promise<iTarefa[] | ApiException> => {
    try {
        const { data } = await Api().get('');
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error ao consultar Api')
    }

};

const getById = async (id: number): Promise<iTarefa[] | ApiException> => {
    try {
        const { data } = await Api().get(`/users/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error ao consultar Api')
    }

};

const create = async (payload: Omit<iTarefa, 'id'>): Promise<iTarefa | ApiException> => {
    try {
        const { data } = await Api().post<any>('/users', payload);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'Error ao criar registro na Api')
    }

};

const updateById = () => { };

const deleteById = () => { };

export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}