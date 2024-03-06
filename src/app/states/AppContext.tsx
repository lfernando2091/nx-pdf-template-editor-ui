import { createContext, useContext } from "react"
import { ComponentInfo, DEFAULT_PDF_SCHEMA, PdfJsonSchema } from "../models/pdf-jsonschema"
import { ToolType } from "../models/tool.model"

export type AppState = {
    tool: ToolType
    template: PdfJsonSchema
    setTemplate: (template: PdfJsonSchema) => void
    component: ComponentInfo | null
    setComponent: (id: ComponentInfo | null) => void
}

export const AppContext = createContext<AppState>({
    tool: ToolType.Cursor,
    template: DEFAULT_PDF_SCHEMA,
    setTemplate: (template: PdfJsonSchema) => { },
    component: null,
    setComponent: (component: ComponentInfo | null) => { }
})

export const useAppContext = () => useContext(AppContext)