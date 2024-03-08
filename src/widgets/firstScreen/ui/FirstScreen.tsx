"use client";
import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./FirstScreen.module.scss";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import { useRouter } from "next/navigation";
import { SocialLinks } from "@/shared/ui/SocialLinks";
import { Icon } from "@/shared/ui/Icon";

import WaLogo from "@/shared/assets/icons/WaLogo.svg";
import VkLogo from "@/shared/assets/icons/VkLogo.svg";

interface FirstScreenProps {
    className?: string;
}

export const FirstScreen = memo((props: FirstScreenProps) => {
    const { className } = props;
    const router = useRouter();

    const handleRouteToForm = useCallback(() => {
        router.push("/#form");
    }, [router]);

    return (
        <section className={classNames(cls.FirstScreen, {}, [className])}>
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

                <HStack className={cls.links} gap="24">
                    <Icon
                        Svg={WaLogo}
                        height={24}
                        width={24}
                        clickable
                        onClick={() => router.push("https://wa.me/79889429790")}
                    />

                    <Text
                        title="Обсудим проект?"
                        align="center"
                        size="s"
                        className={cls.info}
                    />
                    <Icon
                        Svg={VkLogo}
                        height={24}
                        width={24}
                        clickable
                        onClick={() => router.push("https://vk.com/mebel_ps")}
                    />
                </HStack>
                {/* <Button onClick={handleRouteToForm} className={cls.links}>
                    Обсудим проект?
                </Button> */}
                {/* <SocialLinks /> */}
            </VStack>
            <div className={cls.gradient} />
        </section>
    );
});
