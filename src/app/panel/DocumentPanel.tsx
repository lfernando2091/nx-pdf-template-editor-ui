import { CenterContent } from '../components/Center';
import { getSize } from '../components/BasePage';
import { useAppContext } from '../states/AppContext';
import { ComponentLocation, DEFAULT_DOCUMENT, 
    DEFAULT_MARGINS, 
    DEFAULT_PAGE_SIZE, 
    ParagraphSchema, 
    getOrDefault
} from '../models/pdf-jsonschema';
import { Circle, Layer, Stage } from 'react-konva';
import styled from '@emotion/styled';
import { ToolType } from '../section/ToolsPanel';
import { useEffect, useState } from 'react';
import { ComponentHandle } from '../components/ComponentHandle';
import { MarginsRegion } from '../components/MarginsRegion';
import Konva from 'konva';
import { DEFAULT_SIZING } from '../utils/constants';

export type DocumentPanelProps = {

}

const StageWithTheme = styled(Stage)`
    border: 2px solid var(--gray-a5);
    // background-color: var(--accent-a3);
`

export const DocumentPanel = ({
}: DocumentPanelProps) => {
    const { template, tool, setComponent, setTemplate } = useAppContext()
    const document = getOrDefault(DEFAULT_DOCUMENT, template.document);
    const [content, setContent] = useState(template.content)
    const pageSize = getSize(getOrDefault(DEFAULT_PAGE_SIZE, document.page_size))
    const margins = getOrDefault(DEFAULT_MARGINS, document.margins);

    const onClick = (ev: Konva.KonvaEventObject<MouseEvent | Event>) => {
        if (tool === ToolType.Cursor || tool === ToolType.MoveCursor) return;
        const current = Object.assign({}, template)
        switch(tool) {
            case ToolType.Text:
                const mouse = ev.evt as MouseEvent
                const newItem: ParagraphSchema = {
                    id: crypto.randomUUID(),
                    "@type": "P",
                    value: "New text",
                    alignment: "ALIGN_RIGHT",
                    size: {
                        width: DEFAULT_SIZING,
                        height: DEFAULT_SIZING
                    }, 
                    position: {
                        x: mouse.layerX, y: mouse.layerY
                    }
                }
                current.content.body.pages[0].content.push(newItem)
                break
        }
        setTemplate(current)
    }

    useEffect(() => {
        setComponent(null)
    }, [])

    useEffect(() => {
        if (tool !== ToolType.MoveCursor) {
            setComponent(null)
        }
    }, [tool])

    useEffect(() => {
        setContent(template.content)
    }, [template])

    return (
        <>
            <div style={{ marginBottom: "5rem", marginTop: "3rem" }}>
            <CenterContent>
                <StageWithTheme
                    onClick={onClick}
                    width={pageSize.w} 
                    height={pageSize.h}>
                    <Layer>
                        <MarginsRegion size={pageSize} margins={margins}/>
                        {content.header.content.map((e, i) => (
                            <ComponentHandle key={i} data={e} location={ComponentLocation.HEADER}/>
                        ))}
                        {content.body.pages[0].content.map((e, i) => (
                            <ComponentHandle key={i} data={e} location={ComponentLocation.BODY}/>
                        ))}
                        {content.footer.content.map((e, i) => (
                            <ComponentHandle key={i} data={e} location={ComponentLocation.FOOTER}/>
                        ))}
                        {/* <Circle 
                            draggable={tool ===  ToolType.MoveCursor}
                            x={DEFAULT_SIZING} 
                            y={DEFAULT_SIZING} 
                            stroke="green" 
                            radius={50} /> */}
                    </Layer>
                </StageWithTheme>
            </CenterContent>
            </div>
        </>
    )
}