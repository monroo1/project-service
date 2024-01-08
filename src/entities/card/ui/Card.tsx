"use client";
import { memo, useRef } from "react";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { ICard } from "@/shared/api/cards/types";
import { Text } from "@/shared/ui/Text";
import { ArrowButton } from "@/shared/ui/ArrowButton/ArrowButton";
import cls from "./Card.module.scss";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface CardProps extends ICard {
    className?: string;
    isCatalog?: boolean;
}

export const Card = memo((props: CardProps) => {
    const { className, isCatalog = false } = props;
    const navigationPrev = useRef(null);
    const navigationNext = useRef(null);

    return (
        <VStack gap="32" className={classNames(cls.Card, {}, [className])}>
            {isCatalog ? (
                <>
                    <Swiper
                        modules={[A11y, Navigation]}
                        navigation={{
                            prevEl: navigationPrev.current,
                            nextEl: navigationNext.current,
                        }}
                        spaceBetween={40}
                        onBeforeInit={(swiper: any) => {
                            swiper.params.navigation.prevEl =
                                navigationPrev.current;
                            swiper.params.navigation.nextEl =
                                navigationNext.current;
                        }}
                        slidesPerView={1}
                        className={cls.swiperCard}
                    >
                        {props.attributes.Images.data.map((image, index) => (
                            <SwiperSlide
                                key={image.id}
                                virtualIndex={index}
                                className={cls.slideCard}
                            >
                                <div className={cls.container}>
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image.attributes.url}`}
                                        alt={image.attributes.name}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div ref={navigationPrev} className={cls.prev}>
                        <ArrowButton fill />
                    </div>
                    <div ref={navigationNext} className={cls.next}>
                        <ArrowButton fill />
                    </div>
                </>
            ) : (
                <div className={cls.container}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${props.attributes.Images.data[0].attributes.url}`}
                        alt={props.attributes.Images.data[0].attributes.name}
                    />
                </div>
            )}

            <Text title={props.attributes.Name} size="s" />
        </VStack>
    );
});
