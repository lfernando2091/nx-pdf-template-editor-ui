import { CenterContent } from '../components/Center';
import { getSize, Size } from '../components/BasePage';
import { useAppContext } from '../states/AppContext';
import { ComponentSchema, DEFAULT_DOCUMENT, 
    DEFAULT_MARGIN, 
    DEFAULT_MARGINS, 
    DEFAULT_PAGE_SIZE, 
    DEFAULT_POSITION, 
    DEFAULT_SIZE, 
    getOrDefault,
    MarginSchema,
    ParagraphSchema
} from '../models/pdf-jsonschema';
import { MouseEvent } from 'react';
import { Circle, Layer, Rect, Stage } from 'react-konva';
import styled from '@emotion/styled';
import { ToolType } from '../section/ToolsPanel';
import { DEFAULT_SIZING } from '../utils/constants';
import { NxText } from '../components/Text';

export type DocumentPanelProps = {

}

const StageWithTheme = styled(Stage)`
    border: 2px solid var(--gray-a5);
    // background-color: var(--accent-a3);
`

type MarginsRegionProps = {
    size: Size
    margins: MarginSchema
}

const MarginsRegion = ({
    size,
    margins
}: MarginsRegionProps) => {
    const marginSize = 1
    const marginColor = "green"
    return (
        <>
        <Rect width={size.w} 
            height={marginSize} 
            y={margins.top}
            fill={marginColor}/>
        <Rect width={marginSize} 
            height={size.h} 
            x={margins.left}
            fill={marginColor}/>
        <Rect width={size.w} 
            height={marginSize} 
            y={size.h - (margins.bottom ?? DEFAULT_MARGIN)}
            fill={marginColor}/>
        <Rect width={marginSize} 
            height={size.h} 
            x={size.w - (margins.right ?? DEFAULT_MARGIN)}
            fill={marginColor}/>
        </>
    )
}

type ComponentHandleProps = {
    data: ComponentSchema
    tool: ToolType
}

const ComponentHandle = ({ 
    data,
    tool
}: ComponentHandleProps) => {
    const size = getOrDefault(DEFAULT_SIZE, data.size)
    const position = getOrDefault(DEFAULT_POSITION, data.position)
    switch(data['@type']) {
        case "P":
            const comp = data as ParagraphSchema
            return  (<>
                <NxText 
                    draggable={tool ===  ToolType.MoveCursor}
                    w={size.width}
                    h={size.height}
                    x={position.x}
                    y={position.y}
                    align="center"
                    text={comp.value}/>
                </>)
        default:
            return  (<></>)
    }
}

export const DocumentPanel = ({
}: DocumentPanelProps) => {
    const { template, tool } = useAppContext()
    const document = getOrDefault(DEFAULT_DOCUMENT, template.document);
    const content = template.content;
    const pageSize = getSize(getOrDefault(DEFAULT_PAGE_SIZE, document.page_size))
    const margins = getOrDefault(DEFAULT_MARGINS, document.margins);

    const onAddNewComponent = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        // const elementRect = event.target.getBoundingClientRect();
        const x = event.pageX
        const y = event.pageY
        console.log(`onAddNewComponent x: ${x} y: ${y}`)
        console.log(event)
    }
    return (
        <>
            <div style={{ marginBottom: "5rem", marginTop: "3rem" }}>
            <CenterContent>
                <StageWithTheme
                    width={pageSize.w} 
                    height={pageSize.h}>
                    <Layer>
                        <MarginsRegion size={pageSize} margins={margins}/>
                        {content.header.content.map((e, i) => (
                            <ComponentHandle key={i} data={e} tool={tool}/>
                        ))}
                        {content.body.pages[0].content.map((e, i) => (
                            <ComponentHandle key={i} data={e} tool={tool}/>
                        ))}
                        {content.footer.content.map((e, i) => (
                            <ComponentHandle key={i} data={e} tool={tool}/>
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