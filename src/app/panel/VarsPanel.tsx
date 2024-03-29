import { Box, Grid, TextArea, TextField, Text, Button } from "@radix-ui/themes"
import { useAppContext } from "../states/AppContext"
import { useState, ChangeEvent } from "react"

type VarsPanelProps = {

}

export const VarsPanel = ({

}: VarsPanelProps) => {
    const { template } = useAppContext()
    const [variables, setVariables] = useState(template.variables ?? {})

    const onUpdateVariableName = (ev: ChangeEvent<HTMLInputElement>) => {
        const current = ev.target.value
        const newVars = template.variables
        //TODO Review to overwrite variables names 
    }

    const onUpdateVariableContent = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        const current = ev.target.value
    }

    return (
        <>
        <Grid columns="2" gap="1" width="max-content">
            {Object.keys(variables).map((e) => (<>
                <Box>
                    <TextField.Root
                    variant="soft" 
                    mb="1" 
                    size="1">
                        <TextField.Input 
                        value={e}
                        placeholder="Variable name"
                        onChange={onUpdateVariableName}/>
                    </TextField.Root>
                </Box>
                <Box>
                    <TextArea 
                        mb="1" size="1"
                        variant="soft"
                        value={variables[e].value}
                        placeholder="Variable content"
                        rows={3} 
                        onChange={onUpdateVariableContent}/>
                </Box>
            </>))}
        </Grid>
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Button variant="soft" style={{ width: "100%" }}>
                Add new
            </Button>
        </div>

        <Text size="2" mb="3" mt="2" weight="bold">
            Default variables
        </Text>
        <Grid columns="2" mt="2" gap="1" width="max-content">
                <Box>
                    <TextField.Root
                    variant="soft" 
                    mb="1" 
                    size="1">
                        <TextField.Input 
                        defaultValue="PAGE_NUM"
                        readOnly/>
                    </TextField.Root>
                </Box>
                <Box>
                    <Text size="1" mb="2" mt="2" weight="light">
                       Gets the current page number.
                    </Text>
                </Box>
        </Grid>
        </>
    )
}