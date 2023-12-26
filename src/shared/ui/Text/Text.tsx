import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export type TextAlign = "right" | "left" | "center";

export type TextSize = "s" | "m" | "l" | "xl" | "xxl";

type HeaderTagType = "h1" | "h2" | "h3" | "h4" | "h5";

type FamilyType = "Releway" | "Lato";

const mapSizeToClass: Record<TextSize, string> = {
    s: cls.size_s,
    m: cls.size_m,
    l: cls.size_l,
    xl: cls.size_xl,
    xxl: cls.size_xxl,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: "h5",
    m: "h4",
    l: "h3",
    xl: "h2",
    xxl: "h1",
};

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    size?: TextSize;
    align?: TextAlign;
    bold?: boolean;
    thin?: boolean;
    family?: FamilyType;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        size = "m",
        align = "left",
        bold = false,
        thin = false,
        family = "",
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, sizeClass, cls[align], cls[family]];

    return (
        <div
            className={classNames(
                "",
                { [cls.bold]: bold, [cls.thin]: thin },
                additionalClasses,
            )}
        >
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
