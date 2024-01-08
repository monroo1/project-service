"use client";
import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./FirstScreen.module.scss";
import { VStack } from "@/shared/ui/Stack";
import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import { useRouter } from "next/navigation";

interface FirstScreenProps {
    className?: string;
}

export const FirstScreen = memo((props: FirstScreenProps) => {
    const { className } = props;
    const router = useRouter();

    const handleRouteToForm = useCallback(() => {
        router.push("/#form");
    }, []);

    return (
        <section className={classNames(cls.FirstScreen, {}, [className])}>
            <VStack
                max
                gap="32"
                align="center"
                justify="center"
                className={classNames(cls.content, {}, ["wrapper"])}
            >
                <Text title="Производство мебели" size="xxl" align="center" />
                <Text
                    text="Мы производим комплексное изготовление корпусной мебели для жилых и коммерческих помещений, обеспечим вас качественным мебельным продуктом собственного производства."
                    size="xl"
                    align="center"
                />
                <Button onClick={handleRouteToForm}>Обсудить проект</Button>
            </VStack>
            <div className={cls.gradient} />
        </section>
    );
});
