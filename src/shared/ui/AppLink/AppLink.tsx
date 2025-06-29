import { ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import Link from "next/link";

interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    href: string;
    children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const { className, href, children, ...rest } = props;

    return (
        <Link
            href={href}
            className={classNames(cls.AppLink, {}, [className])}
            {...rest}
        >
            {children}
        </Link>
    );
});
