"use client";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./FirstScreen.module.scss";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { useRouter } from "next/navigation";
import { Header } from "@/widgets/header";
import { getRouteForm } from "@/shared/const/router";

interface FirstScreenProps {
    className?: string;
}

export const FirstScreen = memo((props: FirstScreenProps) => {
    const { className } = props;
    const router = useRouter();

    return (
        <section className={classNames(cls.FirstScreen, {}, [className])}>
            <Header />
            <VStack
                max
                gap="32"
                align="center"
                justify="center"
                className={classNames(cls.content, {}, ["wrapper"])}
            >
                <HStack>
                    <VStack className={cls.leftContent}>
                        <Text title="КУХНИ" size="xxl" align="left" />
                        <Text title="от производителя" size="l" align="left" />
                        <Text title="Ростов-на-Дону" size="l" align="left" />
                    </VStack>
                    <VStack className={cls.rightContent}>
                        <VStack gap="16">
                            <Text
                                className={cls.title}
                                title="БЕСПЛАТНО"
                                size="xl"
                                align="left"
                            />
                            <Text
                                className={cls.title}
                                text="Выезд дизайнера для выбора материалов"
                                size="xxl"
                                align="left"
                            />
                            <Text
                                className={cls.title}
                                text="Замер помещения"
                                size="xxl"
                                align="left"
                            />
                            <Text
                                className={cls.title}
                                text="Разработка проекта"
                                size="xxl"
                                align="left"
                            />
                        </VStack>
                        <a href={getRouteForm()} className={cls.count}>
                            <Text
                                title="РАССЧИТАТЬ СТОИМОСТЬ"
                                size="l"
                                align="left"
                            />
                        </a>
                    </VStack>
                </HStack>
                {/* <Text
                    title="Обсудить проект"
                    align="center"
                    size="s"
                    className={cls.info}
                /> */}
                {/* <HStack className={cls.links} gap="24">
                    <Icon
                        Svg={WaLogo}
                        height={24}
                        width={24}
                        clickable
                        onClick={() => router.push("https://wa.me/79889429790")}
                    />
                    <a href="tel:+79885105252" className={cls.info}>
                        <Text
                            text="+7 988 510-52-52"
                            family="Lato"
                            align="center"
                            size="xl"
                        />
                    </a>
                    <Icon
                        Svg={VkLogo}
                        height={24}
                        width={24}
                        clickable
                        onClick={() => router.push("https://vk.com/mebelpsrostov")}
                    />
                </HStack> */}
            </VStack>
            <div className={cls.gradient} />
        </section>
    );
});
