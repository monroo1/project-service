import axios, { AxiosResponse } from "axios";
import { IResponseGetCards } from "./types";

export const getCards = async (page = 1) => {
    return (await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/portfolios?populate=*&pagination[page]=${page}&pagination[pageSize]=9`,
    )) as AxiosResponse<IResponseGetCards>;
};
