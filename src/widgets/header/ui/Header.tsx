"use client";
import { memo, useEffect, useRef, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Header.module.scss";
import { HStack, VStack, getStack } from "@/shared/ui/Stack";
import { SocialLinks } from "@/shared/ui/SocialLinks";
import { AppLogo } from "@/shared/ui/AppLogo";
import { AppLink } from "@/shared/ui/AppLink";
import {
    getRouteAbout,
    getRouteAdvantages,
    getRouteCatalog,
    getRouteStagesWork,
} from "@/shared/const/router";
import { Icon } from "@/shared/ui/Icon";
import PhoneIcon from "@/shared/assets/icons/phoneIcon.svg";
import { Text } from "@/shared/ui/Text";
import BurgerIcon from "@/shared/assets/icons/feather_menu.svg";

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;
    const [isOpen, setOpen] = useState(false);
    const rootRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const { target } = event;
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                setOpen(false);
            }
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <header
            className={classNames(cls.Header, {}, [
                className,
                "wrapper",
                getStack({ justify: "between", direction: "row" }),
            ])}
        >
            <AppLogo />
            <HStack gap="40" className={cls.nav}>
                <AppLink href={getRouteCatalog()}>Каталог</AppLink>
                <AppLink href={getRouteAbout()}>О нас</AppLink>
                <AppLink href={getRouteAdvantages()}>Преимущества</AppLink>
                <AppLink href={getRouteStagesWork()}>Этапы работы</AppLink>
            </HStack>
            <SocialLinks className={cls.social} />
            <HStack gap="8" className={cls.socialPhone}>
                <Icon Svg={PhoneIcon} inverted width={22} height={22} />
                <Text text="+380 67661 5415" size="xxl" className={cls.phone} />
            </HStack>
            <Icon
                Svg={BurgerIcon}
                inverted
                width={34}
                height={34}
                className={cls.burgerIcon}
                clickable
                onClick={() => setOpen((prev) => !prev)}
                ref={rootRef}
            />
            {isOpen && (
                <div className={cls.burgerMenu}>
                    <VStack gap="24">
                        <AppLink href={getRouteCatalog()}>Каталог</AppLink>
                        <AppLink href={getRouteAbout()}>О нас</AppLink>
                        <AppLink href={getRouteAdvantages()}>
                            Преимущества
                        </AppLink>
                        <AppLink href={getRouteStagesWork()}>
                            Этапы работы
                        </AppLink>
                        <SocialLinks />
                    </VStack>

                    <div>
                        <HStack gap="8">
                            <Icon
                                Svg={PhoneIcon}
                                inverted
                                width={22}
                                height={22}
                            />
                            <Text
                                text="+380 67661 5415"
                                size="xxl"
                                className={cls.phone}
                            />
                        </HStack>
                    </div>
                </div>
            )}
        </header>
    );
});
