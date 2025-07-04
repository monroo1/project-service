"use client";
import { FormEvent, memo, useCallback, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./FeedbackForm.module.scss";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { HStack, VStack, getStack } from "@/shared/ui/Stack";
import { useMutation } from "@tanstack/react-query";
import { Text } from "@/shared/ui/Text";
import { Icon } from "@/shared/ui/Icon";
import ListIcon from "@/shared/assets/icons/List.svg";
import { IResponseProposal, SendResponseProposal } from "@/shared/api/sendForm";
import { Textarea } from "@/shared/ui/Textarea";

interface SendFormProps {
    className?: string;
}

const rePhone = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;

export const SendForm = memo((props: SendFormProps) => {
    const { className } = props;
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [feedbackType, setFeedbackType] = useState<"wa" | "phone">("wa");
    const [nameIsInvalid, setNameIsValid] = useState(false);
    const [phoneIsInvalid, setPhoneIsValid] = useState(false);

    const onChangeName = useCallback((value: string) => {
        setName(value);
    }, []);

    const onChangePhone = useCallback((value: string) => {
        setPhone(value);
    }, []);

    const onChangeDescription = useCallback((value: string) => {
        setDescription(value);
    }, []);

    const onChangeFeedbackType = useCallback((value: "wa" | "phone") => {
        setFeedbackType(value);
    }, []);

    const { mutate, isSuccess, reset } = useMutation<IResponseProposal>({
        mutationFn: () => {
            return SendResponseProposal({
                Name: name,
                Phone: phone,
                Description: description,
                FeedbackType: feedbackType,
            });
        },
    });

    const validateInputs = () => {
        const isValidName = name.length >= 2;
        const isValidPhone = !rePhone.test(phone);

        isValidName ? setNameIsValid(true) : setNameIsValid(false);
        isValidPhone ? setPhoneIsValid(true) : setPhoneIsValid(false);

        return isValidPhone || isValidName ? false : true;
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log({
            Name: name,
            Phone: phone,
            Description: description,
            FeedbackType: feedbackType,
        });

        return validateInputs() && mutate();
    };

    const handleRetry = useCallback(() => {
        setName("");
        setPhone("");
        setDescription("");
        setFeedbackType("wa");

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
                getStack({
                    direction: "column",
                    gap: "24",
                    align: "start",
                }),
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
                placeholder="Номер телефона"
                value={phone}
                type="tel"
                onChange={onChangePhone}
                isInvalid={phoneIsInvalid}
            />
            <VStack gap="8">
                <HStack gap="16" align="center">
                    <label className={cls.radioLabel}>
                        <input
                            type="radio"
                            value="wa"
                            checked={feedbackType === "wa"}
                            onChange={() => onChangeFeedbackType("wa")}
                            className={cls.radioInput}
                        />
                        <span className={cls.radioCustom}></span>
                        Whats App
                    </label>
                    <label className={cls.radioLabel}>
                        <input
                            type="radio"
                            value="phone"
                            checked={feedbackType === "phone"}
                            onChange={() => onChangeFeedbackType("phone")}
                            className={cls.radioInput}
                        />
                        <span className={cls.radioCustom}></span>
                        Звонок
                    </label>
                </HStack>
            </VStack>
            <Textarea
                placeholder="Описание (необязательно)"
                value={description}
                onChange={onChangeDescription}
                rows={3}
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
