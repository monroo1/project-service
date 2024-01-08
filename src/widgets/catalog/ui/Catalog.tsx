"use client";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Catalog.module.scss";
import { CatalogContent } from "./CatalogContent/CatalogContent";
import { IResponseGetCards, getCards } from "@/shared/api/cards";
import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

interface CatalogProps {
    className?: string;
}

export const Catalog = memo((props: CatalogProps) => {
    const { className } = props;

    const { data: response, isLoading } = useQuery<
        AxiosResponse<IResponseGetCards>
    >({
        queryKey: ["cards"],
        queryFn: () => getCards(1),
    });

    return (
        <section
            className={classNames(cls.Catalog, {}, [className, "wrapper"])}
        >
            Tabs
            {!response?.data ? (
                <div>Загрузка...</div>
            ) : (
                <CatalogContent response={response} />
            )}
            Pagination
        </section>
    );
});
