import { FillContent } from '../components/FillContent';
import { CenterContent } from '../components/Center';
import { getSize, PageBase } from '../components/BasePage';
import { useAppContext } from '../states/AppContext';
import { DEFAULT_DOCUMENT, DEFAULT_MARGIN, DEFAULT_MARGINS, DEFAULT_PAGE_SIZE, getOrDefault } from '../models/pdf-jsonschema';

export type DocumentPanelProps = {

}

export const DocumentPanel = ({
}: DocumentPanelProps) => {
    const { template } = useAppContext()
    const document = getOrDefault(DEFAULT_DOCUMENT, template.document);
    const pageSize = getSize(getOrDefault(DEFAULT_PAGE_SIZE, document.page_size))
    const margins = getOrDefault(DEFAULT_MARGINS, document.margins);
    return (
        <>
            <div style={{ marginBottom: "5rem", marginTop: "3rem" }}>
            <CenterContent>
                <PageBase h={pageSize.h} w={pageSize.w}>
                    <FillContent 
                        h={margins.top}
                        borderBottom/>
                        <FillContent 
                            style={{ display: 'flex', flexDirection: "row" }}
                            h={pageSize.h - (margins.top ?? DEFAULT_MARGIN) - (margins.bottom ?? DEFAULT_MARGIN)}
                            borderBottom>
                            <FillContent 
                            w={margins.left}
                            borderRight/>
                            <FillContent 
                            w={pageSize.w - (margins.left ?? DEFAULT_MARGIN) - (margins.right ?? DEFAULT_MARGIN)}
                            borderRight/>
                            <FillContent 
                            w={margins.right}/>
                        </FillContent>
                    <FillContent 
                        h={margins.bottom}/>
                </PageBase>
            </CenterContent>
            </div>
        </>
    )
}