import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Header.module.scss";
import { HStack, getStack } from "@/shared/ui/Stack";
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

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;

    return (
        <header
            className={classNames(cls.Header, {}, [
                className,
                "wrapper",
                getStack({ justify: "between", direction: "row" }),
            ])}
        >
            <AppLogo />
            <HStack gap="40">
                <AppLink href={getRouteCatalog()}>Каталог</AppLink>
                <AppLink href={getRouteAbout()}>О нас</AppLink>
                <AppLink href={getRouteAdvantages()}>Преимущества</AppLink>
                <AppLink href={getRouteStagesWork()}>Этапы работы</AppLink>
            </HStack>
            <SocialLinks />
            <HStack gap="8">
                <Icon Svg={PhoneIcon} inverted width={22} height={22} />
                <Text text="+380 67661 5415" size="xxl" className={cls.phone} />
            </HStack>
        </header>
    );
});
