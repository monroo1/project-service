"use client";
import { memo, useLayoutEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

import { classNames } from "@/shared/lib/classNames/classNames";
import { IResponseGetCards, getCards } from "@/shared/api/cards";
import ReactPaginate from "react-paginate";
import { Text } from "@/shared/ui/Text";

import { CatalogContent } from "./CatalogContent/CatalogContent";

import cls from "./Catalog.module.scss";
import { CatalogContentSkeleton } from "./CatalogContent/CatalogContent.skeleton";

interface CatalogProps {
    className?: string;
}

export const Catalog = memo((props: CatalogProps) => {
    const { className } = props;
    const [page, setPage] = useState(1);
    const [init, setInit] = useState(false)

    const { data: response, isLoading } = useQuery<
        AxiosResponse<IResponseGetCards>
    >({
        queryKey: ["cards", page],
        queryFn: () => {
            return getCards(page);
        },
    });

    const handlePageClick = (event: any) => {
        setPage(event.selected + 1);
    };


    useLayoutEffect(() => {
        if(!init){
            setInit(true)
        } else {
            document
            .getElementById("catalog")
            ?.scrollIntoView({ behavior: "smooth" });
        }
    }, [page]);


    return (
        <section
            id="catalog"
            className={classNames(cls.Catalog, {}, [className, "wrapper"])}
        >
            <Text title="Портфолио" size="xl" className={cls.title} />
            
            {isLoading ? (
                <CatalogContentSkeleton />
            ) : (
                <>
                    <CatalogContent
                        response={response as AxiosResponse<IResponseGetCards>}
                    />
                    {(response?.data.meta.pagination.pageCount as number) >
                        1 && (
                        <ReactPaginate
                            pageClassName={cls.paginationItem}
                            activeClassName={cls.paginationItemActive}
                            breakClassName={cls.paginationItem}
                            previousLinkClassName={cls.none}
                            nextLinkClassName={cls.none}
                            className={cls.pagination}
                            breakLabel="..."
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            forcePage={page - 1}
                            pageCount={
                                response?.data.meta.pagination
                                    .pageCount as number
                            }
                            renderOnZeroPageCount={null}
                        />
                    )}
                </>
            )}
        </section>
    );
});
