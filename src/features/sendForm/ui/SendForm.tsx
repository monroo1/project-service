"use client";
import { FormEvent, memo, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./SendForm.module.scss";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { HStack, VStack, getStack } from "@/shared/ui/Stack";
import { useMutation } from "@tanstack/react-query";
import { Text } from "@/shared/ui/Text";
import { Icon } from "@/shared/ui/Icon";
import ListIcon from "@/shared/assets/icons/List.svg";
import { IResponseProposal, SendResponseProposal } from "@/shared/api/sendForm";

interface SendFormProps {
    className?: string;
}

const reName = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
const rePhone = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;
const reEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;

export const SendForm = memo((props: SendFormProps) => {
    const { className } = props;
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [nameIsInvalid, setNameIsValid] = useState(false);
    const [phoneIsInvalid, setPhoneIsValid] = useState(false);
    const [emailIsInvalid, setEmailIsValid] = useState(false);

    const onChangeName = useCallback((value: string) => {
        setName(value);
    }, []);

    const onChangePhone = useCallback((value: string) => {
        setPhone(value);
    }, []);

    const onChangeEmail = useCallback((value: string) => {
        setEmail(value);
    }, []);

    const { mutate, isSuccess, reset } = useMutation<IResponseProposal>({
        mutationFn: () => {
            return SendResponseProposal({
                Name: name,
                Phone: phone,
                Email: email,
            });
        },
    });

    const validateInputs = () => {
        const isValidName = !reName.test(name);
        const isValidPhone = !rePhone.test(phone);
        const isValidEmail = !reEmail.test(email);

        isValidName ? setNameIsValid(true) : setNameIsValid(false);
        isValidPhone ? setPhoneIsValid(true) : setPhoneIsValid(false);
        isValidEmail ? setEmailIsValid(true) : setEmailIsValid(false);

        return isValidEmail || isValidPhone || isValidName ? false : true;
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        return validateInputs() && mutate();
    };

    const handleRetry = useCallback(() => {
        setName("");
        setPhone("");
        setEmail("");

        return reset();
    }, [reset]);

    return isSuccess ? (
        <VStack className={cls.thanks} gap="24">
            <Text title="Спасибо, что обратились к нам!" size="s" />
            <Text
                text="Наш менеджер свяжется с вами в ближайшее время."
                size="l"
            />
            <Button onClick={handleRetry}>Отправить повторно</Button>
        </VStack>
    ) : (
        <form
            onSubmit={onSubmit}
            className={classNames(cls.SendForm, {}, [
                className,
                getStack({ direction: "column", gap: "24" }),
            ])}
        >
            <Input
                placeholder="Имя"
                value={name}
                type="text"
                onChange={onChangeName}
                isInvalid={nameIsInvalid}
            />
            <Input
                placeholder="Телефон"
                value={phone}
                type="tel"
                onChange={onChangePhone}
                isInvalid={phoneIsInvalid}
            />
            <Input
                placeholder="Email"
                value={email}
                type="email"
                onChange={onChangeEmail}
                isInvalid={emailIsInvalid}
            />
            <Button max>Отправить</Button>
            <HStack gap="16" align="center" className={cls.personalData}>
                <div>
                    <Icon Svg={ListIcon} width={18} height={18} />
                </div>
                <Text
                    text='Нажимая на кнопку "Отправить" вы даете согласие на обработку персональных данных'
                    size="s"
                />
            </HStack>
        </form>
    );
});
