import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

interface PageProps {
    className?: string;
    params: { id: string };
}

const Page = memo((props: PageProps) => {
    const { className } = props;

    console.log(props);

    return (
        <div className={classNames("", {}, [className])}>
            catalog item {props.params.id}
        </div>
    );
});

export default Page;
