export interface IRequestProposal {
    Name: string;
    Email: string;
    Phone: string;
}

export interface IResponseProposal {
    data: {
        id: number;
        attributes: {
            Email: string;
            Name: string;
            Phone: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
        };
    };
}
