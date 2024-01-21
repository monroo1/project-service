import axios, { AxiosResponse } from "axios";
import { IResponseGetCategories } from "./types";

export const getCategories = async () => {
    return (await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
    )) as AxiosResponse<IResponseGetCategories>;
};
