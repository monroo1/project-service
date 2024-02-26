import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./About.module.scss";
import { HStack, getStack } from "@/shared/ui/Stack";
import { Icon } from "@/shared/ui/Icon";
import { Text } from "@/shared/ui/Text";
import ListIcon from "@/shared/assets/icons/List.svg";

interface AboutProps {
    className?: string;
}

export const About = memo((props: AboutProps) => {
    const { className } = props;

    return (
        <article
            className={classNames(cls.About, {}, [
                className,
                "wrapper",
                getStack({ direction: "column" }),
            ])}
            id="about"
        >
            <Text
                title="Проект Сервис – создан выполнять объектные задачи комплексной меблировки жилых и коммерческих помещений."
                align="center"
                size="l"
            />
            <div className={cls.content}>
                <HStack gap="16" align="start" className={cls.firstItem}>
                    <div>
                        <Icon Svg={ListIcon} width={18} height={18} />
                    </div>
                    <Text
                        text="Наш коллектив нацелен на результат – своевременно реализовать проект на самом высоком уровне. Мы обеспечиваем спокойствие заказчика и решаем любые задачи."
                        size="xl"
                    />
                </HStack>
                <HStack gap="16" align="start" className={cls.secondItem}>
                    <div>
                        <Icon Svg={ListIcon} width={18} height={18} />
                    </div>
                    <Text
                        text="Наши специалисты готовы к реализации самых смелых идей дизайнеров интерьеров, так как накопили достаточный опыт и найдут решение любой новой мебельной задачи."
                        size="xl"
                    />
                </HStack>
            </div>
        </article>
    );
});
