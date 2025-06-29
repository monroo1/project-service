"use client";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "../Stack";
import { Icon } from "../Icon";
import WaLogo from "../../assets/icons/whatsapp.svg";
import VkLogo from "../../assets/icons/VkLogo.svg";
import TgLogo from "../../assets/icons/telegram.svg";
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
            <a href="https://wa.me/79885105252" target="_blank">
                <Icon Svg={WaLogo} height={24} width={24} />
            </a>
            <a href="https://vk.com/ps_mebel" target="_blank">
                <Icon Svg={VkLogo} height={24} width={24} />
            </a>
            <a href="https://t.me/proekt_servis" target="_blank">
                <Icon Svg={TgLogo} height={24} width={24} />
            </a>
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
