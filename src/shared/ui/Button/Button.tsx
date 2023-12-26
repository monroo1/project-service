import { ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

interface ButtonProps {
    className?: string;
    children: ReactNode;
    max?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const { className, children, max = false } = props;

    return (
        <button
            className={classNames(
                cls.Button,
                {
                    [cls.fullWidth]: max,
                },
                [className],
            )}
        >
            {children}
        </button>
    );
});
