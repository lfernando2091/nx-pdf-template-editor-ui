import { FillContent } from '../components/FillContent';
import { CenterContent } from '../components/Center';
import { Page, PageType, getSize } from '../components/BasePage';

export type DocumentPanelProps = {
    type: PageType,
    data: any
}

export const DocumentPanel = ({
    type,
    data
}: DocumentPanelProps) => {
    const pageSize = getSize(type)
    return (
        <>
            <div style={{ marginBottom: "5rem", marginTop: "3rem" }}>
            <CenterContent>
                <Page type={type}>
                    <FillContent 
                        h={data.document.margins.top}
                        borderBottom/>
                    <FillContent 
                        style={{ display: 'flex', flexDirection: "row" }}
                        h={pageSize.h - data.document.margins.top - data.document.margins.bottom}
                        borderBottom>
                        <FillContent 
                        w={data.document.margins.left}
                        borderRight/>
                        <FillContent 
                        w={pageSize.w - data.document.margins.left - data.document.margins.right}
                        borderRight/>
                        <FillContent 
                        w={data.document.margins.right}/>
                    </FillContent>
                    <FillContent 
                        h={data.document.margins.bottom}/>
                </Page>
            </CenterContent>
            </div>
        </>
    )
}