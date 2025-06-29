import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, TextareaHTMLAttributes } from "react";

import cls from "../Input/Input.module.scss";

type HTMLTextareaProps = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "value" | "onChange"
>;

interface TextareaProps extends HTMLTextareaProps {
    className?: string;
    value: string;
    onChange: (e: any) => void;
    placeholder: string;
}

export const Textarea = memo((props: TextareaProps) => {
    const { className, value, onChange, placeholder, ...otherProps } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <textarea
            style={{ height: "auto" }}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            className={classNames(cls.Input, {}, [className])}
            rows={4}
            {...otherProps}
        />
    );
});
