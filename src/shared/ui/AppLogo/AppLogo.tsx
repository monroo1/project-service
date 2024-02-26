"use client";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import AppIcon from "../../assets/icons/Logo.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Icon } from "../Icon";

import "./AppLogo.scss";
interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;
    const router = useRouter();

    return (
        <AppIcon
            height={50}
            width={149}
            onClick={() => router.push("/")}
            className={"AppLogo"}
        />
        // <Icon
        //     Svg={AppIcon}
        //     height={50}
        //     width={149}
        //     inverted
        //     clickable
        //     onClick={() => router.push("/")}
        //     style={{ color: "green !important" }}
        //     // className={classNames(cls.AppLogo, { [cls.inverted]: fill }, [
        //     //     className,
        //     // ])}
        // />
    );
});
