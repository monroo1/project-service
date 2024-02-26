"use client";
import { memo } from "react";
import { Icon } from "../Icon";
import ArrowIcon from "../../assets/icons/Arrow.svg";
import cls from "./ArrowButton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ArrowButtonProps {
    className?: string;
    fill?: boolean;
}

export const ArrowButton = memo((props: ArrowButtonProps) => {
    const { className, fill = false } = props;

    const handleClick = () => console.log("1");

    return (
        <Icon
            Svg={ArrowIcon}
            inverted
            clickable
            onClick={handleClick}
            className={classNames(cls.ArrowButton, { [cls.inverted]: fill }, [
                className,
            ])}
        />
    );
});
