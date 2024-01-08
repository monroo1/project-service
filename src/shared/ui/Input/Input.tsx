import { InputHTMLAttributes, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value: string;
    onChange: (e: any) => void;
    placeholder: string;
    isInvalid?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        isInvalid = false,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            type="text"
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            className={classNames(
                cls.Input,
                {
                    [cls.invalid]: isInvalid,
                },
                [className],
            )}
            {...otherProps}
        />
    );
});
