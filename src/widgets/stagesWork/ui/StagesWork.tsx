import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./StagesWork.module.scss";
import { HStack, VStack } from "@/shared/ui/Stack";
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
                <Text title="Этапы работы" size="xl" align="center" />
                <HStack
                    max
                    justify="between"
                    gap="32"
                    align="start"
                    wrap="wrap"
                    className={cls.flex}
                >
                    <VStack gap="16" className={cls.item}>
                        <Text title="01" size="s" />
                        <Text text="Подписание договора" size="xl" />
                        <Text
                            text="Определяемся с бюджетом, материалами и фурнитурой. Вносим правки в проект, подписываем пакет документов."
                            size="l"
                        />
                    </VStack>
                    <VStack gap="16" className={cls.item}>
                        <Text title="02" size="s" />
                        <Text text="Изготовление " size="xl" />
                        <Text
                            text="После подписания договора и определения сроков команда Ринго приступает к самому интересному – производству!"
                            size="l"
                        />
                    </VStack>
                    <VStack gap="16" className={cls.item}>
                        <Text title="03" size="s" />
                        <Text text="Установка" size="xl" />
                        <Text
                            text="По готовности производства приступаем к монтажу на объекте. В оговоренное время выполняем доставку и монтаж."
                            size="l"
                        />
                    </VStack>
                    <VStack gap="16" className={cls.item}>
                        <Text title="04" size="s" />
                        <Text text="Новоселье" size="xl" />
                        <Text
                            text="По окончании делаем проверку и подписываем акт окончания работ."
                            size="l"
                        />
                    </VStack>
                </HStack>
            </VStack>
        </section>
    );
});
