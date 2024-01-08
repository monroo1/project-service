export interface IImage {
    id: number;
    attributes: {
        name: string;
        url: string;
    };
}

export interface ICategory {
    id: number;
    attributes: {
        Name: string;
    };
}

export interface ICard {
    id: number;
    attributes: {
        Name: string;
        Description: string;
        Date: string;
        Category: {
            data: ICategory[];
        };
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
