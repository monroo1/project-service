export interface IRequestProposal {
    Name: string;
    Phone: string;
    Description?: string;
    FeedbackType: "phone" | "wa";
}

export interface IResponseProposal {
    data: {
        id: number;
        attributes: {
            Name: string;
            Phone: string;
            Description?: string;
            FeedbackType: "phone" | "wa";
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
        };
    };
}
