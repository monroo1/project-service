"use client";
import { memo, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "@/entities/card";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import { getStack } from "@/shared/ui/Stack";
import { classNames } from "@/shared/lib/classNames/classNames";
import { IResponseGetCards, getCards } from "@/shared/api/cards";
import { getRouteCatalog } from "@/shared/const/router";
import { ArrowButton } from "@/shared/ui/ArrowButton/ArrowButton";

import cls from "./NowWork.module.scss";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface NowWorkProps {
    className?: string;
}

export const NowWork = memo((props: NowWorkProps) => {
    const { className } = props;
    const router = useRouter();
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const handleRouteToCatalog = useCallback(() => {
        router.push(getRouteCatalog());
    }, []);

    const { data: response, isLoading } = useQuery<
        AxiosResponse<IResponseGetCards>
    >({
        queryKey: ["cards"],
        queryFn: () => getCards(1),
    });

    return (
        <section
            className={classNames(cls.NowWork, {}, [
                className,
                getStack({ direction: "column", justify: "center", gap: "40" }),
            ])}
        >
            <Text title="Сейчас в работе" size="xl" />
            {isLoading ? (
                <div>Загрузка...</div>
            ) : (
                <>
                    <Swiper
                        modules={[A11y, Navigation]}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        spaceBetween={40}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        initialSlide={1}
                        className={cls.swp}
                    >
                        {response?.data.data.map((card, index) => (
                            <SwiperSlide
                                key={card.id}
                                virtualIndex={index}
                                className={cls.element}
                            >
                                {({ isActive }) => (
                                    <Card
                                        className={
                                            !isActive
                                                ? cls.notActive
                                                : undefined
                                        }
                                        {...card}
                                    />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div ref={navigationPrevRef} className={cls.prevArrow}>
                        <ArrowButton fill />
                    </div>
                    <div ref={navigationNextRef} className={cls.nextArrow}>
                        <ArrowButton fill />
                    </div>
                </>
            )}
            <Button onClick={handleRouteToCatalog}>Портфолио</Button>
        </section>
    );
});
