import { Flex } from "../Flex/Flex";
import { FlexProps } from "../Flex/getStack";

type HStackProps = Omit<FlexProps, "direction">;

export const HStack = (props: HStackProps) => (
    <Flex direction="row" {...props} />
);
