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
    const { component, tool } = useAppContext()
    switch(data['@type']) {
        case "P":
            const comp = data as ParagraphSchema
            return  (<>
                <NxText 
                    data={comp}
                    draggable={tool ===  ToolType.MoveCursor}
                    select={component?.id === comp.id && tool ===  ToolType.MoveCursor}
                    location={location}/>
                </>)
        default:
            return  (<></>)
    }
}