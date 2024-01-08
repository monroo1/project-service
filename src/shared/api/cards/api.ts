import axios, { AxiosResponse } from "axios";
import { IResponseGetCards } from ".";

export const getCards = async (page = 1, id?: number) => {
    const filter = id !== 0 ? `&filters[Category]=${id}` : "";

    return (await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/portfolios?populate=*&pagination[page]=${page}&pagination[pageSize]=8${filter}`,
    )) as AxiosResponse<IResponseGetCards>;
};
