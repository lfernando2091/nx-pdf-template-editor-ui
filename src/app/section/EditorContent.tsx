import * as data from '../../assets/example.json';
import { 
    Box, 
    Tabs, 
  } from '@radix-ui/themes';
import { DocumentPanel } from '../panel/DocumentPanel';
import { SourcePanel } from '../panel/SourcePanel';
import { PageType } from '../components/BasePage';

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
                    <DocumentPanel type={PageType.A4} data={data}/>
                  </Tabs.Content>
                  <Tabs.Content value="source">
                    <SourcePanel/>
                  </Tabs.Content>
              </Box>
            </Tabs.Root>
        </>
    )
}