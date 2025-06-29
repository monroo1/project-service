import axios from "axios";
import { IRequestProposal } from "./types";

export const SendResponseProposal = (body: IRequestProposal) => {
    return axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/proposals`,
        { data: body },
        {
            headers: {
                "content-type": "application/json",
            },
        },
    );
};
