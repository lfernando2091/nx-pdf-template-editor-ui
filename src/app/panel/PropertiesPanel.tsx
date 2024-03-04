import { 
    Text,
    Flex,
    TextField
} from '@radix-ui/themes';

export const PropertiesPanel = () => {

    return (
        <>
        <Flex direction="column">
            <Text size="1" mb="2" weight="bold">Id</Text>
            <TextField.Input placeholder="Element Id" />
        </Flex>
        </>
    )
}