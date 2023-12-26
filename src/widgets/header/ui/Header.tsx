import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Header.module.scss";
import { getStack } from "@/shared/ui/Stack";

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;

    return (
        <header
            className={classNames(cls.Header, {}, [
                className,
                getStack({ justify: "between", direction: "row" }),
            ])}
        >
            <div>logo</div>
            <div>nav</div>
            <div>social</div>
            <div>phone</div>
        </header>
    );
});
