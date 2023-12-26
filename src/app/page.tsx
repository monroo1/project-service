"use client";
import { AppLink } from "@/shared/ui/AppLink";
import { ArrowButton } from "@/shared/ui/ArrowButton/ArrowButton";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { SetStateAction, useState } from "react";

export default function Home() {
    const [state, setState] = useState("");

    return (
        <main>
            <Button>Обсудить проект</Button>
            <AppLink href="/">Main</AppLink>
            <ArrowButton />
            <ArrowButton fill />
            <Input value={state} onChange={setState} placeholder="Введите" />

            <Text
                title="Заголовок h1"
                text="Text lorem"
                size="xxl"
                family="Releway"
            />
        </main>
    );
}
