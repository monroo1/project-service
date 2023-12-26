import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Flex.module.scss";
import { FlexProps, getFlexAdditionalClasses, getFlexMods } from "./getStack";

export const Flex = memo((props: FlexProps) => {
    const {
        className,
        children,
        justify = "start",
        align = "center",
        direction = "row",
        wrap = "nowrap",
        fullHeight,
        gap,
        max,
        ...otherProps
    } = props;

    const classes = getFlexAdditionalClasses(props);

    const mods = getFlexMods(props);

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
});
