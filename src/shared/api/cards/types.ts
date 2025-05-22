
export interface IImage {
    id: number;
    name: string;
    url: string;
}

export interface ICard {
    id: number;
    Name: string;
    Description: string;
    Date: string;
    Images:  IImage[];
}

export interface IResponseGetCards {
    data: ICard[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
