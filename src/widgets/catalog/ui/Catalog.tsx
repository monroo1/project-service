"use client";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";

import { classNames } from "@/shared/lib/classNames/classNames";
import { IResponseGetCards, getCards } from "@/shared/api/cards";
import { Button } from "@/shared/ui/Button";
import ReactPaginate from "react-paginate";
import { Text } from "@/shared/ui/Text";
import { HStack } from "@/shared/ui/Stack";
import { IResponseGetCategories, getCategories } from "@/shared/api/caegories";

import { CatalogContent } from "./CatalogContent/CatalogContent";

import cls from "./Catalog.module.scss";
import { useRouter } from "next/navigation";

interface CatalogProps {
    className?: string;
}

export const Catalog = memo((props: CatalogProps) => {
    const { className } = props;
    const [page, setPage] = useState(1);
    const [tab, setTab] = useState(0);
    const tabPrev = useRef(0);

    const { data: response, isLoading } = useQuery<
        AxiosResponse<IResponseGetCards>
    >({
        queryKey: ["cards", page, tab],
        queryFn: () => {
            if (tabPrev.current !== tab) {
                setPage(1);
                return getCards(1, tab);
            }
            tabPrev.current = tab;
            return getCards(page, tab);
        },
    });

    const { data: categories, isLoading: isLoadingCategories } = useQuery<
        AxiosResponse<IResponseGetCategories>
    >({
        queryKey: ["categories"],
        queryFn: () => getCategories(),
    });

    const handlePageClick = (event: any) => {
        setPage(event.selected + 1);
    };

    useLayoutEffect(() => {
        document
            .getElementById("catalog")
            ?.scrollIntoView({ behavior: "smooth" });
    }, [page]);

    return (
        <section
            id="catalog"
            className={classNames(cls.Catalog, {}, [className, "wrapper"])}
        >
            <Text title="Портфолио" size="xl" className={cls.title} />
            <HStack gap="24" wrap="wrap" className={cls.tabs}>
                {!isLoadingCategories && categories ? (
                    <>
                        <Button
                            className={cls.tab}
                            isActiveTab={tab === 0 && true}
                            onClick={() => setTab(0)}
                        >
                            Все
                        </Button>
                        {categories.data.data.map((item) => (
                            <Button
                                key={item.id}
                                className={cls.tab}
                                isActiveTab={tab === item.id && true}
                                onClick={() => setTab(item.id)}
                            >
                                {item.attributes.Name}
                            </Button>
                        ))}
                    </>
                ) : (
                    <div>Загрузка категорий...</div>
                )}
            </HStack>
            {isLoading ? (
                <div>Загрузка...</div>
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
