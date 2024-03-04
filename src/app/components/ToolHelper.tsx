import { ReactNode } from "react"
import { 
    Separator,
    IconButton,
    HoverCard,
    Flex,
    Box,
    Heading,
    Text
} from '@radix-ui/themes';

type ToolHelperProps = {
    title: string
    subtitle: string
    children: ReactNode
    icon: ReactNode
}

export const ToolHelper = ({
    title,
    subtitle,
    children,
    icon
}: ToolHelperProps) => {
    return (
        <>
            <HoverCard.Root>
                <HoverCard.Trigger>
                    { children }
                </HoverCard.Trigger>
                <HoverCard.Content size="1" side="right">
                    <Flex gap="4">
                        { icon }
                        <Box>
                            <Heading size="1" as="h3">
                            { title }
                            </Heading>
                            <Text as="div" size="1" color="gray">
                            { subtitle }
                            </Text>
                        </Box>
                    </Flex>
                </HoverCard.Content>
            </HoverCard.Root>
        </>
    )
}