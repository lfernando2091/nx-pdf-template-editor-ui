import { CenterContent } from '../components/Center';
import { getSize } from '../components/BasePage';
import { useAppContext } from '../states/AppContext';
import { ComponentLocation, DEFAULT_DOCUMENT, 
    DEFAULT_MARGINS, 
    DEFAULT_PAGE_SIZE, 
    getOrDefault
} from '../models/pdf-jsonschema';
import { Circle, Layer, Stage } from 'react-konva';
import styled from '@emotion/styled';
import { ToolType } from '../section/ToolsPanel';
import { useEffect, useState } from 'react';
import { ComponentHandle } from '../components/ComponentHandle';
import { MarginsRegion } from '../components/MarginsRegion';

export type DocumentPanelProps = {

}

const StageWithTheme = styled(Stage)`
    border: 2px solid var(--gray-a5);
    // background-color: var(--accent-a3);
`

export const DocumentPanel = ({
}: DocumentPanelProps) => {
    const { template, tool, setComponent } = useAppContext()
    const document = getOrDefault(DEFAULT_DOCUMENT, template.document);
    const [content, setContent] = useState(template.content)
    const pageSize = getSize(getOrDefault(DEFAULT_PAGE_SIZE, document.page_size))
    const margins = getOrDefault(DEFAULT_MARGINS, document.margins);

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