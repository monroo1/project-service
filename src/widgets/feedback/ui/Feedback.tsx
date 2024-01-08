import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Feedback.module.scss";
import { SendForm } from "@/features/sendForm";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import Image from "next/image";
import ProposalImg from "@/shared/assets/background/proposal.jpeg";

interface FeedbackProps {
    className?: string;
}

export const Feedback = memo((props: FeedbackProps) => {
    const { className } = props;

    return (
        <section
            className={classNames(cls.Feedback, {}, [className])}
            id="form"
        >
            <HStack
                className={classNames(cls.content, {}, ["wrapper"])}
                justify="between"
            >
                <VStack gap="24">
                    <Text title="Обсудим ваш проект?" size="xl" />
                    <Text
                        text="Заполните форму и в ближайшее время мы свяжемся с вами!"
                        size="l"
                    />
                    <SendForm />
                </VStack>
                <div className={cls.imageWrapper}>
                    <Image src={ProposalImg} alt="Proposal image" fill />
                </div>
            </HStack>
        </section>
    );
});
