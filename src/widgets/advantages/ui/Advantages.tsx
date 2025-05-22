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
                        <Text title="01" />
                        {/* <div className={cls.imageWrapper}>
                            <Image
                                src={document}
                                alt="Подписание договора"
                                fill
                            />
                        </div> */}
                    </HStack>
                    <VStack max gap="8">
                        <Text title="Подписание договора" />
                        <Text
                            text="Определяемся с бюджетом, материалами и фурнитурой. Вносим правки в проект, подписываем пакет документов"
                            size="l"
                        />
                    </VStack>
                </HStack>
                <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text title="02" />
                        {/* <div className={cls.imageWrapper}>
                            <Image src={chy} alt="Изготовление" fill />
                        </div> */}
                    </HStack>
                    <VStack max gap="8">
                        <Text title="Изготовление" />
                        <Text
                            text="После подписания договора и определения сроков команда Проект сервис приступает к самому интересному – производству!"
                            size="l"
                        />
                    </VStack>
                </HStack>
                <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text title="03" />
                        {/* <div className={cls.imageWrapper}>
                            <Image src={installation} alt="Установка" fill />
                        </div> */}
                    </HStack>
                    <VStack max gap="8">
                        <Text title="Установка" />
                        <Text
                            text="По готовности производства приступаем к монтажу на объекте. В оговоренное время выполняем доставку и монтаж"
                            size="l"
                        />
                    </VStack>
                </HStack>
                <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text title="04" />
                        {/* <div className={cls.imageWrapper}>
                            <Image src={housewarming} alt="Новоселье" fill />
                        </div> */}
                    </HStack>
                    <VStack max gap="8">
                        <Text title="Новоселье" />
                        <Text
                            text="По окончании делаем проверку и подписываем акт окончания работ"
                            size="l"
                        />
                    </VStack>
                </HStack>
                {/* <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text title="05" />
                        <div className={cls.imageWrapper}>
                            <Image src={image} alt="Выгода" fill />
                        </div>
                    </HStack>
                    <VStack max gap="8">
                        <Text title="Выгода" />
                        <Text
                            text="Мы отказались от шоу-рума и офиса в пользу стоимости и мобильности. "
                            size="l"
                        />
                    </VStack>
                </HStack> */}
            </VStack>
        </section>
    );
});
