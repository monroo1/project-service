export interface ICategory {
    id: number;
    attributes: {
        Name: string;
    };
}

export interface IResponseGetCategories {
    data: ICategory[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
