import { memo } from "react";
import { AxiosResponse } from "axios";

import { Card } from "@/entities/card";
import { classNames } from "@/shared/lib/classNames/classNames";
import { IResponseGetCards } from "@/shared/api/cards";

import cls from "./CatalogContent.module.scss";

interface CatalogContentProps {
    className?: string;
    response: AxiosResponse<IResponseGetCards>;
}

export const CatalogContent = memo((props: CatalogContentProps) => {
    const { className, response } = props;

    return (
        <div className={classNames(cls.CatalogContent, {}, [className])}>
            {response.data.data.map((item, index) => {
                return <Card key={index} {...item} className={cls.item} />;
            })}
        </div>
    );
});
