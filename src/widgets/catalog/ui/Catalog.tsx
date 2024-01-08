"use client";
import { memo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Catalog.module.scss";
import { CatalogContent } from "./CatalogContent/CatalogContent";
import { IResponseGetCards, getCards } from "@/shared/api/cards";
import { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/shared/ui/Button";
import ReactPaginate from "react-paginate";
import { Text } from "@/shared/ui/Text";
import { HStack } from "@/shared/ui/Stack";

interface CatalogProps {
    className?: string;
}

export const Catalog = memo((props: CatalogProps) => {
    const { className } = props;
    const [page, setPage] = useState(1);
    const [tab, setTab] = useState(0);

    const { data: response, isLoading } = useQuery<
        AxiosResponse<IResponseGetCards>
    >({
        queryKey: ["cards", page, tab],
        queryFn: () => getCards(page, tab),
    });

    const handlePageClick = (event: any) => {
        setPage(event.selected + 1);
    };

    return (
        <section
            className={classNames(cls.Catalog, {}, [className, "wrapper"])}
        >
            <Text title="Портфолио" size="xl" className={cls.title} />
            <HStack gap="24" className={cls.tabs}>
                <Button
                    className={cls.tab}
                    isActiveTab={tab === 0 && true}
                    onClick={() => setTab(0)}
                >
                    Все
                </Button>
                <Button
                    className={cls.tab}
                    isActiveTab={tab === 1 && true}
                    onClick={() => setTab(1)}
                >
                    Кухни
                </Button>
                <Button
                    className={cls.tab}
                    isActiveTab={tab === 3 && true}
                    onClick={() => setTab(3)}
                >
                    Шкафы
                </Button>
            </HStack>
            {isLoading ? (
                <div>Загрузка...</div>
            ) : (
                <>
                    <CatalogContent
                        response={response as AxiosResponse<IResponseGetCards>}
                    />
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
                            response?.data.meta.pagination.pageCount as number
                        }
                        renderOnZeroPageCount={null}
                    />
                </>
            )}
        </section>
    );
});
