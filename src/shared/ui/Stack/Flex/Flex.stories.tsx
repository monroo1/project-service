import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";
import { Text } from "../../Text";
import { CenterStoryDecorator } from "@/shared/config/storybook/CenterStoryDecorator/CenterStoryDecorator";

const meta: Meta<typeof Flex> = {
    title: "shared/Flex",
    component: Flex,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div
                style={{
                    width: 600 + "px",
                    border: "1px solid black",
                    padding: 24 + "px",
                }}
            >
                <Story />
            </div>
        ),
        CenterStoryDecorator,
    ],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Stack: Story = {
    args: {
        direction: "column",
        children: (
            <>
                <Text text="First block" />
                <Text text="Second block" />
                <Text text="Third block" />
                <Text text="Four block" />
            </>
        ),
    },
};

export const StackGap4: Story = {
    args: {
        gap: "4",
        direction: "column",
        children: (
            <>
                <Text text="First block" />
                <Text text="Second block" />
                <Text text="Third block" />
                <Text text="Four block" />
            </>
        ),
    },
};

export const StackGap8: Story = {
    args: {
        gap: "8",
        direction: "column",
        children: (
            <>
                <Text text="First block" />
                <Text text="Second block" />
                <Text text="Third block" />
                <Text text="Four block" />
            </>
        ),
    },
};

export const StackGap16: Story = {
    args: {
        gap: "16",
        direction: "column",
        children: (
            <>
                <Text text="First block" />
                <Text text="Second block" />
                <Text text="Third block" />
                <Text text="Four block" />
            </>
        ),
    },
};
export const StackGap32: Story = {
    args: {
        gap: "32",
        direction: "column",
        children: (
            <>
                <Text text="First block" />
                <Text text="Second block" />
                <Text text="Third block" />
                <Text text="Four block" />
            </>
        ),
    },
};

export const StackJustifyStart: Story = {
    args: {
        justify: "start",
        gap: "16",
        children: (
            <>
                <Text text="First block" />
                <Text text="Second block" />
                <Text text="Third block" />
                <Text text="Four block" />
            </>
        ),
    },
};

export const StackJustifyCenter: Story = {
    args: {
        justify: "center",
        gap: "16",
        children: (
            <>
                <Text text="First block" />
                <Text text="Second block" />
                <Text text="Third block" />
                <Text text="Four block" />
            </>
        ),
    },
};

export const StackJustifyEnd: Story = {
    args: {
        justify: "end",
        gap: "16",
        children: (
            <>
                <Text text="First block" />
                <Text text="Second block" />
                <Text text="Third block" />
                <Text text="Four block" />
            </>
        ),
    },
};

export const StackJustifyBetween: Story = {
    args: {
        justify: "between",
        gap: "16",
        children: (
            <>
                <Text text="First block" />
                <Text text="Second block" />
                <Text text="Third block" />
                <Text text="Four block" />
            </>
        ),
    },
};

export const StackAlignStart: Story = {
    args: {
        align: "start",
        gap: "16",
        direction: "column",
        children: (
            <>
                <Text text="First block" />
                <Text text="Second block" />
                <Text text="Third block" />
                <Text text="Four block" />
            </>
        ),
    },
};

export const StackAlignCenter: Story = {
    args: {
        align: "center",
        gap: "16",
        direction: "column",
        children: (
            <>
                <Text text="First block" />
                <Text text="Second block" />
                <Text text="Third block" />
                <Text text="Four block" />
            </>
        ),
    },
};

export const StackAlignEnd: Story = {
    args: {
        align: "end",
        gap: "16",
        direction: "column",
        children: (
            <>
                <Text text="First block" />
                <Text text="Second block" />
                <Text text="Third" />
                <Text text="Four block" />
            </>
        ),
    },
};
