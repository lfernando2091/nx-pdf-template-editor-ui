import { PinTopIcon } from "@radix-ui/react-icons"
import { Box, Flex, Grid, TextField } from "@radix-ui/themes"

type VarsPanelProps = {

}

export const VarsPanel = ({

}: VarsPanelProps) => {
    return (
        <>
        <Grid columns="2" gap="1" width="max-content">
            <Box width="9">
                <TextField.Root mb="1" size="1">
                    <TextField.Slot><PinTopIcon/></TextField.Slot>
                    <TextField.Input/>
                </TextField.Root>
            </Box>
            <Box>
                <TextField.Root mb="1" size="1">
                    <TextField.Slot><PinTopIcon/></TextField.Slot>
                    <TextField.Input/>
                </TextField.Root>
            </Box>
        </Grid>
        </>
    )
}