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
import Script from "next/script";

interface FooterProps {
    className?: string;
}

export const Footer = memo((props: FooterProps) => {
    const { className } = props;

    const router = useRouter();
    const handleRouteToForm = useCallback(() => {
        router.push("#header");
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
                        <a href="tel:+79885105252" className={cls.phone}>
                            <Text text="+7 988 510-52-52" size="xxl" />
                        </a>
                    </HStack>
                    <Text className={cls.address} text="г. Ростов-на-Дону, ул. Профсоюзная 74, 3 этаж" size="xl" />
                    {/* <Button onClick={handleRouteToForm}>Оставить заявку</Button> */}
                </VStack>
            </HStack>
            <HStack className={cls.bottom} justify="center">
                <Text text="© 2025 Проект сервис" />
            </HStack>
            <Script id="yandex-metrika" strategy="afterInteractive">
                    {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                        m[i].l=1*new Date();
                        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                        ym(102220715, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:true
                        });
                    `}
            </Script>
            <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/102220715"
                            style={{ position: 'absolute', left: '-9999px' }}
                            alt=""
                        />
                    </div>
                </noscript>
        </footer>
    );
});
