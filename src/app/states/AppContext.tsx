import { createContext, useContext } from "react"
import { ToolType } from "../section/ToolsPanel"
import { DEFAULT_PDF_SCHEMA, PdfJsonSchema } from "../models/pdf-jsonschema"

export type AppState = {
    tool: ToolType
    template: PdfJsonSchema
    setTemplate: (template: PdfJsonSchema) => void
    componentId: string | null
    setComponentId: (id: string | null) => void
}

export const AppContext = createContext<AppState>({
    tool: ToolType.Cursor,
    template: DEFAULT_PDF_SCHEMA,
    setTemplate: (template: PdfJsonSchema) => { },
    componentId: null,
    setComponentId: (id: string | null) => { }
})

export const useAppContext = () => useContext(AppContext)