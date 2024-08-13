"use client";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./FirstScreen.module.scss";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { useRouter } from "next/navigation";
import { Icon } from "@/shared/ui/Icon";

import WaLogo from "@/shared/assets/icons/WaLogo.svg";
import VkLogo from "@/shared/assets/icons/VkLogo.svg";
import { Header } from "@/widgets/header";

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
                <Text title="Производство мебели" size="xxl" align="center" />
                <Text
                    text="Мы производим комплексное изготовление корпусной мебели для жилых и коммерческих помещений, обеспечим вас качественным мебельным продуктом собственного производства."
                    size="xl"
                    align="center"
                />
                <Text
                    title="Обсудить проект"
                    align="center"
                    size="s"
                    className={cls.info}
                />
                <HStack className={cls.links} gap="24">
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
                </HStack>
            </VStack>
            <div className={cls.gradient} />
        </section>
    );
});
