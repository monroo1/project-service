import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

interface InputProps {
    className?: string;
    value: string;
    onChange: (e: any) => void;
    placeholder: string;
}

export const Input = memo((props: InputProps) => {
    const { className, value, onChange, placeholder } = props;

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={classNames(cls.Input, {}, [className])}
        />
    );
});
