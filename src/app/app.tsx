import styled from '@emotion/styled'
import { ToolType, ToolsPanel } from './section/ToolsPanel';
import { EditorContent } from './section/EditorContent';
import { DrawerContent } from './section/DrawerContent';
import { useState } from 'react';

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

  const onChangeTool = (select: ToolType) => {
    setCurrentTool(select)
  }

  return (
    <>
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
    </>
  );
}

export default App;
