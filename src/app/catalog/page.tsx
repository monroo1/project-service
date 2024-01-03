import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

interface PageProps {
    className?: string;
}

const Page = memo((props: PageProps) => {
    const { className } = props;

    return <div className={classNames("", {}, [className])}>catalog</div>;
});

export default Page;
