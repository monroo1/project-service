"use client";
import { memo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { ICard } from "@/shared/api/cards/types";
import { Text } from "@/shared/ui/Text";
import cls from "./Card.module.scss";
import { Slider } from "./slider/Slider";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface CardProps extends ICard {
    className?: string;
}

export const Card = memo((props: CardProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleVisibleModal = () => setIsOpen((prev) => !prev)

    return (
        <>
            <Slider images={props.attributes.Images.data} isOpen={isOpen} handleChangeVisibility={handleToggleVisibleModal}/>
            <VStack gap="16" className={classNames(cls.Card, {}, [className])} onClick={handleToggleVisibleModal}>
                
                <div className={cls.container}>
                    <img
                        src={process.env.NEXT_PUBLIC_IMAGE_URL + props.attributes.Images.data[0].attributes.url}
                        alt={props.attributes.Images.data[0].attributes.name}
                    />
                </div>
                <Text title={props.attributes.Name} size="s" />
                
                <Text className={cls.btn} text="Смотреть проект" />
            </VStack>
        </>
    );
});
