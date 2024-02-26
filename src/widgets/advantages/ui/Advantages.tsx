import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Advantages.module.scss";
import { Text } from "@/shared/ui/Text";
import { HStack, VStack } from "@/shared/ui/Stack";
import Image from "next/image";
import image from "@/shared/assets/advantages/first.png";

interface AdvantagesProps {
    className?: string;
}

export const Advantages = memo((props: AdvantagesProps) => {
    const { className } = props;

    return (
        <section
            className={classNames(cls.Advantages, {}, [className, "wrapper"])}
            id="advantages"
        >
            <Text title="Наши преимущества" size="xl" align="center" />
            <VStack gap="24">
                <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text title="01" />
                        <div className={cls.imageWrapper}>
                            <Image src={image} alt="Мобильность" fill />
                        </div>
                    </HStack>
                    <VStack max gap="8">
                        <Text title="Мобильность" />
                        <Text
                            text="Проводим встречи на объекте заказчика в любое удобное время"
                            size="l"
                        />
                    </VStack>
                </HStack>
                <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text title="02" />
                        <div className={cls.imageWrapper}>
                            <Image src={image} alt="Надежность" fill />
                        </div>
                    </HStack>
                    <VStack max gap="8">
                        <Text title="Надежность" />
                        <Text
                            text="Система нашей работы сосредоточена на качестве и сроках завершения проекта"
                            size="l"
                        />
                    </VStack>
                </HStack>
                <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text title="03" />
                        <div className={cls.imageWrapper}>
                            <Image src={image} alt="Качество" fill />
                        </div>
                    </HStack>
                    <VStack max gap="8">
                        <Text title="Качество" />
                        <Text
                            text="Производим исключительно из проверенных брендов"
                            size="l"
                        />
                    </VStack>
                </HStack>
                <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text title="04" />
                        <div className={cls.imageWrapper}>
                            <Image src={image} alt="Профессионализм" fill />
                        </div>
                    </HStack>
                    <VStack max gap="8">
                        <Text title="Профессионализм" />
                        <Text
                            text="Наша команда – это клуб профессионалов, объединенных в одной компании"
                            size="l"
                        />
                    </VStack>
                </HStack>
                {/* <HStack className={cls.item} align="start">
                    <HStack align="start">
                        <Text title="05" />
                        <div className={cls.imageWrapper}>
                            <Image src={image} alt="Выгода" fill />
                        </div>
                    </HStack>
                    <VStack max gap="8">
                        <Text title="Выгода" />
                        <Text
                            text="Мы отказались от шоу-рума и офиса в пользу стоимости и мобильности. "
                            size="l"
                        />
                    </VStack>
                </HStack> */}
            </VStack>
        </section>
    );
});
