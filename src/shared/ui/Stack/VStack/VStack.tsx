import React from "react";
import { Flex } from "../Flex/Flex";
import { FlexProps } from "../Flex/getStack";

export type VStackProps = Omit<FlexProps, "direction">;

export const VStack = (props: VStackProps) => {
    const { align = "start" } = props;

    return <Flex {...props} direction="column" align={align} />;
};
