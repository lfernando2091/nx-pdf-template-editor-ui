import { 
    Text, 
    Box, 
    Tabs, 
} from '@radix-ui/themes';
import { PropertiesPanel } from '../panel/PropertiesPanel';

export const DrawerContent = () => {
    return (
        <>
        <Tabs.Root defaultValue="props">
          <Tabs.List>
            <Tabs.Trigger value="props">Properties</Tabs.Trigger>
            <Tabs.Trigger value="layers">Layers</Tabs.Trigger>
          </Tabs.List>

          <Box px="4" pt="3" pb="2">
            <Tabs.Content value="props">
              <PropertiesPanel/>
            </Tabs.Content>
            <Tabs.Content value="layers">
              <Text size="2">Layers.</Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
        </>
    )
}