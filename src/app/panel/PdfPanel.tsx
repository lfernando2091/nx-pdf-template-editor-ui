import { 
    Box,
    Grid,
    Select,
    Text,
    TextField
} from '@radix-ui/themes';
import { useAppContext } from '../states/AppContext';
import { PinTopIcon, PinLeftIcon, PinRightIcon, PinBottomIcon } from '@radix-ui/react-icons';

type PdfPanelProps = {
    
}

export const PdfPanel = ({ }: PdfPanelProps) => {
    const { template } = useAppContext()
    
    return (
        <>
            <Text size="1" mb="2" weight="bold">Title</Text>
            <TextField.Root mb="1" size="1">
                <TextField.Input value={template.document?.title}/>
            </TextField.Root>
            <Text size="1" mb="2" weight="bold">Author</Text>
            <TextField.Root mb="1" size="1">
                <TextField.Input value={template.document?.author}/>
            </TextField.Root>
            <Text size="1" mb="2" weight="bold">Creator</Text>
            <TextField.Root mb="1" size="1">
                <TextField.Input value={template.document?.creator}/>
            </TextField.Root>
            <Text size="1" mb="2" weight="bold">Key Words</Text>
            <TextField.Root mb="1" size="1">
                <TextField.Input value={template.document?.tkey_wordsitle}/>
            </TextField.Root>
            <Text size="1" mb="2" weight="bold">Language</Text>
            <TextField.Root mb="1" size="1">
                <TextField.Input value={template.document?.language}/>
            </TextField.Root>
            <Text size="1" mb="2" weight="bold">Subject</Text>
            <TextField.Root mb="1" size="1">
                <TextField.Input value={template.document?.subject}/>
            </TextField.Root>
            <Text size="1" mb="2" weight="bold">Page Size</Text>
            <Box>
                <Select.Root defaultValue="A4" size="1"
                value={template.document?.page_size}>
                    <Select.Trigger ml="2" mt="1"/>
                    <Select.Content>
                        <Select.Item value="A3">A3</Select.Item>
                        <Select.Item value="A4">A4</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Box>
            <Text size="1" mb="2" mt="2" weight="bold">Margins</Text>
            <Grid columns="3" gap="0" mb="0" width="auto">
                <Box/>
                <Box>
                    <TextField.Root mb="1" size="1">
                        <TextField.Slot><PinTopIcon/></TextField.Slot>
                        <TextField.Input value={template.document?.margins?.top}/>
                    </TextField.Root>
                </Box>
                <Box/>
                <Box>
                    <TextField.Root mb="1" size="1">
                        <TextField.Slot><PinLeftIcon/></TextField.Slot>
                        <TextField.Input value={template.document?.margins?.left}/>
                    </TextField.Root>
                </Box>
                <Box/>
                <Box>
                    <TextField.Root mb="1" size="1">
                        <TextField.Input value={template.document?.margins?.right}/>
                        <TextField.Slot><PinRightIcon/></TextField.Slot>
                    </TextField.Root>
                </Box>
                <Box/>
                <Box>
                    <TextField.Root mb="1" size="1">
                        <TextField.Slot><PinBottomIcon/></TextField.Slot>
                        <TextField.Input value={template.document?.margins?.bottom}/>
                    </TextField.Root>
                </Box>
                <Box/>
            </Grid>
        </>
    )
}