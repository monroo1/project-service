import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Flex.module.scss";
import { ReactNode } from "react";

export type FlexJustify = "start" | "center" | "end" | "between";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column" | "row-reverse";
export type FlexWrap = "nowrap" | "wrap";
export type FlexGap = "4" | "8" | "16" | "24" | "32";

export const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

export const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

export const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
    "row-reverse": cls.directionRowReverse,
};

export const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};

export interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    wrap?: FlexWrap;
    gap?: FlexGap;
    max?: boolean;
    fullHeight?: boolean;
}

type FlexPropsWithoutChildren = Omit<FlexProps, "children">;

export const getFlexAdditionalClasses = (props: FlexPropsWithoutChildren) => {
    const {
        gap,
        className,
        justify = "start",
        align = "center",
        direction = "row",
        wrap = "nowrap",
    } = props;

    return [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        cls[wrap],
        gap && gapClasses[gap],
    ];
};

export const getFlexMods = (props: FlexPropsWithoutChildren): Mods => {
    const { max, fullHeight } = props;

    return {
        [cls.max]: max,
        [cls.fullHeight]: fullHeight,
    };
};

export const getStack = (props: FlexPropsWithoutChildren) =>
    classNames(cls.Flex, getFlexMods(props), getFlexAdditionalClasses(props));
