"use client";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import AppIcon from "../../assets/icons/AppLogo.svg";
import { Icon } from "../Icon";
import { useRouter } from "next/navigation";

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;
    const router = useRouter();

    return (
        <Icon
            className={classNames("", {}, [className])}
            Svg={AppIcon}
            height={50}
            width={149}
            clickable
            onClick={() => router.push("/")}
        />
    );
});
