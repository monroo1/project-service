import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Advantages.module.scss";
import { Text } from "@/shared/ui/Text";
import { HStack, VStack } from "@/shared/ui/Stack";
import Image from "next/image";
import housewarming from "@/shared/assets/advantages/housewarming.jpg";
import document from "@/shared/assets/advantages/document.jpg";
import installation from "@/shared/assets/advantages/installation.jpg";
import chy from "@/shared/assets/advantages/chy.jpg";

interface AdvantagesProps {
    className?: string;
}

export const Advantages = memo((props: AdvantagesProps) => {
    const { className } = props;

    return (
        <section
            className={classNames(cls.Advantages, {}, [className, "wrapper"])}
            id="advantages"
        >
            <Text title="Этапы работы" size="xl" align="center" />
            <VStack gap="24">
                <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text size="s" title="01" />
                        {/* <div className={cls.imageWrapper}>
                            <Image
                                src={document}
                                alt="Подписание договора"
                                fill
                            />
                        </div> */}
                    </HStack>
                    <VStack max gap="8">
                        {/* <Text title="Подписание договора" /> */}
                        <Text
                            text="Встреча с дизайнером для предварительного замера, обсуждения проекта, выбора материалов"
                            size="xl"
                        />
                    </VStack>
                </HStack>
                <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text size="s" title="02" />
                        {/* <div className={cls.imageWrapper}>
                            <Image src={chy} alt="Изготовление" fill />
                        </div> */}
                    </HStack>
                    <VStack max gap="8">
                        <Text
                            text="Разработка проекта, согласование эскизов, выбор дизайнерских решений"
                            size="xl"
                        />
                    </VStack>
                </HStack>
                <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text size="s" title="03" />
                        {/* <div className={cls.imageWrapper}>
                            <Image src={installation} alt="Установка" fill />
                        </div> */}
                    </HStack>
                    <VStack max gap="8">
                        <Text
                            text="Подготовка коммерческого предложения, согласование стоимости проекта, подписание договора"
                            size="xl"
                        />
                    </VStack>
                </HStack>
                <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text size="s" title="04" />
                        {/* <div className={cls.imageWrapper}>
                            <Image src={housewarming} alt="Новоселье" fill />
                        </div> */}
                    </HStack>
                    <VStack max gap="8">
                        <Text
                            text="Контрольный замер"
                            size="xl"
                        />
                    </VStack>
                </HStack>
                <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text size="s" title="05" />
                        {/* <div className={cls.imageWrapper}>
                            <Image src={housewarming} alt="Новоселье" fill />
                        </div> */}
                    </HStack>
                    <VStack max gap="8">
                        <Text
                            text="Изготовление и монтаж"
                            size="xl"
                        />
                    </VStack>
                </HStack>
            </VStack>
        </section>
    );
});
