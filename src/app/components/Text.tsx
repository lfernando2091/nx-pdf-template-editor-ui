import { Group, Rect, Text as KonvaText } from "react-konva"
import { COLOR_1 } from "../utils/constants"

type NxTextProps = {
    text: string
    draggable: boolean
    w: number
    h: number
    align: string
    x: number
    y: number
}

export const NxText = ({
    text,
    draggable,
    w, h, align, x, y
}: NxTextProps) => {
    return (<>
        <Group
            x={x}
            y={y}
            draggable={draggable}>
            <Rect
                stroke={COLOR_1}
                strokeWidth={1}
                width={w}
                height={h}/>
            <KonvaText
                width={w}
                height={h}
                text={text}
                align={align}
                fill={COLOR_1}
            />
        </Group>
    </>)
}