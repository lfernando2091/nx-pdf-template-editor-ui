import { PinTopIcon } from "@radix-ui/react-icons"
import { Box, Flex, TextField } from "@radix-ui/themes"

type VarsPanelProps = {

}

export const VarsPanel = ({

}: VarsPanelProps) => {
    return (
        <>
        <Flex>
            <Box width="3">
                <TextField.Root mb="1" size="1">
                    <TextField.Slot><PinTopIcon/></TextField.Slot>
                    <TextField.Input/>
                </TextField.Root>
            </Box>
            <Box width="6">
                <TextField.Root mb="1" size="1">
                    <TextField.Slot><PinTopIcon/></TextField.Slot>
                    <TextField.Input/>
                </TextField.Root>
            </Box>
        </Flex>
        </>
    )
}