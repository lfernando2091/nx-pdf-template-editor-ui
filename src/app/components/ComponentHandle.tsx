import { ComponentInfo, ComponentLocation, ComponentSchema, ParagraphSchema } from "../models/pdf-jsonschema"
import { ToolType } from "../models/tool.model"
import { useAppContext } from "../states/AppContext"
import { COLOR_2, COLOR_3, COLOR_4 } from "../utils/constants"
import { NxText } from "./Text"

type ComponentHandleProps = {
    location: ComponentLocation
    data: ComponentSchema
}

export const ComponentHandle = ({ 
    data,
    location
}: ComponentHandleProps) => {
    const { component, tool, template, setTemplate, setComponent } = useAppContext()
    const onUpdate = (update: ComponentInfo) => {
        const current = Object.assign({}, template)
        if (location === ComponentLocation.HEADER) {
            current.content.header.content = current.content.header.content.map((e) => {
                if(e.id === update.data.id) {
                    return update.data
                }
                return e
            })
        }
        if (location === ComponentLocation.BODY) {
            current.content.body.pages = current.content.body.pages.map((e) => {
                e.content = e.content.map((el) => {
                    if (el.id === update.data.id) {
                        return update.data
                    }
                    return el
                })
                return e
            })
        }
        if (location === ComponentLocation.FOOTER) {
            current.content.footer.content = current.content.footer.content.map((e) => {
                if(e.id === update.data.id) {
                    return update.data
                }
                return e
            })
        }
        setTemplate(current)
        setComponent(update)
    }
    switch(data['@type']) {
        case "P":
            const comp = data as ParagraphSchema
            return  (<>
                <NxText 
                    data={comp}
                    draggable={tool ===  ToolType.MoveCursor}
                    select={component?.data?.id === comp.id && tool ===  ToolType.MoveCursor}
                    onUpdate={onUpdate}
                    location={location}
                    color={location === ComponentLocation.HEADER ? COLOR_3 : 
                        location === ComponentLocation.BODY ? COLOR_2: 
                        location === ComponentLocation.FOOTER ? COLOR_4: ""}/>
                </>)
        default:
            return  (<></>)
    }
}