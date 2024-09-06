
export interface IImage {
    id: number;
    attributes: {
        name: string;
        url: string;
    };
}

export interface ICard {
    id: number;
    attributes: {
        Name: string;
        Description: string;
        Date: string;
        Images: {
            data: IImage[];
        };
    };
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
