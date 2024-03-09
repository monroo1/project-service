import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./StagesWork.module.scss";
import { VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";

interface StagesWorkProps {
    className?: string;
}

export const StagesWork = memo((props: StagesWorkProps) => {
    const { className } = props;

    return (
        <section className={cls.StagesWork} id="stagesWork">
            <VStack
                align="center"
                className={classNames(cls.content, {}, [className, "wrapper"])}
                max
            >
                <Text title="Наши преимущества" size="xl" align="center" />
                <div className={cls.flex}>
                    <VStack gap="16" className={cls.item}>
                        <Text title="01" size="s" />
                        <Text text="Мобильность" size="xl" />
                        <Text
                            text="Проводим встречи на объекте заказчика в любое удобное время"
                            size="l"
                        />
                    </VStack>
                    <VStack gap="16" className={cls.item}>
                        <Text title="02" size="s" />
                        <Text text="Надежность" size="xl" />
                        <Text
                            text="Система нашей работы сосредоточена на качестве и сроках завершения проекта"
                            size="l"
                        />
                    </VStack>
                    <VStack gap="16" className={cls.item}>
                        <Text title="03" size="s" />
                        <Text text="Качество" size="xl" />
                        <Text
                            text="Производим исключительно из проверенных брендов"
                            size="l"
                        />
                    </VStack>
                    <VStack gap="16" className={cls.item}>
                        <Text title="04" size="s" />
                        <Text text="Профессионализм" size="xl" />
                        <Text
                            text="Наша команда – это клуб профессионалов, объединенных в одной компании"
                            size="l"
                        />
                    </VStack>
                </div>
            </VStack>
        </section>
    );
});
