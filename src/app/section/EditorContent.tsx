import { 
    Text, 
    Box, 
    Tabs, 
  } from '@radix-ui/themes';

export const EditorContent = () => {
    return (
        <>
        <Tabs.Root defaultValue="preview">
              <Tabs.List>
                <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                <Tabs.Trigger value="source">Source</Tabs.Trigger>
              </Tabs.List>
              <Box px="4" pt="3" pb="2">
                  <Tabs.Content value="preview">
                    <Text size="2">Preview.</Text>
                  </Tabs.Content>
                  <Tabs.Content value="source">
                    <Text size="2">Source.</Text>
                  </Tabs.Content>
              </Box>
            </Tabs.Root>
        </>
    )
}