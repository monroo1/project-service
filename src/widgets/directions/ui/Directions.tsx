import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Directions.module.scss";
import { Text } from "@/shared/ui/Text";
import { HStack, VStack } from "@/shared/ui/Stack";
import Image from "next/image";
import designImage from "@/shared/assets/directions/design.png";
import productionImage from "@/shared/assets/directions/production.png";
import furnishingsImage from "@/shared/assets/directions/furnishings.png";

interface DirectionsProps {
    className?: string;
}

export const Directions = memo((props: DirectionsProps) => {
    const { className } = props;

    return (
        <section
            className={classNames(cls.Directions, {}, [className, "wrapper"])}
        >
            <Text
                title="Наши направления"
                size="xl"
                className={cls.title}
                align="center"
            />
            <HStack max wrap="wrap" justify="between">
                <VStack className={cls.item} justify="center">
                    <Text title="01" size="s" bold />
                    <Text title="Дизайн интерьера" size="s" bold />
                    <div>
                        <Image src={designImage} alt="Дизайн интерьера" fill />
                    </div>
                </VStack>
                <VStack className={cls.item}>
                    <Text title="02" size="s" bold />
                    <Text title="Производство мебели" size="s" bold />
                    <div>
                        <Image
                            src={productionImage}
                            alt="Производство мебели"
                            quality={80}
                            fill
                        />
                    </div>
                </VStack>
                <VStack className={cls.item}>
                    <Text title="03" size="s" bold />
                    <Text title="Комплексная меблировка" size="s" bold />
                    <div>
                        <Image
                            src={furnishingsImage}
                            alt="Комплексная меблировка"
                            fill
                        />
                    </div>
                </VStack>
            </HStack>
        </section>
    );
});
