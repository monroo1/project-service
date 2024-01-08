"use client";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "../Stack";
import { Icon } from "../Icon";
import WaLogo from "../../assets/icons/WaLogo.svg";
import VkLogo from "../../assets/icons/VkLogo.svg";
import { Text } from "../Text";
import cls from "./SocialLinks.module.scss";

interface SocialLinksProps {
    className?: string;
    footer?: boolean;
}

export const SocialLinks = memo((props: SocialLinksProps) => {
    const { className, footer = false } = props;

    const Links = () => (
        <HStack
            gap={footer ? "8" : "16"}
            className={classNames("", {}, [className])}
        >
            <Icon
                Svg={WaLogo}
                height={24}
                width={24}
                clickable
                onClick={() => console.log("asd")}
            />
            <Icon
                Svg={VkLogo}
                height={24}
                width={24}
                clickable
                onClick={() => console.log("asd")}
            />
        </HStack>
    );

    return footer ? (
        <HStack gap="32">
            <Text text="Соцсети:" className={cls.text} />
            <Links />
        </HStack>
    ) : (
        <Links />
    );
});
