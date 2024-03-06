import * as data from '../assets/example.json';
import styled from '@emotion/styled'
import { ToolsPanel } from './section/ToolsPanel';
import { EditorContent } from './section/EditorContent';
import { DrawerContent } from './section/DrawerContent';
import { useState } from 'react';
import { AppContext, AppState } from './states/AppContext';
import { ComponentInfo, PdfJsonSchema } from './models/pdf-jsonschema';
import { ToolType } from './models/tool.model';

const Layout = styled('div')`
  display: flex;
  justify-content: start;
  flex-direction: row;
  width: 100%;
`

const LeftNavbar = styled('div')`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow-y: auto;
`

const RightNavbar = styled('div')`
  width: 300px;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
`

const Content = styled('div')`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  flex-grow: 1;
  box-sizing: border-box;
`

const Panel = styled('div')`
  display: flex;
  justify-content: start;
  flex-direction: row-reverse;
  width: 100%;
`

export function App() {
  const [currentTool, setCurrentTool] = useState<ToolType>(ToolType.Cursor)
  const [currentTemplate, setCurrentTemplate] = useState<PdfJsonSchema>((data as unknown) as PdfJsonSchema)
  const [component, setCurrentComponent] = useState<ComponentInfo | null>(null)

  const onChangeTool = (select: ToolType) => {
    setCurrentTool(select)
  }

  const onChangeTemplate = (template: PdfJsonSchema) => {
    setCurrentTemplate(template)
  }

  const onChangeComponent = (id: ComponentInfo | null) => {
    setCurrentComponent(id)
  }

  const state: AppState = {
    tool: currentTool,
    template: currentTemplate,
    setTemplate: onChangeTemplate,
    component,
    setComponent: onChangeComponent
  }

  return (
    <>
      <AppContext.Provider value={state}>
        <Layout>
          <LeftNavbar>
            <ToolsPanel 
              onChangeTool={onChangeTool}
              current={currentTool}/>
          </LeftNavbar>
          <Panel>
            <RightNavbar>
              <DrawerContent/>
            </RightNavbar>
            <Content>
              <EditorContent/>
            </Content>
          </Panel>
        </Layout>
      </AppContext.Provider>
    </>
  );
}

export default App;
