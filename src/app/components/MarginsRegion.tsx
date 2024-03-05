import { Rect } from "react-konva"
import { Size } from "./BasePage"
import { DEFAULT_MARGIN, MarginSchema } from "../models/pdf-jsonschema"

type MarginsRegionProps = {
    size: Size
    margins: MarginSchema
}

export const MarginsRegion = ({
    size,
    margins
}: MarginsRegionProps) => {
    const marginSize = 1
    const marginColor = "green"
    return (
        <>
        <Rect width={size.w} 
            height={marginSize} 
            y={margins.top}
            fill={marginColor}/>
        <Rect width={marginSize} 
            height={size.h} 
            x={margins.left}
            fill={marginColor}/>
        <Rect width={size.w} 
            height={marginSize} 
            y={size.h - (margins.bottom ?? DEFAULT_MARGIN)}
            fill={marginColor}/>
        <Rect width={marginSize} 
            height={size.h} 
            x={size.w - (margins.right ?? DEFAULT_MARGIN)}
            fill={marginColor}/>
        </>
    )
}