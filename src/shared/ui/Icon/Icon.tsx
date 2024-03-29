import React, { ForwardedRef, forwardRef, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Icon.module.scss";

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

interface NonClickableBaseIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseIconProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableBaseIconProps | ClickableBaseIconProps;

export const Icon = forwardRef(
    (props: IconProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            Svg,
            width = 32,
            clickable,
            height = 32,
            inverted = false,
            ...otherProps
        } = props;

        const icon = (
            <Svg
                className={classNames(
                    cls.Icon,
                    {
                        [cls.inverted]: inverted,
                    },
                    [className],
                )}
                width={width}
                height={height}
                {...otherProps}
                onClick={undefined}
            />
        );

        if (clickable) {
            return (
                <button
                    type="button"
                    className={cls.button}
                    onClick={props.onClick}
                    style={{ width, height }}
                    ref={ref}
                >
                    {icon}
                </button>
            );
        }

        return icon;
    },
);
