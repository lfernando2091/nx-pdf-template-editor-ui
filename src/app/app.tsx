// import * as data from '../assets/example.json';
import { ToolsPanel } from './section/ToolsPanel';
import { EditorContent } from './section/EditorContent';
import { DrawerContent } from './section/DrawerContent';
import { useState } from 'react';
import { AppContext, AppState } from './states/AppContext';
import { ComponentInfo, PdfJsonSchema } from './models/pdf-jsonschema';
import { ToolType } from './models/tool.model';
import { Content, Layout, LeftNavbar, Panel, RightNavbar } from './layout/DashboardLayout';
import { DEFAULT_PDF_JSON } from './utils/constants';

export function App() {
  const [currentTool, setCurrentTool] = useState<ToolType>(ToolType.Cursor)
  const [currentTemplate, setCurrentTemplate] = useState<PdfJsonSchema>(DEFAULT_PDF_JSON)
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
