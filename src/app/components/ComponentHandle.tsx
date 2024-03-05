import { ComponentLocation, ComponentSchema, ParagraphSchema } from "../models/pdf-jsonschema"
import { ToolType } from "../section/ToolsPanel"
import { useAppContext } from "../states/AppContext"
import { NxText } from "./Text"

type ComponentHandleProps = {
    location: ComponentLocation
    data: ComponentSchema
}

export const ComponentHandle = ({ 
    data,
    location
}: ComponentHandleProps) => {
    const { component, tool, template, setTemplate } = useAppContext()
    const onUpdate = (update: ComponentSchema) => {
        const current = Object.assign({}, template)
        if (location === ComponentLocation.HEADER) {
            current.content.header.content = current.content.header.content.map((e) => {
                if(e.id === update.id) {
                    return update
                }
                return e
            })
        }
        if (location === ComponentLocation.BODY) {
            current.content.body.pages = current.content.body.pages.map((e) => {
                e.content = e.content.map((el) => {
                    if (el.id === update.id) {
                        return update
                    }
                    return el
                })
                return e
            })
        }
        if (location === ComponentLocation.FOOTER) {
            current.content.footer.content = current.content.footer.content.map((e) => {
                if(e.id === update.id) {
                    return update
                }
                return e
            })
        }
        setTemplate(current)
    }
    switch(data['@type']) {
        case "P":
            const comp = data as ParagraphSchema
            return  (<>
                <NxText 
                    data={comp}
                    draggable={tool ===  ToolType.MoveCursor}
                    select={component?.id === comp.id && tool ===  ToolType.MoveCursor}
                    onUpdate={onUpdate}/>
                </>)
        default:
            return  (<></>)
    }
}