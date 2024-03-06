import { PageType } from "../components/BasePage"
import { DEFAULT_SIZING } from "../utils/constants";

export const DEFAULT_PAGE_SIZE = PageType.A4;
export const DEFAULT_MARGIN = 36;

export type VariableSchema = {
    type: string
    value: string
}

export type MarginSchema = {
    left?: number
    right?: number
    bottom?: number
    top?: number
}
export const DEFAULT_MARGINS: MarginSchema = {
    left: DEFAULT_MARGIN,
    right: DEFAULT_MARGIN,
    bottom: DEFAULT_MARGIN,
    top: DEFAULT_MARGIN
}

export type DocumentSchema = {
    title?: string
    author?: string
    creator?: string
    tkey_wordsitle?: string
    language?: string
    subject?: string
    page_size?: PageType
    margins?: MarginSchema
}

export const DEFAULT_DOCUMENT: DocumentSchema = {
    page_size: DEFAULT_PAGE_SIZE,
    margins: DEFAULT_MARGINS
}

export type ComponentBase = {
    id: string
    "@type": string
    size?: SizeSchema
    position?: PositionSchema
}

export type SizeSchema = {
    width: number
    height: number
}

export const DEFAULT_SIZE: SizeSchema = {
    width: DEFAULT_SIZING,
    height: DEFAULT_SIZING
}

export type PositionSchema = {
    x: number
    y: number
}

export const DEFAULT_POSITION: PositionSchema = {
    x: 0,
    y: 0
}

export type ParagraphSchema = {
    value: string
    alignment: string
} & ComponentBase

export type RectangleSchema = {
    color: string
}  & ComponentBase

export type ComponentSchema = ParagraphSchema | RectangleSchema

export type ComponentInfo = {
    data: ComponentSchema
    location: ComponentLocation
}

export type PageSchema = {
    content: Array<ComponentSchema>
}

export type ContentSchema = {
    header: {
        content: Array<ComponentSchema>
    }
    body: {
        pages: Array<PageSchema>
    }
    footer: {
        content: Array<ComponentSchema>
    }
}

export type PdfJsonSchema = {
    variables?: {
        [name: string]: VariableSchema
    }
    document?: DocumentSchema
    content: ContentSchema
}

export const DEFAULT_PDF_SCHEMA: PdfJsonSchema = {
    document: DEFAULT_DOCUMENT,
    content: {
        header: { content: [] },
        body: { pages: [] },
        footer: { content: [] }
    }
}

export enum ComponentLocation {
    HEADER,
    BODY,
    FOOTER
}

export const getOrDefault = <T>(option: T, target?: T): T => target ?? option