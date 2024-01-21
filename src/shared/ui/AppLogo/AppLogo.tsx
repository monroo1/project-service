"use client";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import AppIcon from "../../assets/icons/AppLogo.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;
    const router = useRouter();

    return (
        <Image
            src={AppIcon}
            height={50}
            width={149}
            className={classNames("", {}, [className])}
            onClick={() => router.push("/")}
            alt="Logotype"
        />
    );
});
