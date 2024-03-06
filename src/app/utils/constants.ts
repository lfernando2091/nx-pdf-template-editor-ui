import { PageType } from "../components/BasePage";
import { PdfJsonSchema } from "../models/pdf-jsonschema";

export const DEFAULT_SIZING = 100;
export const DEFAULT_POSITIONING = 0;
export const COLOR_1 = "#21fec0d6"
export const COLOR_2 = "#02f99920"
export const COLOR_3 = "#fa820022"
export const COLOR_4 = "#525bff3b"
export const DEFAULT_PDF_JSON: PdfJsonSchema = {
    document: {
        author: "Created with NX PDF Templates",
        page_size: PageType.A4,
        margins: {
            top: 36,
            bottom: 36,
            left: 36,
            right: 36
        }
    },
    content: {
        header: {
            content: []
        },
        body: {
            pages: [
                { content: [] }
            ]
        },
        footer: {
            content: []
        }
    }
}