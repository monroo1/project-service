"use client";
import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Footer.module.scss";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { AppLogo } from "@/shared/ui/AppLogo";
import { SocialLinks } from "@/shared/ui/SocialLinks";
import { Button } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";
import PhoneIcon from "@/shared/assets/icons/phoneIcon.svg";
import { AppLink } from "@/shared/ui/AppLink";
import {
    getRouteCatalog,
    getRouteAbout,
    getRouteAdvantages,
    getRouteStagesWork,
} from "@/shared/const/router";
import { useRouter } from "next/navigation";

interface FooterProps {
    className?: string;
}

export const Footer = memo((props: FooterProps) => {
    const { className } = props;

    const router = useRouter();
    const handleRouteToForm = useCallback(() => {
        router.push("#form");
    }, [router]);

    return (
        <footer className={classNames(cls.Footer, {}, [className, "wrapper"])}>
            <HStack
                className={cls.content}
                justify="between"
                align="start"
                wrap="wrap"
                gap="32"
            >
                <VStack gap="32">
                    <AppLogo />
                    <SocialLinks footer />
                </VStack>
                <HStack gap="40">
                    <VStack gap="32">
                        <AppLink href={getRouteAbout()}>О нас</AppLink>
                        <AppLink href={getRouteCatalog()}>Портфолио</AppLink>
                        <AppLink href={getRouteAdvantages()}>
                            Преимущества
                        </AppLink>
                        <AppLink href={getRouteStagesWork()}>
                            Этапы работы
                        </AppLink>
                    </VStack>
                </HStack>
                <VStack gap="32">
                    <HStack gap="8">
                        <Icon Svg={PhoneIcon} inverted width={22} height={22} />
                        <Text
                            text="+7 988 510-52-52"
                            size="xxl"
                            className={cls.phone}
                        />
                    </HStack>
                    <Button onClick={handleRouteToForm}>Оставить заявку</Button>
                </VStack>
            </HStack>
            <HStack className={cls.bottom} justify="center">
                <Text text="© 2024 Проект сервис" />
            </HStack>
        </footer>
    );
});
